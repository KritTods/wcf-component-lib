import React from "react";
import BaseLayoutHeader from "..";
import type { Meta, StoryObj } from "@storybook/react";
import { NotificationItem } from "../Notification/TabsNotification";

const meta: Meta<typeof BaseLayoutHeader> = {
	title: "Layouts/LayoutHeader",
	component: BaseLayoutHeader,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseLayoutHeader>;

export const DefaultBaseLayoutHeader: Story = {
	render: () => {
		const notificationItemsAll: NotificationItem[] = [
			{
				image: (
					<img
						src={"./images/logo/registrationWork.svg"}
						alt={"registrationWork"}
						className="icon-notification"
					/>
				),
				id: "registrationWork",
				label: "งานทะเบียน (4)",
				count: "ใหม่",
			},
			{
				image: (
					<img
						src={"./images/logo/contributionWork.svg"}
						alt={"contributionWork"}
						className="icon-notification"
					/>
				),
				id: "contributionWork",
				label: "งานสมทบ",
			},
			{
				image: (
					<img
						src={"./images/logo/inspectionwork.svg"}
						alt={"inspectionwork"}
						className="icon-notification"
					/>
				),
				id: "inspectionwork",
				label: "งานตรวจสอบ",
			},
			{
				image: (
					<img
						src={"./images/logo/statisticsWork.svg"}
						alt={"statisticsWork"}
						className="icon-notification"
					/>
				),
				id: "statisticsWork",
				label: "งานสถิติ",
			},
			{
				image: (
					<img
						src={"./images/logo/compensationWork.svg"}
						alt={"compensationWork"}
						className="icon-notification"
					/>
				),
				id: "compensationWork",
				label: "งานเงินทดแทน",
			},
			{
				image: (
					<img
						src={"./images/logo/paymentWork1.svg"}
						alt={"paymentWork1"}
						className="icon-notification"
					/>
				),
				id: "paymentWork1",
				label: "งานการเงินจ่าย",
			},
			{
				image: (
					<img
						src={"./images/logo/paymentWork2.svg"}
						alt={"paymentWork2"}
						className="icon-notification"
					/>
				),
				id: "paymentWork2",
				label: "งานการเงินจ่าย",
			},
			{
				image: (
					<img
						src={"./images/logo/receiptWork.svg"}
						alt={"receiptWork"}
						className="icon-notification"
					/>
				),
				id: "receiptWork",
				label: "งานการเงินรับ",
			},
			{
				image: (
					<img
						src={"./images/logo/committeeWork.svg"}
						alt={"committeeWork"}
						className="icon-notification"
					/>
				),
				id: "committeeWork",
				label: "งานคณะกรรมการ",
			},
			{
				image: (
					<img
						src={"./images/logo/referralWork.svg"}
						alt={"referralWork"}
						className="icon-notification"
					/>
				),
				id: "referralWork",
				label: "งานส่งต่อ (4)",
				count: "ใหม่",
			},
		];
		const notificationItemsUread: NotificationItem[] = [
			{
				image: (
					<img
						src={"./images/logo/registrationWork.svg"}
						alt={"registrationWork"}
						className="icon-notification"
					/>
				),
				id: "registrationWork",
				label: "งานทะเบียน (4)",
				count: "ใหม่",
			},

			{
				image: (
					<img
						src={"./images/logo/referralWork.svg"}
						alt={"referralWork"}
						className="icon-notification"
					/>
				),
				id: "referralWork",
				label: "งานส่งต่อ (4)",
				count: "ใหม่",
			},
		];

		const data = {
			permissionPage: {
				pageCode: "DEMO Sub menu  32",
				pageName: "Sub menu 32",
				pageLevel: 2,
				path: "/ums/demo/3/subMenu/2",
				order: 2,
			},
			childrenHeader: null,
			breadcrumb: [
				{
					url: "/ums/demo/3",
					text: "demo",
					breadcrumb: ["root"],
					pageLevel: { add: [2] },
				},
				{
					url: "/ums/demo/3/subMenu/2",
					text: "Sub Menu",
					breadcrumb: ["root", "subMenu"],
					pageLevel: { add: [2] },
				},
			],
			position: "นักวิชาการคอมพิวเตอร์ชำนาญการพิเศษ",
			branch: "3000 สำนักงานประกันสังคมกรุงเทพมหานคร",
			notificationItemsAll,
			notificationItemsUread,
		};
		return <BaseLayoutHeader data={data} storybook={true} />;
	},
};
