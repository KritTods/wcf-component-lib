import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import BaseForm from "../../../components/BaseForm";
import { BaseItemDropdown, BaseItemInput } from "../../../components";
import { requiredRule } from "../../../rules/FormRulesFunction";
import { options } from "../../../constants/initialValue";
import FilterLayout from "..";
import { FormProps, useForm } from "antd/es/form/Form";

const meta: Meta<typeof FilterLayout> = {
	title: "Layouts/FilterLayout",
	component: FilterLayout,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		isFlex: {
			control: "boolean",
			description: "รูปแบบการจัดปุ่มกับ children",
		},
		Header: {
			control: "text",
			description: "ใส่หัวข้อของการ Search",
		},
		showVerticalLine: {
			control: "boolean",
			description: "เส้นข้างกล่อง Search",
		},
		hideMarginVertical: {
			control: "boolean",
			description: "เพิ่ม margin ของเส้นข้างกล่อง Search",
		},
		isButtonCenter: {
			control: "boolean",
			description: "จัดการปุ่มให้อยู่ตรงกลาง ถ้าเป็นแนวตั้ง",
		},
		loading: {
			control: "boolean",
			description: "เพิ่มการ loading ในปุ่มค้นหา",
		},
	},
};

export default meta;
type Story = StoryObj<typeof FilterLayout>;

const FormExample = (): React.ReactElement => {
	const [form] = useForm();

	const onFinish: FormProps<unknown>["onFinish"] = (values) => {
		console.log(values);
	};

	return (
		<BaseForm layout="inline" extraForm={form} onFinish={onFinish}>
			<div className="grid grid-cols-3 gap-4">
				<BaseItemDropdown
					label="A :"
					itemName="a"
					placeholder="a"
					rules={[requiredRule("a")]}
					option={options.status}
				/>
				<BaseItemInput label="B :" itemName="b" placeholder="b" />
				<BaseItemDropdown
					label="สถานะ"
					itemName="isActive"
					placeholder="Status"
					id="PageNews-FormSearch-isActive"
					option={options.statusTH}
				/>
			</div>
		</BaseForm>
	);
};

export const DefaultFilterLayout: Story = {
	args: {
		isFlex: false,
		showVerticalLine: true,
		hideMarginVertical: true,
		loading: false,
		handleSubmitSearch: () => {
			console.log("form submit");
		},
		FilterForm: <FormExample />,
		handleSubmitFilter: () => {
			console.log("submit Filter");
		},
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import FilterLayout from 'wcf-component-lib/src/layout/FilterLayout';
import { BaseForm, BaseItemDropdown, BaseItemInput } from 'wcf-component-lib/src/components';

const Example = () => (
    <FilterLayout
      loading={loading}
      FilterForm={
        <BaseForm layout="inline" extraForm={form} onFinish={onFinish}>
			<div className="grid grid-cols-3 gap-4">
				<BaseItemDropdown
					label="A :"
					itemName="a"
					placeholder="a"
					rules={[requiredRule("a")]}
					option={options.status}
				/>
				<BaseItemInput
					label="Subject"
					itemName="subjectLike"
					placeholder="Subject"
					id="PageNews-FormSearch-subjectLike"
				/>
				<BaseItemDropdown
					label="สถานะ"
					itemName="isActive"
					placeholder="Status"
					id="PageNews-FormSearch-isActive"
					option={options.statusTH}
				/>
			</div>
		</BaseForm>
      }
      handleSubmitSearch={() => form.submit()}
    />
);

export default Example;
        `,
			},
		},
	},
};
