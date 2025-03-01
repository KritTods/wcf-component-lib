import type { Meta, StoryObj } from "@storybook/react";
import {
	clinicColumns,
	data,
} from "../../../components/BaseGrid/__docs__/column";
import BaseGrid from "../../../components/BaseGrid";
import TableListLayout from "..";
import React from "react";

const meta: Meta<typeof TableListLayout> = {
	title: "BaseComponent/Layout/TableListLayout",
	component: TableListLayout,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		type: {
			control: "select",
			options: ["default", "form", "tabs"],
			description: "รูปแบบการแสดงผล Layout",
		},
		textHeader: {
			control: "text",
			description: "ข้อความส่วนหัว",
		},
		totalItems: {
			control: "number",
			description: "จำนวนรายการทั้งหมด",
		},
		addLabel: {
			control: "text",
			description: "ข้อความปุ่มเพิ่มรายการ",
		},
		firstLoading: {
			control: "boolean",
			description: "สถานะโหลดข้อมูลครั้งแรก",
		},
		pageLevel: {
			control: "text",
			description: "ระดับการเข้าถึงหน้า",
		},
	},
};

export default meta;
type Story = StoryObj<typeof TableListLayout>;

export const Default: Story = {
	args: {
		type: "default",
		textHeader: "รายการ",
		totalItems: 10,
		Grid: <BaseGrid columns={clinicColumns} rows={data} twoToneColor={true} />,
		addLabel: "สร้าง",
		firstLoading: false,
		pageLevel: "add",
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { TableListLayout } from 'wcf-component-lib/src/components';
import { BaseGrid } from 'wcf-component-lib/src/components';

const Example = () => (
  <TableListLayout
    type="default"
    textHeader="รายการ"
    totalItems={10}
    Grid={<BaseGrid columns={clinicColumns} rows={data} twoToneColor={true} />}
    addLabel="สร้าง"
    firstLoading={false}
    pageLevel="add"
  />
);

export default Example;
        `,
			},
		},
	},
};

const ShowButtonAdd = () => {
	return (
		<div>
			<h3>แสดง Button Add </h3>
			<h3>1. ต้องมี pageLevel default จะเป็น add</h3>
			<h3>2. ส่ง addRow </h3>

			<img src="/images-doc/TableListLayout.png" alt="TableListLayout" />
		</div>
	);
};

export const ShowButtonAddStory: Story = {
	render: () => <ShowButtonAdd />,
	parameters: {
		docs: {
			source: {
				code: `
		                <DivPermission pageLevel={pageLevel}>
							<BaseButton
								type="primary"
								onClick={addRow}
								label={addLabel ?? "สร้าง"}
								icon={<PlusCircleFilled style={{ fontSize: "24px" }} />}
							/>
						</DivPermission>

`,
			},
		},
	},
};

export const WithForm: Story = {
	args: {
		...Default.args,
		type: "form",
		textHeader: "แบบฟอร์มรายการ",
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { TableListLayout } from 'wcf-component-lib/src/components';
import { BaseGrid } from 'wcf-component-lib/src/components';

const Example = () => (
  <TableListLayout
    type="form"
    textHeader="แบบฟอร์มรายการ"
    totalItems={10}
    Grid={<BaseGrid columns={clinicColumns} rows={data} twoToneColor={true} />}
    addLabel="สร้าง"
    firstLoading={false}
    pageLevel="add"
  />
);

export default Example;
        `,
			},
		},
	},
};

export const WithTabs: Story = {
	args: {
		...Default.args,
		type: "tabs",
		textHeader: "รายการแบบ Tabs",
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { TableListLayout } from 'wcf-component-lib/src/components';
import { BaseGrid } from 'wcf-component-lib/src/components';

const Example = () => (
  <TableListLayout
    type="tabs"
    textHeader="รายการแบบ Tabs"
    totalItems={10}
    Grid={<BaseGrid columns={clinicColumns} rows={data} twoToneColor={true} />}
    addLabel="สร้าง"
    firstLoading={false}
    pageLevel="add"
  />
);

export default Example;
        `,
			},
		},
	},
};

export const FirstLoading: Story = {
	args: {
		...Default.args,
		firstLoading: true,
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { TableListLayout } from 'wcf-component-lib/src/components';
import { BaseGrid } from 'wcf-component-lib/src/components';

const Example = () => (
  <TableListLayout
    type="default"
    textHeader="รายการ"
    totalItems={10}
    Grid={<BaseGrid columns={clinicColumns} rows={data} twoToneColor={true} />}
    addLabel="สร้าง"
    firstLoading={true}
    pageLevel="add"
  />
);

export default Example;
        `,
			},
		},
	},
};

export const NoAddButton: Story = {
	args: {
		...Default.args,
		addRow: undefined,
		addLabel: undefined,
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { TableListLayout } from 'wcf-component-lib/src/components';
import { BaseGrid } from 'wcf-component-lib/src/components';

const Example = () => (
  <TableListLayout
    type="default"
    textHeader="รายการ"
    totalItems={10}
    Grid={<BaseGrid columns={clinicColumns} rows={data} twoToneColor={true} />}
    firstLoading={false}
    pageLevel="add"
  />
);

export default Example;
        `,
			},
		},
	},
};
