/* eslint-disable react-hooks/rules-of-hooks */
import { LayoutContextType, useLayout } from "../provider/LayoutProvider";
import { PageLevel, Key } from "../provider/LayoutProvider/type";

const usePermission = <T extends string = never>(
	key: Key | T,
	isStorybook?: boolean,
): boolean => {
	if (isStorybook) return false;

	const {
		stateLayout: { pageLevel },
	} = useLayout() as LayoutContextType;

	const isPageLevel = (obj: unknown): obj is Partial<PageLevel<Key | T>> => {
		return typeof obj === "object" && obj !== null && key in obj;
	};

	const permission = isPageLevel(pageLevel) ? pageLevel[key] || false : false;

	return !!permission;
};

export default usePermission;
