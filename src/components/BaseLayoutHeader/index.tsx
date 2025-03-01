import { useState, useEffect } from "react";
import BaseBreadCrumb from "../BaseBreadCrumb";
import {
	NotificationItem,
	Page,
	PageBreadcrumb,
} from "../../provider/LayoutProvider/type";
import Notification from "./Notification";
import UserMenu from "./UserMenu";
import { LeftOutlined } from "@ant-design/icons";
import { get } from "lodash";
import "./headerLayout.scss";
interface BaseLayoutHeaderProps {
	handleOnClick?: (name: number | string) => void;
	handleHistoryBack?: () => void;
	data: {
		permissionPage?: Page;
		childrenHeader: React.ReactElement | null;
		childrenHeaderRight?: React.ReactElement | null;
		breadcrumb: PageBreadcrumb[];
		position: string;
		branch: string;
		notificationItemsAll: NotificationItem[];
		notificationItemsUnread: NotificationItem[];
	};
	storybook?: boolean;
}

export default function BaseLayoutHeader({
	handleOnClick = () => {},
	handleHistoryBack = () => {},
	data,
	storybook = false,
}: BaseLayoutHeaderProps) {
	const {
		permissionPage,
		childrenHeader,
		childrenHeaderRight,
		breadcrumb,
		position,
		branch,
		notificationItemsAll,
		notificationItemsUnread,
	} = data || {};
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const text = get(breadcrumb, `[${breadcrumb.length - 1}].text`, "");

	return (
		<>
			<div id="HeaderNavbarLayout-BaseLayoutHeader">
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<BaseBreadCrumb
							breadcrumb={breadcrumb}
							pageCode={permissionPage?.pageCode || ""}
						/>
					</div>

					<div className="cursor-pointer flex items-center">
						<Notification
							storybook={storybook}
							data={{ notificationItemsAll, notificationItemsUnread }}
						/>
						<div className="ml-2">
							<div className="vertical-line" />
						</div>
						<div className="ml-2 profile">
							<div className="text-base text-[#212121]">{position}</div>
							<div className="text-xs text-[#4B5760]">{branch}</div>
						</div>
						<UserMenu handleOnClick={handleOnClick} />
					</div>
				</div>
				<div className="flex justify-between">
					{text ? (
						<p
							className={`mt-6 ${childrenHeaderRight ? "w-2/4" : "w-full"} flex page-title text-black `}
						>
							<>
								<LeftOutlined
									style={{
										fontSize: "16px",
										color: "#4B5760",
										marginRight: "8px",
									}}
									onClick={handleHistoryBack}
								/>
								{text}
							</>
						</p>
					) : null}
					{childrenHeaderRight && (
						<div className="w-2/4">{childrenHeaderRight}</div>
					)}
				</div>
			</div>
			<div className="m-4">{childrenHeader}</div>
		</>
	);
}
