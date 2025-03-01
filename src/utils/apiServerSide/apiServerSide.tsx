"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { RequestParams, ResponseType, urlBase } from "./index";

export async function apiServerSide({
	method,
	url,
	urlFull,
	body,
	instanceName = "ums",
	responseType = "json" as ResponseType,
}: RequestParams): Promise<object> {
	const urlBaseInstance = urlFull ? urlFull : urlBase[instanceName];
	if (!urlBaseInstance) {
		throw new Error(`Instance ${instanceName} not found`);
	}

	const token = cookies().get("accessToken")?.value || "";
	const header = { Authorization: `Bearer ${token}` };
	const config = body ? { data: body } : {};

	let httpsAgent;
	if (typeof window === "undefined" && process.env.NEXT_PUBLIC_DEV === "dev") {
		const { Agent } = await import("https");
		httpsAgent = new Agent({ rejectUnauthorized: false });
	}

	try {
		const result: { data: unknown; status: number } = await axios.request({
			method,
			url: urlBaseInstance + url,
			headers: header,
			responseType,
			httpsAgent,
			timeout: 30000,
			maxContentLength: Infinity,
			maxBodyLength: Infinity,
			...config,
		});

		return { data: result.data, status: result.status };
	} catch (error: unknown) {
		const err = error as { response: { status: number; data: unknown } };

		if (axios.isAxiosError(error)) {
			console.error("Axios error:", error.response?.data || error.message);
		}

		if (err?.response?.status)
			return { status: err?.response?.status, data: err?.response?.data };
		else {
			console.log("🚀 ~ apiServerSide ~ error:");
			console.log(error);

			return { status: 500, data: { title: "Internal Server Error" } };
		}
	}
}
