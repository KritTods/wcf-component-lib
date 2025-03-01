export interface HealthCheckResponse {
	status: "ok" | "error";
	message: string;
	timestamp: string;
	system: {
		uptime: number;
		platform: string;
		memory: {
			total: number;
			free: number;
			usage: number;
		};
		cpu: {
			cores: number;
			load: number[];
		};
	};
	app: {
		rootPath: string;
		version: string;
		environment: string;
		nodeVersion: string;
		uptime: number;
	};
	checks: {
		database?: "connected" | "disconnected";
		cache?: "connected" | "disconnected";
		api?: "available" | "unavailable";
	};
}
