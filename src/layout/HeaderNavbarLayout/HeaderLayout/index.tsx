"use client";
import React, { useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

import BaseLayoutHeader from "../../../components/BaseLayoutHeader";
import { LayoutContextType, useLayout } from "../../../provider/LayoutProvider";
import { NotificationItem } from "../../../provider/LayoutProvider/type";

// import Image from "next/image";
// import registrationWork from "./images/registrationWork.svg";
// import contributionWork from "./images/contributionWork.svg";
// import inspectionwork from "./images/inspectionwork.svg";
// import statisticsWork from "./images/statisticsWork.svg";
// import compensationWork from "./images/compensationWork.svg";
// import paymentWork1 from "./images/paymentWork1.svg";
// import paymentWork2 from "./images/paymentWork2.svg";
// import receiptWork from "./images/receiptWork.svg";
// import committeeWork from "./images/committeeWork.svg";
// import referralWork from "./images/referralWork.svg";

export default function HeaderLayout() {
	const url = usePathname();
	const router = useRouter();
	const menuFetched = useRef(false);
	const registrationWork = `${process.env.NEXT_PUBLIC_MIDDLEWARE_PATH}registrationWork.svg`;
	const contributionWork = `${process.env.NEXT_PUBLIC_MIDDLEWARE_PATH}contributionWork.svg`;
	// const inspectionwork =
	// 	"https://api-dev-wcf.soilfish.co/mw/api/asset/inspectionwork.svg";
	// const statisticsWork =
	// 	"https://api-dev-wcf.soilfish.co/mw/api/asset/statisticsWork.svg";
	// const compensationWork =
	// 	"https://api-dev-wcf.soilfish.co/mw/api/asset/compensationWork.svg";
	// const paymentWork1 =
	// 	"https://api-dev-wcf.soilfish.co/mw/api/asset/paymentWork1.svg";
	// const paymentWork2 =
	// 	"https://api-dev-wcf.soilfish.co/mw/api/asset/paymentWork2.svg";
	// const receiptWork =
	// 	"https://api-dev-wcf.soilfish.co/mw/api/asset/receiptWork.svg";
	// const committeeWork =
	// 	"https://api-dev-wcf.soilfish.co/mw/api/asset/committeeWork.svg";
	// const referralWork =
	// 	"https://api-dev-wcf.soilfish.co/mw/api/asset/referralWork.svg";

	const {
		dispatchLayout,
		stateLayout: {
			permissionPage,
			childrenHeader,
			childrenHeaderRight,
			breadcrumb,
			notification,
			position,
			branch,
		},
	}: LayoutContextType = useLayout();

	console.log("log for QA :  pageLevel =", permissionPage.pageLevel);

	const handleOnClick = (name: number | string) => {
		switch (name) {
			case "logout":
				dispatchLayout({ type: "setLoading", payload: true });
				dispatchLayout({ type: "clearLayout" });

				return;
			case "profile":
				router.push(`${window.location.origin}/profile`);
				menuFetched.current = false;
				return;
			default:
				return console.log(name);
		}
	};

	const handleBack = () => {
		window.history.back();
	};

	const notificationIcon: { [key: string]: React.ReactElement } = {
		"999": (
			<img
				src={registrationWork}
				alt="registrationWork"
				className="icon-notification"
			/>
		),
		"456": (
			<img
				src={contributionWork}
				alt="contributionWork"
				className="icon-notification"
			/>
		),
	};
	// const notificationItemsAll: NotificationItem[] = [
	// 	{
	// 		image: (
	// 			<img
	// 				src={registrationWork}
	// 				alt={"registrationWork"}
	// 				className="icon-notification"
	// 			/>
	// 		),
	// 		id: "registrationWork",
	// 		label: "งานทะเบียน (4)",
	// 		count: "ใหม่",
	// 	},
	// 	{
	// 		image: (
	// 			<img
	// 				src={contributionWork}
	// 				alt={"contributionWork"}
	// 				className="icon-notification"
	// 			/>
	// 		),
	// 		id: "contributionWork",
	// 		label: "งานสมทบ",
	// 	},
	// 	{
	// 		image: (
	// 			<img
	// 				src={inspectionwork}
	// 				alt={"inspectionwork"}
	// 				className="icon-notification"
	// 			/>
	// 		),
	// 		id: "inspectionwork",
	// 		label: "งานตรวจสอบ",
	// 	},
	// 	{
	// 		image: (
	// 			<img
	// 				src={statisticsWork}
	// 				alt={"statisticsWork"}
	// 				className="icon-notification"
	// 			/>
	// 		),
	// 		id: "statisticsWork",
	// 		label: "งานสถิติ",
	// 	},
	// 	{
	// 		image: (
	// 			<img
	// 				src={compensationWork}
	// 				alt={"compensationWork"}
	// 				className="icon-notification"
	// 			/>
	// 		),
	// 		id: "compensationWork",
	// 		label: "งานเงินทดแทน",
	// 	},
	// 	{
	// 		image: (
	// 			<img
	// 				src={paymentWork1}
	// 				alt={"paymentWork1"}
	// 				className="icon-notification"
	// 			/>
	// 		),
	// 		id: "paymentWork1",
	// 		label: "งานการเงินจ่าย",
	// 	},
	// 	{
	// 		image: (
	// 			<img
	// 				src={paymentWork2}
	// 				alt={"paymentWork2"}
	// 				className="icon-notification"
	// 			/>
	// 		),
	// 		id: "paymentWork2",
	// 		label: "งานการเงินจ่าย",
	// 	},
	// 	{
	// 		image: (
	// 			<img
	// 				src={receiptWork}
	// 				alt={"receiptWork"}
	// 				className="icon-notification"
	// 			/>
	// 		),
	// 		id: "receiptWork",
	// 		label: "งานการเงินรับ",
	// 	},
	// 	{
	// 		image: (
	// 			<img
	// 				src={committeeWork}
	// 				alt={"committeeWork"}
	// 				className="icon-notification"
	// 			/>
	// 		),
	// 		id: "committeeWork",
	// 		label: "งานคณะกรรมการ",
	// 	},
	// 	{
	// 		image: (
	// 			<img
	// 				src={referralWork}
	// 				alt={"referralWork"}
	// 				className="icon-notification"
	// 			/>
	// 		),
	// 		id: "referralWork",
	// 		label: "งานส่งต่อ (4)",
	// 		count: "ใหม่",
	// 	},
	// ];

	// const notificationItemsUnread: NotificationItem[] = [
	// 	{
	// 		image: (
	// 			<img
	// 				src={registrationWork}
	// 				alt={"registrationWork"}
	// 				className="icon-notification"
	// 			/>
	// 		),
	// 		id: "registrationWork",
	// 		label: "งานทะเบียน (4)",
	// 		count: "ใหม่",
	// 	},

	// 	{
	// 		image: (
	// 			<img
	// 				src={referralWork}
	// 				alt={"referralWork"}
	// 				className="icon-notification"
	// 			/>
	// 		),
	// 		id: "referralWork",
	// 		label: "งานส่งต่อ (4)",
	// 		count: "ใหม่",
	// 	},
	// ];

	// console.log(notification);
	let notificationItemsAll: NotificationItem[] = [];
	let notificationItemsUnread: NotificationItem[] = [];

	if (notification) {
		notificationItemsAll = notification?.details?.map((e: NotificationItem) => {
			return {
				...e,
				image: notificationIcon[e.categoryCode],
			};
		});
	}

	notificationItemsUnread = notificationItemsAll?.filter(
		(e: NotificationItem) => {
			if (e.cnt > 0) {
				return {
					...e,
					image: notificationIcon[e.categoryCode],
				};
			}
		},
	);

	const breadcrumbProfile = [
		{
			url: "/profile",
			text: "จัดการข้อมูลส่วนตัว",
			breadcrumb: ["root"],
			pageLevel: {},
		},
	];

	return (
		<BaseLayoutHeader
			handleHistoryBack={handleBack}
			handleOnClick={handleOnClick}
			data={{
				permissionPage,
				childrenHeader,
				childrenHeaderRight,
				breadcrumb: url == "/profile" ? breadcrumbProfile : breadcrumb,
				position,
				branch,
				notificationItemsAll,
				notificationItemsUnread,
			}}
		/>
	);
}
