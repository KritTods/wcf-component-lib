import "./notification.scss";
import Badge from "antd/es/badge";
import { useState } from "react";
import NotificationList from "./NotificationItemDetail";
import {
	NotificationItem,
	NotificationItemByCategoryCode,
} from "../../../provider/LayoutProvider/type";
import { getNotificationByCategoryCode } from "../../../provider/LayoutProvider/service/api";

interface NotificationDetailProps {
	setShowContent: (value: string) => void;
	notificationItems: NotificationItem[];
	handleNotification: (categoryCode: string) => void;
}

const TabsNotification = ({
	data: { notificationItemsAll, notificationItemsUnread },
}: {
	data: {
		notificationItemsAll: NotificationItem[];
		notificationItemsUnread: NotificationItem[];
	};
}) => {
	const [activeTab, setActiveTab] = useState("all");
	const [showContent, setShowContent] = useState("");
	const [listNotification, setListNotification] = useState<
		NotificationItemByCategoryCode[]
	>([]);

	const renderContent = () => {
		switch (activeTab) {
			case "all":
				return (
					<IconNotification
						setShowContent={setShowContent}
						handleNotification={handleNotification}
						notificationItems={notificationItemsAll}
					/>
				);
			case "unread":
				return (
					<IconNotification
						setShowContent={setShowContent}
						handleNotification={handleNotification}
						notificationItems={notificationItemsUnread}
					/>
				);
			// case "group":
			// 	return (
			// 		<IconNotification
			// 			setShowContent={setShowContent}
			// 			notificationItems={[]}
			// 		/>
			// 	);
			default:
				return null;
		}
	};

	const handleNotification = async (categoryCode: string) => {
		const data = await getNotificationByCategoryCode(categoryCode);
		setListNotification(data as NotificationItemByCategoryCode[]);
	};

	return (
		<div className="px-3 notification-card">
			{showContent === "" ? (
				<>
					<div className="flex justify-center">
						<div className="tabs-container">
							<div
								className={`tab-item ${activeTab === "all" ? "active" : ""}`}
								onClick={() => setActiveTab("all")}
							>
								ทั้งหมด
							</div>
							<div
								className={`tab-item ${activeTab === "unread" ? "active" : ""}`}
								onClick={() => setActiveTab("unread")}
							>
								ยังไม่ได้อ่าน
							</div>
							{/* <div
								className={`tab-item ${activeTab === "group" ? "active" : ""}`}
								onClick={() => setActiveTab("group")}
							>
								เฉพาะกลุ่ม
							</div> */}
						</div>
					</div>
					{renderContent()}
				</>
			) : (
				<NotificationList
					setShowContent={setShowContent}
					listNotification={listNotification}
				/>
			)}
		</div>
	);
};

export default TabsNotification;

const IconNotification = ({
	setShowContent,
	notificationItems,
	handleNotification,
}: NotificationDetailProps) => {
	return (
		<div className="notification-detail flex flex-col  justify-between">
			<div className="grid grid-cols-3 gap-3">
				{notificationItems?.map((item: NotificationItem) => (
					<div
						className="notification-item-icon"
						key={item.categoryId}
						onClick={() => {
							setShowContent(item.categoryCode);
							handleNotification(item.categoryCode);
						}}
					>
						{item.cnt ? (
							<Badge count={item.cnt > 0 ? "ใหม่" : ""} className="badge-new">
								<>{item.image}</>
							</Badge>
						) : (
							item.image
						)}
						<p className={`notification-label ${item?.cnt && " active"} `}>
							{item.categoryName} {`(${item.cnt})`}
						</p>
					</div>
				))}
			</div>
			<div className="text-center p-2 bg-[#FFF9E5] rounded-b-lg text-[#1C4651] underline">
				ดูเป็นรายละเอียด
			</div>
		</div>
	);
};
