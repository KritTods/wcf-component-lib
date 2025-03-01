import {
	useLayout,
	type LayoutContextType,
} from "../../../provider/LayoutProvider";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import BaseNavbar from "../../../components/BaseLayoutNavbar";
// import navbarLogo from "./images/navbar-logo.svg";
// import Image from "next/image";

export default function NavbarLayout() {
	const url = usePathname();
	const navbarLogo = `${process.env.NEXT_PUBLIC_MIDDLEWARE_PATH}navbar-logo.svg`;

	const {
		stateLayout: { menu, permissionPage },
	}: LayoutContextType = useLayout();

	const activeMenuPages = useMemo(() => {
		let activeData = {
			moduleCode: "",
			pageCode: "",
			subPageCode: "",
		};
		menu.forEach((module) =>
			module.subModules.forEach((subModule) =>
				subModule.pages.forEach((page) => {
					if (page.subMenu?.length) {
						page.subMenu.forEach((subMenu) => {
							if (subMenu.pageCode === permissionPage.pageCode) {
								activeData = {
									moduleCode: module.moduleCode,
									pageCode: page?.pageCode,
									subPageCode: subMenu.pageCode,
								};
							}
						});
					} else if (page.pageCode === permissionPage.pageCode) {
						activeData = {
							moduleCode: module.moduleCode,
							pageCode: page?.pageCode,
							subPageCode: "",
						};
					}
				}),
			),
		);

		return activeData;
	}, [menu, permissionPage, url]);

	return (
		<BaseNavbar
			menu={menu}
			imageLogo={<img src={navbarLogo} alt="Logo" />}
			activeMenuPages={activeMenuPages}
		/>
	);
}
