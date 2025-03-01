import dayjs from "dayjs";
import { apiServerSide } from "./apiServerSide";
import Modal from "antd/es/modal";
import Cookies from "js-cookie";

type HttpMethod = "post" | "put" | "get" | "patch" | "delete";
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
	| "ml"
	| "pay"
	| "fin";

export const urlBase: Record<string, string> = {
	adm_new: process.env.NEXT_PUBLIC_API_URL_ADM_NEW ?? "",
	adm_tool: process.env.NEXT_PUBLIC_API_URL_ADM_TOOL ?? "",
	cmp: process.env.NEXT_PUBLIC_API_CMP ?? "",
	mdm: process.env.NEXT_PUBLIC_API_URL_MDM ?? "",
	nms: process.env.NEXT_PUBLIC_API_URL_NMS ?? "",
	reg: process.env.NEXT_PUBLIC_API_URL_REG ?? "",
	ssoData: process.env.NEXT_PUBLIC_API_SSO_DATA ?? "",
	ums: process.env.NEXT_PUBLIC_API_URL_UMS ?? "",
	med: process.env.NEXT_PUBLIC_API_URL_MED ?? "",
	ml: process.env.NEXT_PUBLIC_API_URL_ML ?? "",
	cons: process.env.NEXT_PUBLIC_API_URL_CON ?? "",
	pay: process.env.NEXT_PUBLIC_API_URL_PAY ?? "",
	fin: process.env.NEXT_PUBLIC_API_URL_FIN ?? "",
};

export type ResponseType =
	| "arraybuffer"
	| "blob"
	| "document"
	| "json"
	| "text"
	| "stream"
	| "formdata";

export interface RequestParams {
	method: HttpMethod;
	url: string;
	urlFull?: string;
	body?: object;
	instanceName?: InstanceName;
	responseType?: ResponseType;
}

interface ShowErrorModal {
	status: number;
	title: string;
	detail: string;
	timestamp: string;
	details: Record<string, never>;
}

const isTokenExpiredError = (error: ShowErrorModal): boolean => {
	return error?.status === 401;
};

const handleTokenExpiration = () => {
	Modal.error({
		title: "Token หมดอายุ",
		content: "Token หมดอายุ กรุณาเข้าระบบใหม่อีกครั้ง",
		onOk: () => {
			localStorage.clear();
			Cookies.remove("accessToken");
			window.location.href = "/login";
		},
	});
};

const showErrorModal = (data: ShowErrorModal | undefined): void => {
	console.log("🚀 ~ showErrorModal ~ data:", data);
	if (!data) {
		Modal.error({
			title: "Error",
			content: <p>ติดต่อผู้ดูแลระบบ</p>,
			footer: (_, { OkBtn }) => <OkBtn />,
		});
	} else {
		if (isTokenExpiredError(data)) {
			handleTokenExpiration();
			return;
		}

		const { title, timestamp, detail = "ค้นหาข้อมูลไม่พบ", details } = data;
		Modal.error({
			title,
			content: (
				<>
					<p>{timestamp && dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss")}</p>
					<h3>รายละเอียด :</h3>
					{details ? (
						Object.entries(details).map(([key, value]) => (
							<p key={key}>{value as React.ReactNode}</p>
						))
					) : (
						<p>{detail}</p>
					)}
				</>
			),
			footer: (_, { OkBtn }) => <OkBtn />,
		});
	}
};

export const callApi = async ({
	method,
	url,
	body = {},
	urlFull,
	instanceName = "ums",
	responseType = "json",
}: RequestParams): Promise<unknown> => {
	if (process.env.NEXT_PUBLIC_DEBUG === "DEBUG") console.log(url);

	try {
		const result = (await apiServerSide({
			method,
			url,
			urlFull,
			body,
			instanceName,
			responseType,
		})) as {
			data: object | Blob;
			status: number;
		};

		if (result.status >= 200 && result.status < 300) {
			return result.data;
		} else {
			const errorData = {
				...result.data,
				status: result.status,
			} as ShowErrorModal;

			showErrorModal(errorData);
			throw new Error(JSON.stringify(result));
		}
	} catch (err: unknown) {
		console.log("🚀  ~  callApi ~ err:", err);
		const errorObj = JSON.parse((err as Error).message);
		if (isTokenExpiredError(errorObj)) {
			handleTokenExpiration();
		}
		throw new Error((err as Error).message);
	}
};
