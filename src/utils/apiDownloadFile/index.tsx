import axios from "axios";
import Cookies from "js-cookie";
import { urlBase } from "../apiServerSide/index";

interface DownloadFileOptions {
	url: string;
	instanceName?: InstanceName;
	fileName?: string;
	fileExtension?: string;
	method?: string;
}

type InstanceName =
	| "adm_new"
	| "adm_tool"
	| "cmp"
	| "mdm"
	| "nms"
	| "reg"
	| "ssoData"
	| "med"
	| "ums"
	| "cons"
	| "ml";

export const apiDownloadFile = async ({
	url,
	instanceName = "ums",
	fileName = "downloaded-file",
	fileExtension = ".xlsx",
	method = "GET",
}: DownloadFileOptions): Promise<void> => {
	const urlBaseInstance = urlBase[instanceName];
	if (!urlBaseInstance) {
		throw new Error(`Instance ${instanceName} not found`);
	}

	try {
		const response = await axios({
			url: urlBaseInstance + url,
			method,
			headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` },
			responseType: "blob",
		});
		// Create a URL for the blob and trigger the download
		const blobUrl = window.URL.createObjectURL(response.data as Blob);
		const link = document.createElement("a");
		link.href = blobUrl;
		link.download = fileName + fileExtension; // Set the default file name here
		link.click();
		window.URL.revokeObjectURL(blobUrl); // Clean up the URL after download
	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			console.error("Axios error:", error.response?.data || error.message);
		}
		console.error("Error downloading file:", error);
	}
};
