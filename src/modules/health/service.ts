import { NextResponse } from "next/server";
import { createHealthResponse } from "./utils";
import type { HealthCheckResponse } from "./types";

export async function getHealthStatus(): Promise<
	NextResponse<HealthCheckResponse>
> {
	try {
		const healthData = createHealthResponse(true);

		return NextResponse.json(healthData, {
			status: 200,
			headers: {
				"Cache-Control": "no-store",
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		const errorResponse = createHealthResponse(
			false,
			error instanceof Error ? error : new Error("Unknown error"),
		);

		return NextResponse.json(errorResponse, {
			status: 503,
			headers: {
				"Cache-Control": "no-store",
				"Content-Type": "application/json",
			},
		});
	}
}
