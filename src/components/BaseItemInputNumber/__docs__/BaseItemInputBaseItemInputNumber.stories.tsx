import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import BaseItemInputNumber from "../BaseItemInputNumber";

import { maxRule } from "../../../rules/FormRulesFunction";
import { Form } from "antd";
import BaseForm from "../../BaseForm";

const meta: Meta<typeof BaseItemInputNumber> = {
	title: "BaseComponent/Form/BaseItemInputNumber",
	component: BaseItemInputNumber,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		label: { control: "text" },
		placeholder: { control: "text" },
		hideFieldControl: { control: "boolean" },
		disabled: { control: "boolean" },
		decimalDigit: { control: "number" },
		textAlign: {
			control: "select",
			options: ["left", "center", "right"],
			description: "กำหนดการจัดตำแหน่งข้อความ",
			defaultValue: "right",
		},
	},
};

export default meta;
type Story = StoryObj<typeof BaseItemInputNumber>;

export const DefaultInputNumber: Story = {
	args: {
		itemName: "demo",
		placeholder: "กรอกข้อมูล",
		hideFieldControl: false,
		disabled: false,
		decimalDigit: 2,
		textAlign: "right",
	},
	render: (arg) => {
		const [form] = Form.useForm();
		return (
			<BaseForm extraForm={form}>
				<BaseItemInputNumber {...arg} itemForm={form} />
			</BaseForm>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseItemInputNumber } from 'wcf-component-lib/src/components';
import { Form } from 'wcf-component-lib/node_modules/antd';

const Example = () => {
  const [form] = Form.useForm();
  return (
  <BaseForm extraForm={form}>
    <BaseItemInputNumber
	  itemName="demo"
      placeholder="กรอกข้อมูล"
	  itemForm={form}
    />
    </BaseForm>
  );
};

export default Example;
        `,
			},
		},
	},
};

// เพิ่ม Story ใหม่สำหรับการจัดตำแหน่งข้อความ
export const TextAlignmentExamples: Story = {
	render: () => {
		const [form] = Form.useForm();
		return (
			<BaseForm extraForm={form}>
				<div className="flex flex-col gap-4">
					<BaseItemInputNumber
						itemName="left"
						label="ชิดซ้าย"
						placeholder="กรอกข้อมูล"
						textAlign="left"
						itemForm={form}
					/>
					<BaseItemInputNumber
						itemName="center"
						label="กึ่งกลาง"
						placeholder="กรอกข้อมูล"
						textAlign="center"
						itemForm={form}
					/>
					<BaseItemInputNumber
						itemName="right"
						label="ชิดขวา"
						placeholder="กรอกข้อมูล"
						textAlign="right"
						itemForm={form}
					/>
				</div>
			</BaseForm>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseItemInputNumber } from 'wcf-component-lib/src/components';
import { Form } from 'wcf-component-lib/node_modules/antd';

const Example = () => {
  const [form] = Form.useForm();
  return (
  	<BaseForm extraForm={form}>
    <div className="flex flex-col gap-4">
      <BaseItemInputNumber
        itemName="left"
        label="ชิดซ้าย"
        placeholder="กรอกข้อมูล"
        textAlign="left"
        itemForm={form}
      />
      <BaseItemInputNumber
        itemName="center"
        label="กึ่งกลาง"
        placeholder="กรอกข้อมูล"
        textAlign="center"
        itemForm={form}
      />
      <BaseItemInputNumber
        itemName="right"
        label="ชิดขวา"
        placeholder="กรอกข้อมูล"
        textAlign="right"
        itemForm={form}
      />
    </div>
	</BaseForm>

  );
};

export default Example;
        `,
			},
		},
	},
};

export const DisableInputNumber: Story = {
	render: () => {
		const [form] = Form.useForm();
		const handleFinish = (values) => {
			console.log("Form submitted:", values);
		};

		return (
			<BaseForm extraForm={form} onFinish={handleFinish}>
				<BaseItemInputNumber
					itemName="demo"
					placeholder="กรอกข้อมูล"
					disabled={true}
					itemForm={form}
				/>
			</BaseForm>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseItemInputNumber } from 'wcf-component-lib/src/components';
import { Form } from 'wcf-component-lib/node_modules/antd';

const Example = () => {
  const [form] = Form.useForm();
  		const handleFinish = (values) => {
			console.log("Form submitted:", values);
		};

ชreturn (
<BaseForm extraForm={form} onFinish={handleFinish}></BaseForm>
    <BaseItemInputNumber
	  itemName="demo"
      placeholder="กรอกข้อมูล"
	  disabled={true}
	  itemForm={form}
                />
</BaseForm>
  );
};

export default Example;
        `,
			},
		},
	},
};

export const InputNumberWithMaxLength: Story = {
	render: () => {
		const [form] = Form.useForm();

		const handleFinish = (values) => {
			console.log("Form submitted:", values);
		};

		return (
			<div className=" w-72">
				<BaseForm extraForm={form} onFinish={handleFinish}>
					<BaseItemInputNumber
						itemName="demo"
						placeholder="กรอกข้อมูล"
						rules={[maxRule("Demo", 4)]}
						itemForm={form}
					/>
				</BaseForm>
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseForm, BaseItemInputNumber } from 'wcf-component-lib/src/components';
import { maxRule } from 'wcf-component-lib/src/rules/FormRulesFunction';
import { Form } from 'wcf-component-lib/node_modules/antd';

const Example = () => {
  const [form] = Form.useForm();
  
  const handleFinish = (values) => {
    console.log("Form submitted:", values);
  };

  return (
    <BaseForm extraForm={form} onFinish={handleFinish}>
      <BaseItemInputNumber
        itemName="demo"
        placeholder="กรอกข้อมูล"
        rules={[maxRule("Demo", 4)]}
        itemForm={form}
      />
    </BaseForm>
  );
};

export default Example;
        `,
			},
		},
	},
};

export const InputNumberWithLabel: Story = {
	render: () => {
		const [value, setValue] = React.useState<number>(0);

		return (
			<BaseItemInputNumber
				label="Demo"
				placeholder="กรอกข้อมูล"
				value={value}
				onChangeFunction={(e) => setValue(Number(e.target.value))}
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseItemInputNumber } from 'wcf-component-lib/src/components';

const Example = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <BaseItemInputNumber
      label="Demo"
      placeholder="กรอกข้อมูล"
      value={value}
      onChangeFunction={(e) => setValue(Number(e.target.value))}
    />
  );
};

export default Example;
        `,
			},
		},
	},
};

export const HideFieldControlInputNumber: Story = {
	render: () => {
		const [value, setValue] = React.useState<number>(0);

		return (
			<BaseItemInputNumber
				placeholder="กรอกข้อมูล"
				hideFieldControl={true}
				value={value}
				onChangeFunction={(e) => setValue(Number(e.target.value))}
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseItemInputNumber } from 'wcf-component-lib/src/components';

const Example = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <BaseItemInputNumber
      placeholder="กรอกข้อมูล"
      hideFieldControl={true}
      value={value}
      onChangeFunction={(e) => setValue(Number(e.target.value))}
    />
  );
};

export default Example;
        `,
			},
		},
	},
};

export const InputNumberWithNumberOfDecimalDigit: Story = {
	render: () => {
		const [value, setValue] = React.useState<number>(0);

		return (
			<BaseItemInputNumber
				placeholder="กรอกข้อมูล"
				decimalDigit={4}
				value={value}
				onChangeFunction={(e) => setValue(Number(e.target.value))}
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseItemInputNumber } from 'wcf-component-lib/src/components';

const Example = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <BaseItemInputNumber
      placeholder="กรอกข้อมูล"
      decimalDigit={4}
      value={value}
      onChangeFunction={(e) => setValue(Number(e.target.value))}
    />
  );
};

export default Example;
        `,
			},
		},
	},
};
