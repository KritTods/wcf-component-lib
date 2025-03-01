import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import BaseTabs from "..";
import { TabsProps } from "antd/es/tabs";
import BaseButton from "../../BaseButton";
import BaseCollapse from "../../BaseCollapse";
import { CollapseProps } from "antd/es/collapse/Collapse";
import Column from "../../BaseColumn";

const meta: Meta<typeof BaseTabs> = {
	title: "BaseComponent/Layout/BaseTabs",
	component: BaseTabs,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseTabs>;

export const DefaultTabs: Story = {
	render: () => {
		const Content1 = () => {
			return (
				<div className="flex space-x-4 items-center">
					<BaseButton
						label="Tab Pane 1"
						onClick={() => console.log("Button is clicked")}
					/>
					<p>Content of Tab Pane 1</p>
				</div>
			);
		};

		const Content2 = () => {
			return (
				<div className="flex space-x-4 items-center">
					<BaseButton
						label="Tab Pane 2"
						onClick={() => console.log("Button is clicked")}
					/>
					<p>Content of Tab Pane 2</p>
				</div>
			);
		};

		const Content3 = () => {
			return (
				<div className="flex space-x-4 items-center">
					<BaseButton
						label="Tab Pane 3"
						onClick={() => console.log("Button is clicked")}
					/>
					<p>Content of Tab Pane 3</p>
				</div>
			);
		};

		const items: TabsProps["items"] = [
			{
				key: "1",
				label: "Tab 1",
				children: <Content1 />,
			},
			{
				key: "2",
				label: "Tab 2",
				children: <Content2 />,
			},
			{
				key: "3",
				label: "Tab 3",
				children: <Content3 />,
			},
		];

		return <BaseTabs defaultActiveKey={"1"} items={items} />;
	},
};

export const DoctorForm: Story = {
	render: () => {
		const Content2 = () => {
			return (
				<div className="flex space-x-4 items-center">
					<BaseButton
						label="Tab Pane 2"
						onClick={() => console.log("Button is clicked")}
					/>
					<p>Content of Tab Pane 2</p>
				</div>
			);
		};

		const Content3 = () => {
			return (
				<div className="flex space-x-4 items-center">
					<BaseButton
						label="Tab Pane 3"
						onClick={() => console.log("Button is clicked")}
					/>
					<p>Content of Tab Pane 3</p>
				</div>
			);
		};

		const collapseItems1: CollapseProps["items"] = [
			{
				key: "1",
				label: (
					<div className="flex flex-col">
						<p>ข้อมูลแพทย์</p>
						<p>แพทย์</p>
					</div>
				),
				children: (
					<Column>
						<div>test</div>
					</Column>
				),
			},
		];

		const collapseItems2: CollapseProps["items"] = [
			{
				key: "1",
				label: "รายละเอียดแพทย์",
				children: <Content2 />,
			},
		];

		const collapseItems3: CollapseProps["items"] = [
			{
				key: "1",
				label: "วุฒิบัตร",
				children: <Content3 />,
			},
		];

		const collapseItems4: CollapseProps["items"] = [
			{
				key: "1",
				label: "ที่อยู่",
				children: <Content3 />,
			},
		];

		const Collapse1 = () => {
			return (
				<Column className="space-y-4">
					<BaseCollapse items={collapseItems1} defaultActiveKey={"1"} />
					<BaseCollapse items={collapseItems4} defaultActiveKey={"1"} />
				</Column>
			);
		};

		const Collapse2 = () => {
			return <BaseCollapse items={collapseItems2} defaultActiveKey={"1"} />;
		};

		const Collapse3 = () => {
			return <BaseCollapse items={collapseItems3} defaultActiveKey={"1"} />;
		};

		const tabsItems: TabsProps["items"] = [
			{
				key: "1",
				label: "งานคำร้องทั่วไป",
				children: <Collapse1 />,
			},
			{
				key: "2",
				label: "ข้อมูลประสบอันตราย",
				children: <Collapse2 />,
			},
			{
				key: "3",
				label: "ตรวจสอบรายการเอกสาร",
				children: <Collapse3 />,
			},
		];

		return <BaseTabs defaultActiveKey={"1"} items={tabsItems} />;
	},
};
