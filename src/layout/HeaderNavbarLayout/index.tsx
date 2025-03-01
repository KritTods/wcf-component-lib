import { useEffect, useRef } from "react";
import { useCheckPermission } from "../../hook/useCheckPermission";
import { LayoutContextType, useLayout } from "../../provider/LayoutProvider";
import HeaderLayout from "./HeaderLayout";
import NavbarLayout from "./NavbarLayout";
import "./headerNavbarLayout.scss";
import { usePathname } from "next/navigation";
import ScrollButton from "./ScrollButton";

export default function HeaderNavbarLayout({
	children,
	showHeader = true,
}: {
	children: React.ReactNode;
	showHeader?: boolean;
}) {
	useCheckPermission();
	const url = usePathname();
	const { dispatchLayout } = useLayout();
	const contentRef = useRef<HTMLDivElement | null>(null);

	const {
		stateLayout: { displayScrollButton },
	}: LayoutContextType = useLayout();

	useEffect(() => {
		return (): void => {
			dispatchLayout({ type: "clearChildrenHeader" });
		};
	}, [dispatchLayout, url]);

	if (typeof window !== "undefined") {
		document.documentElement.style.setProperty(
			"--home-image",
			`url(${process.env.NEXT_PUBLIC_MIDDLEWARE_PATH}360HomeHeader.svg)`,
		);
	}
	return (
		<div id="HeaderNavbarLayout">
			<div className={`navbar-layout ${url == "/home" ? "" : ""} `}>
				<NavbarLayout />
			</div>
			<div className={`content `}>
				<div className="content-body" ref={contentRef}>
					{url == "/home" ? (
						<div className="centent-home">{showHeader && <HeaderLayout />}</div>
					) : (
						showHeader && <HeaderLayout />
					)}
					{children}
					{displayScrollButton && <ScrollButton contentRef={contentRef} />}
				</div>
			</div>
		</div>
	);
}
