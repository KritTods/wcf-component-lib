import { decodeJwt } from "jose";
import Cookies from "js-cookie";
import {
	Module,
	Page,
	NotificationList,
	NotificationItemByCategoryCode,
	User,
} from "../type";
import { LayoutAction } from "../layoutReducer";
import { callApi } from "../../../utils/apiServerSide";

export const callGetMenu = async (
	urlApi: string | undefined,
): Promise<LayoutAction> => {
	try {
		const data = (await callApi({
			method: "get",
			url: urlApi ? "" : "users/page-accesses",
			urlFull: urlApi,
			instanceName: "ums",
		})) as Module[] | [] | null;

		const token =
			typeof window !== "undefined"
				? localStorage.getItem("accessToken")
				: Cookies.get("accessToken");
		const decodedToken = token
			? (decodeJwt(token) as { userInfo: User; exp?: number })
			: null;

		if (data) {
			const pagesList = getPagesArray(data as Module[]);

			return {
				type: "setLayout",
				payload: {
					menu: data,
					pagesList,
					position:
						`${decodedToken?.userInfo?.firstName} ${decodedToken?.userInfo?.lastName}` ||
						"",
					branch: decodedToken?.userInfo?.ssoBranchCode || "",
				},
			};
		}

		return {
			type: "setLayout",
			payload: {
				menu: [],
				pageLevel: {},
				position:
					`${decodedToken?.userInfo?.firstName} ${decodedToken?.userInfo?.lastName}` ||
					"",
				branch: decodedToken?.userInfo?.ssoBranchCode || "",
			},
		};
	} catch (err) {
		return {
			type: "setLayout",
			payload: {
				menu: [],
				pageLevel: {},
				position: "",
				branch: "",
			},
		};
	}
};

const getPagesArray = (modules: Module[]): Page[] => {
	return modules.flatMap((module) =>
		module.subModules.flatMap((subModule) => subModule.pages),
	);
};

export const callNotification = async (): Promise<LayoutAction> => {
	try {
		const data = (await callApi({
			method: "get",
			url: "notifications/fetch-category",
			instanceName: "nms",
		})) as NotificationList;

		if (data) {
			return {
				type: "setNotification",
				payload: {
					notification: data,
				},
			};
		}

		return {
			type: "setNotification",
			payload: { all: 0, details: [] },
		};
	} catch (err) {
		return {
			type: "setNotification",
			payload: { all: 0, details: [] },
		};
	}
};

export const getNotificationByCategoryCode = async (
	categoryCode: string,
): Promise<NotificationItemByCategoryCode[]> => {
	try {
		const data = (await callApi({
			method: "get",
			url: `notifications?categoryCode=${categoryCode}`,
			instanceName: "nms",
		})) as NotificationItemByCategoryCode[];

		if (data) {
			return data;
		} else {
			return [];
		}
	} catch (err) {
		return [];
	}
};
