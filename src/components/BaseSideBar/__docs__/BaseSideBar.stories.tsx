import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import BaseSideBar from "..";
import ContainerOutlined from "@ant-design/icons/lib/icons/ContainerOutlined";
import { SideBarModule, SubModule, Page, data } from "../model";

const meta: Meta<typeof BaseSideBar> = {
	title: "BaseComponent/Layout/BaseSideBar",
	component: BaseSideBar,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseSideBar>;

export const DefaultSideBar: Story = {
	render: () => {
		const items = data.map((item: SideBarModule) => {
			return {
				key: item.moduleCode,
				label: item.moduleName,
				icon: <ContainerOutlined />, // Adjust the icon as needed
				children: item.subModules
					.sort((a, b) => a.order - b.order)
					.map((subModule: SubModule) => ({
						key: subModule.code,
						label: subModule.name,
						order: subModule.order,
						children: subModule.pages
							.sort((a, b) => a.order - b.order)
							.map((page: Page) => ({
								key: page.path + "*" + page.pageLevel,
								label: page.pageName,
								order: page.order,
							})),
					})),
			};
		});

		return <BaseSideBar items={items} />;
	},
};
