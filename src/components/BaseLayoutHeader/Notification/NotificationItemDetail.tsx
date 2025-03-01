import React from "react";
import "./notificationItemDetail.scss";
import BaseButtonBack from "../../BaseButtonBack";
import { NotificationItemByCategoryCode } from "../../../provider/LayoutProvider/type";
import { formatDateToCustom } from "../../../utils";
import { format } from "../../../constants/dayjsFormat";

// const notifications: Notification[] = [
// 	{
// 		id: 1,
// 		title: "งานทะเบียน",
// 		description:
// 			"งานทะเบียน ขึ้นทะเบียนนายจ้างใหม่ ปีพ.ศ. 2567 โดยการขึ้นทะเบียนแบบ อเล็กโทรนิก",
// 		admin: "Admin",
// 		category: "งานสมาทบ /ข่าว",
// 		date: "22 มิ.ย. 2567",
// 		time: "16:00:00",
// 		isNew: true,
// 	},
// 	{
// 		id: 2,
// 		title: "งานทะเบียน",
// 		description:
// 			"งานทะเบียน ขึ้นทะเบียนนายจ้างใหม่ ปีพ.ศ. 2567 โดยการขึ้นทะเบียนแบบ อเล็กโทรนิก",
// 		admin: "Admin",
// 		category: "งานสมาทบ /ข่าว",
// 		date: "22 มิ.ย. 2567",
// 		time: "16:00:00",
// 		isNew: false,
// 	},
// 	{
// 		id: 3,
// 		title: "งานทะเบียน",
// 		description:
// 			"งานทะเบียน ขึ้นทะเบียนนายจ้างใหม่ ปีพ.ศ. 2567 โดยการขึ้นทะเบียนแบบ อเล็กโทรนิก",
// 		admin: "Admin",
// 		category: "งานสมาทบ /ข่าว",
// 		date: "22 มิ.ย. 2567",
// 		time: "16:00:00",
// 		isNew: false,
// 	},
// 	{
// 		id: 4,
// 		title: "งานทะเบียน",
// 		description:
// 			"งานทะเบียน ขึ้นทะเบียนนายจ้างใหม่ ปีพ.ศ. 2567 โดยการขึ้นทะเบียนแบบ อเล็กโทรนิก",
// 		admin: "Admin",
// 		category: "งานสมาทบ /ข่าว",
// 		date: "22 มิ.ย. 2567",
// 		time: "16:00:00",
// 		isNew: false,
// 	},
// 	{
// 		id: 5,
// 		title: "งานทะเบียน",
// 		description:
// 			"งานทะเบียน ขึ้นทะเบียนนายจ้างใหม่ ปีพ.ศ. 2567 โดยการขึ้นทะเบียนแบบ อเล็กโทรนิก",
// 		admin: "Admin",
// 		category: "งานสมาทบ /ข่าว",
// 		date: "22 มิ.ย. 2567",
// 		time: "16:00:00",
// 		isNew: false,
// 	},
// 	{
// 		id: 6,
// 		title: "งานทะเบียน",
// 		description:
// 			"งานทะเบียน ขึ้นทะเบียนนายจ้างใหม่ ปีพ.ศ. 2567 โดยการขึ้นทะเบียนแบบ อเล็กโทรนิก",
// 		admin: "Admin",
// 		category: "งานสมาทบ /ข่าว",
// 		date: "22 มิ.ย. 2567",
// 		time: "16:00:00",
// 		isNew: false,
// 	},
// ];

const NotificationItem: React.FC<{
	notification: NotificationItemByCategoryCode;
}> = ({ notification }) => (
	<div
		className={`notification-detail-item ${notification.status === "N" ? "new" : ""}`}
	>
		<div className="header">
			{notification.status === "N" && <span className="new-badge">ใหม่</span>}
			<h3>
				{notification.categoryName + " / " + notification.subCategoryName}
			</h3>
		</div>
		<p>{notification.subject}</p>
		<div className={`footer ${notification.status ? "new" : ""}`}>
			<span className="admin">{notification.createdBy}</span>
			{/* <span className="category">{notification.category}</span> */}
			<span className="date">
				{formatDateToCustom(notification.createdDate, format.buddhist.dateTime)}
			</span>
		</div>
	</div>
);

interface NotificationDetailProps {
	setShowContent: (value: string) => void;
	listNotification: NotificationItemByCategoryCode[] | [];
}
const NotificationList = ({
	setShowContent,
	listNotification,
}: NotificationDetailProps) => (
	<div id="HeaderNavbarLayout-HeaderLayout-NotificationList">
		<BaseButtonBack onClick={() => setShowContent("")} />
		<div className="notification-list pt-4">
			{listNotification?.map((notification: NotificationItemByCategoryCode) => (
				<NotificationItem
					key={notification.notificationId}
					notification={notification}
				/>
			))}
		</div>
	</div>
);

export default NotificationList;
