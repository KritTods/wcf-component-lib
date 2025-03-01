import { NavArrowRight, Settings } from "iconoir-react";
import React, { useRef, useEffect, useState } from "react";
import { Module, Page as PageType } from "../../provider/LayoutProvider/type";
import "./style.scss";
import BaseLink from "../BaseLink";

interface BaseNavbarProps {
	menu?: Module[];
	imageLogo?: React.ReactNode;
	url?: string;
	activeMenuPages?: {
		moduleCode: string;
		pageCode: string;
		subPageCode: string;
	};
}

export default function BaseNavbar({
	menu = [],
	imageLogo = <></>,
	activeMenuPages = { moduleCode: "", pageCode: "", subPageCode: "" },
}: BaseNavbarProps) {
	const [activeMenu, setActiveMenu] = useState<string | null>(null);
	const sidebarRef = useRef<HTMLDivElement>(null);
	const expandedMenuRef = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);
	const [hasScrollbar, setHasScrollbar] = useState(false);

	const handleMenuClick = (m: string | null) => {
		setActiveMenu(activeMenu === m ? null : m);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			sidebarRef.current &&
			!sidebarRef.current.contains(event.target as Node)
		) {
			setActiveMenu(null);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	useEffect(() => {
		const handleScroll = () => {
			if (expandedMenuRef.current) {
				const submenuItems =
					expandedMenuRef.current.querySelectorAll(".submenu-item");
				submenuItems.forEach((item) => {
					const content = item.querySelector(
						".submenu-item-content",
					) as HTMLElement;
					if (content) {
						const rect = item.getBoundingClientRect();
						content.style.top = `${rect.top}px`;
						content.style.maxHeight = `calc(100vh - ${rect.top}px)`;
					}
				});
			}
		};

		if (activeMenu !== null && expandedMenuRef.current) {
			handleScroll();
			expandedMenuRef.current.addEventListener("scroll", handleScroll);
			return () => {
				expandedMenuRef.current?.removeEventListener("scroll", handleScroll);
			};
		}
	}, [activeMenu]);

	useEffect(() => {
		const checkScrollbar = () => {
			if (expandedMenuRef.current) {
				setHasScrollbar(
					expandedMenuRef.current.scrollHeight >
						expandedMenuRef.current.clientHeight,
				);
			}
		};

		checkScrollbar();
		window.addEventListener("resize", checkScrollbar);
		return () => {
			window.removeEventListener("resize", checkScrollbar);
		};
	}, [activeMenu]);

	return (
		<div
			id="BaseNavbar"
			ref={sidebarRef}
			className={`${activeMenu !== null ? "active" : ""}`}
		>
			{activeMenu && (
				<div
					className="overlay"
					onClick={() => setActiveMenu(null)}
					style={{
						content: "",
						position: "fixed",
						top: 0,
						left: 0,
						width: "100vw",
						height: "100vh",
						backgroundColor: "rgba(0, 0, 0, 0.5)",
						zIndex: -2,
					}}
				/>
			)}
			{activeMenu && (
				<div
					className="overlay"
					onClick={() => setActiveMenu(null)}
					style={{
						content: "",
						position: "fixed",
						top: 0,
						left: "28px",
						width: "28px",
						height: `${hasScrollbar ? "100vh" : "calc(100vh - 50px)"}`,
						backgroundColor: "#ffffff",
						zIndex: -1,
					}}
				/>
			)}
			<div className="logo-container">
				<div className="logo">{imageLogo}</div>
			</div>
			<div className="menu">
				{menu.map((item) => (
					<div
						className={`menu-wrapper ${isHovered ? "hide-scrollbar" : ""}`}
						key={item.moduleCode}
					>
						<MenuItem
							item={item}
							activeMenu={activeMenu}
							activeMenuPages={activeMenuPages}
							handleMenuClick={handleMenuClick}
							expandedMenuRef={expandedMenuRef}
							setIsHovered={setIsHovered}
						/>
					</div>
				))}
			</div>
			<div className="settings">
				<Settings className="icon" />
			</div>
		</div>
	);
}

interface MenuItemProps {
	item: Module;
	activeMenu: string | null;
	activeMenuPages: {
		moduleCode: string;
		pageCode: string;
		subPageCode: string;
	};
	handleMenuClick: (moduleCode: string | null) => void;
	expandedMenuRef: React.RefObject<HTMLDivElement>;
	setIsHovered: (boolean: boolean) => void;
}

function MenuItem({
	item,
	activeMenu,
	activeMenuPages,
	handleMenuClick,
	expandedMenuRef,
	setIsHovered,
}: MenuItemProps) {
	return (
		<>
			<div
				className={`menu-item ${
					activeMenu === item.moduleCode ||
					activeMenuPages?.moduleCode === item.moduleCode
						? "active"
						: ""
				}`}
				onClick={() => handleMenuClick(item.moduleCode)}
			>
				<div
					className={`icon ${
						activeMenu === item.moduleCode ||
						activeMenuPages?.moduleCode === item.moduleCode
							? "active"
							: ""
					}`}
				>
					<img
						width={40}
						height={40}
						src={`${process.env.NEXT_PUBLIC_MIDDLEWARE_PATH}${item.moduleCode}.svg`}
						alt="Logo"
					/>
				</div>
			</div>

			{activeMenu === item.moduleCode && (
				<div ref={expandedMenuRef} className="expanded-menu">
					<div className="expanded-title">
						<p className="py-5 header-card  overflow-hidden text-ellipsis whitespace-nowrap">
							{item.moduleName}
						</p>
					</div>
					<div className="submenu">
						{item.subModules.map((subItem) => (
							<div key={subItem.code}>
								<p className="submenu-title header-card overflow-hidden text-ellipsis whitespace-nowrap">
									{subItem.name}
								</p>
								{subItem.pages.map((page) => (
									<MenuItemLink
										key={page.pageCode}
										page={page}
										activeMenuPages={activeMenuPages}
										handleMenuClick={handleMenuClick}
										setIsHovered={setIsHovered}
									/>
								))}
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
}

interface MenuItemLinkProps {
	page: PageType;
	activeMenuPages: {
		pageCode: string;
		subPageCode: string;
	};
	handleMenuClick: (moduleCode: string | null) => void;
	setIsHovered: (boolean: boolean) => void;
}

function MenuItemLink({
	page,
	activeMenuPages,
	handleMenuClick,
	setIsHovered,
}: MenuItemLinkProps) {
	const submenuRef = useRef<HTMLDivElement>(null);
	const [originUrl, setOriginUrl] = useState("");

	useEffect(() => {
		const submenu = submenuRef.current;

		const handleMouseEnter = () => {
			setIsHovered(true);
		};

		const handleMouseLeave = () => {
			setIsHovered(false);
		};

		if (submenu) {
			submenu.addEventListener("mouseenter", handleMouseEnter);
			submenu.addEventListener("mouseleave", handleMouseLeave);
		}

		return () => {
			if (submenu) {
				submenu.removeEventListener("mouseenter", handleMouseEnter);
				submenu.removeEventListener("mouseleave", handleMouseLeave);
			}
		};
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setOriginUrl(window.location.origin);
		}
	}, []);

	return page?.subMenu?.length ? (
		<div
			className={`submenu-item  ${activeMenuPages.pageCode === page.pageCode && "active"} text-lg`}
			ref={submenuRef}
		>
			<p className="pl-5 buttons overflow-hidden text-ellipsis whitespace-nowrap">
				{page.pageCode} {page.pageName}
			</p>
			<NavArrowRight color="#1C4651" width={24} />
			<div className="submenu-item-content">
				{page.subMenu.map((subPage: PageType) => (
					<div key={subPage.pageCode}>
						<BaseLink href={`${originUrl}${subPage.path}`}>
							<div
								onClick={() => handleMenuClick(null)}
								className={`submenu-item ${activeMenuPages.subPageCode === subPage.pageCode && "active"} text-lg`}
							>
								<p className="pl-5 buttons overflow-hidden text-ellipsis whitespace-nowrap">
									{subPage.pageCode} {subPage.pageName}
								</p>
							</div>
						</BaseLink>
					</div>
				))}
			</div>
		</div>
	) : (
		<BaseLink href={`${originUrl}${page.path}`}>
			<div
				className={`submenu-item ${activeMenuPages.pageCode === page.pageCode && "active"} text-lg`}
				onClick={() => handleMenuClick(null)}
			>
				<p className="pl-5 buttons overflow-hidden text-ellipsis whitespace-nowrap">
					{page.pageCode} {page.pageName}
				</p>
			</div>
		</BaseLink>
	);
}
