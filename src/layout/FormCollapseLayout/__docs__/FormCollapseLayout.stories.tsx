import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import FormCollapseLayout from "..";
import HomeFilled from "@ant-design/icons/lib/icons/HomeFilled";

const meta: Meta<typeof FormCollapseLayout> = {
	title: "Layouts/FormCollapseLayout",
	component: FormCollapseLayout,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof FormCollapseLayout>;

export const DefaultFormCollapseLayout: Story = {
	render: () => {
		return (
			<div className="w-[500px]">
				<FormCollapseLayout
					icon={<HomeFilled className="text-[18px] text-[#FBC108]" />}
					label="ที่อยู่ผู้ประสบอันตราย"
				/>
			</div>
		);
	},
};

export const FormCollapseLayoutAddress: Story = {
	render: () => {
		return (
			<div className="w-[1000px]">
				<FormCollapseLayout
					icon={<HomeFilled className="text-[18px] text-[#FBC108]" />}
					label="ที่อยู่ผู้ประสบอันตราย"
					content={<div>test</div>}
				/>
			</div>
		);
	},
};
