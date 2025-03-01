import { useState, useRef, useEffect, useMemo } from "react";

import "./notification.scss";
import TabsNotification from "./TabsNotification";
import Icon from "@ant-design/icons";
import { BellIcon, BellIconWithNotification } from "./icon";
import { NotificationItem } from "../../../provider/LayoutProvider/type";

const Notification = ({
	data: { notificationItemsAll, notificationItemsUnread },
}: {
	storybook?: boolean;
	data: {
		notificationItemsAll: NotificationItem[];
		notificationItemsUnread: NotificationItem[];
	};
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const handleToggleMenu = () => {
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

	const notificationIcon = useMemo(() => {
		return notificationItemsUnread?.length > 0
			? BellIconWithNotification
			: BellIcon;
	}, [notificationItemsUnread]);

	return (
		<div id="HeaderNavbarLayout-HeaderLayout-Notification" ref={menuRef}>
			<div className="notification-icon-container" onClick={handleToggleMenu}>
				<Icon component={notificationIcon} />
				{/* <BellNotification color="#1C4651" width={24} /> */}
			</div>
			<div className={`notification-dropdown-menu${isOpen ? " open" : ""}`}>
				<TabsNotification
					data={{ notificationItemsAll, notificationItemsUnread }}
				/>
			</div>
		</div>
	);
};

export default Notification;
