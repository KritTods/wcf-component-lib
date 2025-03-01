"use client";

import { usePathname, useRouter } from "next/navigation";
import React, {
	createContext,
	useReducer,
	useEffect,
	ReactNode,
	Dispatch,
	useRef,
} from "react";
import { getInitialState, LayoutAction, reducer } from "./layoutReducer";
import { DataStructureURL, LayoutState } from "./type";
import { callGetMenu, callNotification } from "./service/api";
import Cookies from "js-cookie";
interface LayoutProviderProps {
	children: ReactNode;
	configPage: DataStructureURL;
	urlApi?: string | undefined;
	basePath?: string;
}

export interface LayoutContextType {
	stateLayout: LayoutState;
	dispatchLayout: Dispatch<LayoutAction>;
}

export const LayoutContext = createContext<LayoutContextType | undefined>(
	undefined,
);

export const LayoutProvider: React.FC<LayoutProviderProps> = ({
	basePath,
	urlApi,
	children,
	configPage,
}) => {
	const url = usePathname();
	const router = useRouter();
	const menuFetched = useRef(false);
	const [stateLayout, dispatchLayout] = useReducer(reducer, {
		...getInitialState(),
		configPage,
		basePath,
	});

	const fetchMenu = async () => {
		const token =
			typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";
		if (token) {
			const response = await callGetMenu(urlApi);
			const notificationData = await callNotification();
			dispatchLayout(response);
			dispatchLayout(notificationData);
		} else {
			const cookie = Cookies.get("accessToken");
			if (cookie) {
				const response = await callGetMenu(urlApi);
				dispatchLayout(response);
			}
		}
	};

	useEffect(() => {
		if (stateLayout.user === null && url !== "/login") {
			router.push(`${window.location.origin}/login`);
			menuFetched.current = false;
		} else if (stateLayout.token && !menuFetched.current) {
			fetchMenu();
			menuFetched.current = true;
		}
	}, [router, stateLayout]);

	return (
		<LayoutContext.Provider value={{ stateLayout, dispatchLayout }}>
			{children}
		</LayoutContext.Provider>
	);
};
