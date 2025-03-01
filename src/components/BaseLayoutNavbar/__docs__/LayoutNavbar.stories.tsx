import React from "react";
import BaseNavbar from "..";
import type { Meta, StoryObj } from "@storybook/react";
import { Module } from "../../../provider/LayoutProvider/type";

const meta: Meta<typeof BaseNavbar> = {
	title: "Layouts/LayoutNavbar",
	component: BaseNavbar,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseNavbar>;

export const DefaultBaseNavbar: Story = {
	render: () => {
		return <BaseNavbar />;
	},
};

export const ExamplePagesBaseNavbar: Story = {
	render: () => {
		const menu: Module[] = [
			{
				moduleCode: "DEMO",
				moduleName: "demo test",
				subModules: [
					{
						code: "demo1",
						name: "demo menu test",
						order: 1,
						pages: [
							{
								pageCode: "DEMO menu 01",
								pageName: "",
								pageLevel: 2,
								path: "/",
								order: 1,
								subMenu: [
									{
										pageCode: "DEMO Sub menu  11",
										pageName: "",
										pageLevel: 2,
										path: "/",
										order: 1,
									},
									{
										pageCode: "DEMO Sub menu  12",
										pageName: "",
										pageLevel: 2,
										path: "/",
										order: 2,
									},
									{
										pageCode: "DEMO Sub menu  13",
										pageName: "",
										pageLevel: 2,
										path: "/",
										order: 3,
									},
								],
							},
							{
								pageCode: "DEMO menu 02",
								pageName: "Default menu 2",
								pageLevel: 2,
								path: "/ums/demo/2",
								order: 2,
							},
							{
								pageCode: "DEMO menu 03",
								pageName: "",
								pageLevel: 2,
								path: "/",
								order: 3,
								subMenu: [
									{
										pageCode: "DEMO Sub menu  31",
										pageName: "",
										pageLevel: 2,
										path: "/",
										order: 1,
									},
									{
										pageCode: "DEMO Sub menu  32",
										pageName: "Sub menu 32",
										pageLevel: 2,
										path: "/ums/demo/3/subMenu/2",
										order: 2,
									},
									{
										pageCode: "DEMO Sub menu  33",
										pageName: "",
										pageLevel: 2,
										path: "/",
										order: 3,
									},
								],
							},
						],
					},
				],
			},
		];

		return (
			<BaseNavbar
				imageLogo={<img src="./images/navbar-logo.svg" alt="" />}
				menu={menu}
				activeMenuPages={{
					moduleCode: "DEMO",
					pageCode: "DEMO menu 03",
					subPageCode: "DEMO Sub menu  32",
				}}
			/>
		);
	},
};
