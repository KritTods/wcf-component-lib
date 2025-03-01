import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleCard = (params: {
	disable: boolean;
	onClick?: () => void;
	link?: string;
}) => {
	const { disable, onClick, link } = params;

	if (disable) {
		return "pointer-events-none"; // เพิ่ม "s" ใน "pointer-events-none" ให้ถูกต้อง
	}
	if (link || onClick) {
		return "cursor-pointer";
	}

	return "pointer-events-none";
};

export const handleOnClick = (params: {
	disable: boolean;
	onClick?: () => void;
	link?: string;
	router: AppRouterInstance;
}) => {
	const { disable, onClick, link, router } = params;
	if (disable) return;
	if (onClick) onClick();
	if (link) router.push(link);
};
