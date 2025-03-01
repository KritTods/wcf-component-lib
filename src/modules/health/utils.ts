import path from "path";
import { readFileSync } from "fs";
import os from "os";
import type { HealthCheckResponse } from "./types";

export function getPackageVersion(): string {
	try {
		const packageJsonPath = path.join(process.cwd(), "package.json");
		const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8")) as {
			version?: string;
		};

		return packageJson.version || "0.0.0";
	} catch (error) {
		console.error("Error reading package.json:", error);
		return "0.0.0";
	}
}

export function getSystemMetrics() {
	const totalMemory = os.totalmem();
	const freeMemory = os.freemem();
	const usedMemory = totalMemory - freeMemory;

	return {
		uptime: os.uptime(),
		platform: os.platform(),
		memory: {
			total: Math.round(totalMemory / 1024 / 1024),
			free: Math.round(freeMemory / 1024 / 1024),
			usage: Math.round((usedMemory / totalMemory) * 100),
		},
		cpu: {
			cores: os.cpus().length,
			load: os.loadavg(),
		},
	};
}

export function getAppInfo() {
	return {
		rootPath: process.env.NEXT_PUBLIC_BASE_PATH || "",
		version: getPackageVersion(),
		environment: process.env.NEXT_PUBLIC_DEV || "",
		nodeVersion: process.version,
		uptime: process.uptime(),
	};
}

export function createHealthResponse(
	isHealthy: boolean,
	error?: Error,
): HealthCheckResponse {
	const systemMetrics = getSystemMetrics();
	const appInfo = getAppInfo();

	if (isHealthy) {
		return {
			status: "ok",
			message: "System is healthy",
			timestamp: new Date().toISOString(),
			system: systemMetrics,
			app: appInfo,
			checks: {},
		};
	}

	return {
		status: "error",
		message: error?.message || "Internal server error",
		timestamp: new Date().toISOString(),
		system: {
			...systemMetrics,
			memory: {
				total: 0,
				free: 0,
				usage: 0,
			},
		},
		app: appInfo,
		checks: {},
	};
}
