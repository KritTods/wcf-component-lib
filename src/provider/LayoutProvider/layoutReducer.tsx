import { decodeJwt } from "jose";
import Cookies from "js-cookie";
import {
	initialValue,
	Module,
	Page,
	LayoutState,
	PageBreadcrumb,
	User,
	NotificationList,
} from "./type";

export interface LayoutAction {
	type:
		| "setChildrenHeader"
		| "setChildrenHeaderRight"
		| "setDisplayScrollButton"
		| "setLoading"
		| "setUser"
		| "setToken"
		| "setLayout"
		| "setPermission"
		| "resetPermission"
		| "clearLayout"
		| "clearChildrenHeader"
		| "setNotification";
	payload?: unknown;
}

export const reducer = (
	state: LayoutState,
	action: LayoutAction,
): LayoutState => {
	switch (action.type) {
		case "setChildrenHeader":
			return { ...state, childrenHeader: action.payload as React.ReactElement };
		case "setChildrenHeaderRight":
			return {
				...state,
				childrenHeaderRight: action.payload as React.ReactElement,
			};
		case "setDisplayScrollButton":
			return {
				...state,
				displayScrollButton: action.payload as boolean,
			};
		case "setLoading":
			return { ...state, loading: action.payload as boolean };
		case "setUser":
			return { ...state, user: action.payload as User };
		case "setToken":
			localStorage.setItem("accessToken", action.payload as string);
			Cookies.set("accessToken", action.payload as string, { expires: 1 });

			return { ...state, token: action.payload as string };
		case "setLayout":
			return {
				...state,
				menu: (action.payload as { menu: Module[] }).menu,
				pagesList: (action.payload as { pagesList: Page[] }).pagesList,
				position:
					(action.payload as { position: string }).position || state.position,
				branch: (action.payload as { branch: string }).branch || state.branch,
			};
		case "setPermission": {
			const { permissionPage, pageLevel, breadcrumb } = action.payload as {
				permissionPage: Page;
				pageLevel: Record<string, boolean[]> | object;
				breadcrumb: PageBreadcrumb[];
			};

			return {
				...state,
				loading: false,
				permissionPage,
				pageLevel,
				breadcrumb,
			};
		}
		case "resetPermission":
			return {
				...state,
				configPage: state.configPage,
				loading: false,
				permissionPage: {
					pageCode: "",
					pageName: "",
					pageLevel: 0,
					path: "",
					order: 0,
				},
				breadcrumb: [],
				pageLevel: {},
			};
		case "clearLayout":
			localStorage.clear();
			Cookies.remove("accessToken");

			return { ...initialValue, configPage: state.configPage };
		case "clearChildrenHeader":
			return { ...state, childrenHeader: <></>, childrenHeaderRight: <></> };

		case "setNotification":
			return {
				...state,
				notification: (action.payload as { notification: NotificationList })
					.notification,
			};

		default:
			throw new Error("Unknown action type");
	}
};

export const getInitialState = (): LayoutState => {
	let token =
		typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
	if (token === null) token = Cookies.get("accessToken") ?? null;
	const decodedToken = token
		? (decodeJwt(token) as { userInfo: User; exp?: number })
		: null;
	if (decodedToken !== null) {
		if (decodedToken.exp && decodedToken.exp * 1000 < Date.now()) {
			return initialValue;
		}
		return {
			...initialValue,
			user: decodedToken.userInfo as User,
			token: token,
			position:
				`${decodedToken.userInfo?.firstName} ${decodedToken.userInfo?.lastName}` ||
				"",
			branch: decodedToken.userInfo?.ssoBranchCode || "",
		};
	}
	return initialValue;
};
