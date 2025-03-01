import type { Meta, StoryObj } from "@storybook/react";
import CustomEmpty from "../";

const meta: Meta<typeof CustomEmpty> = {
	title: "BaseComponent/BaseGrid/CustomEmpty",
	component: CustomEmpty,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CustomEmpty>;

export const DefaultEmpty: Story = {
	args: {
		emptyText: "ไม่พบข้อมูล",
		emptyDescription: "ไม่มีข้อมูลที่ต้องการแสดงในขณะนี้",
		emptyImage:
			"https://api-dev-wcf.soilfish.co/mw/asset/public/base-grid-empty.svg",
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { CustomEmpty } from 'wcf-component-lib/src/components';

const Example = () => (
  <CustomEmpty
    emptyText="ไม่พบข้อมูล"
    emptyDescription="ไม่มีข้อมูลที่ต้องการแสดงในขณะนี้"
    emptyImage="https://api-dev-wcf.soilfish.co/mw/api/asset/base-grid-empty.svg"
  />
);

export default Example;
        `,
			},
		},
	},
};

export const WithSecondDescription: Story = {
	args: {
		emptyText: "ไม่พบข้อมูลที่ค้นหา",
		emptyDescription: "กรุณาตรวจสอบเงื่อนไขการค้นหา",
		emptyDescription2: "หรือลองค้นหาด้วยคำค้นอื่น",
		emptyImage:
			"https://api-dev-wcf.soilfish.co/mw/api/asset/base-grid-empty.svg",
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { CustomEmpty } from 'wcf-component-lib/src/components';

const Example = () => (
  <CustomEmpty
    emptyText="ไม่พบข้อมูลที่ค้นหา"
    emptyDescription="กรุณาตรวจสอบเงื่อนไขการค้นหา"
    emptyDescription2="หรือลองค้นหาด้วยคำค้นอื่น"
    emptyImage="https://api-dev-wcf.soilfish.co/mw/api/asset/base-grid-empty.svg"
  />
);

export default Example;
        `,
			},
		},
	},
};

export const CustomImage: Story = {
	args: {
		emptyText: "ไม่พบข้อมูล",
		emptyDescription: "ไม่มีข้อมูลที่ต้องการแสดงในขณะนี้",
		emptyImage: "https://api-dev-wcf.soilfish.co/mw/api/asset/empty-grid.svg",
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { CustomEmpty } from 'wcf-component-lib/src/components';

const Example = () => (
  <CustomEmpty
    emptyText="ไม่พบข้อมูล"
    emptyDescription="ไม่มีข้อมูลที่ต้องการแสดงในขณะนี้"
    emptyImage="https://api-dev-wcf.soilfish.co/mw/api/asset/empty-grid.svg"
  />
);

export default Example;
        `,
			},
		},
	},
};
