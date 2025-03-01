import type { Meta, StoryObj } from "@storybook/react";
import BaseHorizontalHeader from "..";
import React from "react";
import HomeFilled from "@ant-design/icons/lib/icons/HomeFilled";

const meta: Meta<typeof BaseHorizontalHeader> = {
	title: "BaseComponent/Layout/BaseHorizontalHeader",
	component: BaseHorizontalHeader,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseHorizontalHeader>;

export const Default: Story = {
	render: (args) => (
		<div className="w-[200px]">
			<BaseHorizontalHeader {...args} title="หัวข้อ" icons={<HomeFilled />} />
		</div>
	),
	args: {
		borderColor: "#8E670B",
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseHorizontalHeader } from 'wcf-component-lib/src/components';
import HomeFilled from "@ant-design/icons/lib/icons/HomeFilled";

const Example = () => (
  <div className="w-[200px]">
    <BaseHorizontalHeader title="หัวข้อ" icons={<HomeFilled />} borderColor="#8E670B" />
  </div>
);

export default Example;
        `,
			},
		},
	},
};

export const CustomColorHeader: Story = {
	render: (args) => (
		<div className="w-[200px]">
			<BaseHorizontalHeader {...args} title="หัวข้อสีที่กำหนดเอง" />
		</div>
	),
	args: {
		borderColor: "#FF5733", // สีของเส้นขอบกำหนดเอง
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseHorizontalHeader } from 'wcf-component-lib/src/components';

const Example = () => (
  <div className="w-[200px]">
    <BaseHorizontalHeader title="หัวข้อสีที่กำหนดเอง" borderColor="#FF5733" />
  </div>
);

export default Example;
        `,
			},
		},
	},
};
