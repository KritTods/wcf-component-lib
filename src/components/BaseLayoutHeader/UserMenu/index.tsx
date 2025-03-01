import { useState, useEffect, useRef } from "react";
import { LogOut, NavArrowDown } from "iconoir-react";
import "./userMenu.scss";

const UserMenu = ({
	handleOnClick,
}: {
	handleOnClick: (name: number | string) => void;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div id="HeaderNavbarLayout-HeaderLayout-UserMenuComponent" ref={menuRef}>
			<div
				className={`icon-container ${isOpen ? "active" : ""}`}
				onClick={toggleDropdown}
			>
				<NavArrowDown color="#1C4651" width={24} />
			</div>
			<div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
				<div className="menu-item header" onClick={() => handleOnClick(1)}>
					<p className="text-base text-center">Customer 360</p>
				</div>
				<div className="menu-item" onClick={() => handleOnClick("profile")}>
					<p className="text-base text-center">โปรไฟล์</p>
				</div>
				<div className="menu-item" onClick={() => handleOnClick(3)}>
					<p className="text-base text-center">แจ้งปัญหา</p>
				</div>
				<div
					className="menu-item logout"
					onClick={() => handleOnClick("logout")}
				>
					<LogOut color="#1C4651" width={24} />
					<p className="text-base text-center">ออกจากระบบ</p>
				</div>
			</div>
		</div>
	);
};

export default UserMenu;
