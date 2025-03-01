import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import CustomCellButton from "..";
import BaseGrid from "../../../..";
import { BUTTON_MODE } from "../../../model";

const buttonModeList: string[] = [
	"edit_delete_icon",
	"view_only_icon",
	"edit_only_icon",
	"delete_only_icon",
	"printer_icon",
	"order_icon",
	"download_icon",
	"download_delete_icon",
	"upload_icon",
	"add_icon",
	"search_icon",
	"download_excel_fail_icon",
	"cancel_check_icon",
	"send_dollars_icon",
	"success_icon",
	"log_no_access_icon",
	"coin_icon",
	"data_transfer_both_icon",
	"dollar_circle_icon",
	"clock_rotate_right_icon",
];

const meta: Meta<typeof CustomCellButton> = {
	title: "BaseComponent/BaseGrid/CustomCellButton",
	component: CustomCellButton,
	tags: ["autodocs"],
	// parameters: {
	// 	layout: "centered",
	// },
	argTypes: {
		id: {
			control: "text",
			description: "id ของ customCellButton",
		},
		mode: {
			control: "select",
			options: buttonModeList,
		},
		disabled: {
			control: "boolean",
			description: "disabled ปุ่มถ้าไม่ต้องการใช้",
		},
		viewFunction: {
			description: "ใช้สำหรับปุ่ม view",
		},
		editFunction: {
			description: "ใช้สำหรับปุ่ม edit",
		},
		deleteFunction: {
			description: "ใช้สำหรับปุ่ม delete",
		},
		printFunction: {
			description: "ใช้สำหรับปุ่ม print",
		},
		orderFunction: {
			description: "ใช้สำหรับปุ่ม order",
		},
		downloadFunction: {
			description: "ใช้สำหรับปุ่ม download",
		},
		uploadFunction: {
			description: "ใช้สำหรับปุ่ม upload",
		},
		addFunction: {
			description: "ใช้สำหรับปุ่ม add",
		},
		searchFunction: {
			description: "ใช้สำหรับปุ่ม search",
		},
		onClick: {
			description: "ใช้สำหรับปุ่มที่เหลือ",
		},
	},
};

export default meta;
type Story = StoryObj<typeof CustomCellButton>;

const column = [
	{
		title: "No",
		dataIndex: "id",
		key: "id",
	},
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
	},
	{
		title: "Job",
		dataIndex: "job",
		key: "job",
	},
	{
		title: "",
		dataIndex: "",
		key: "",
		render: () => (
			<CustomCellButton
				id="test"
				mode={BUTTON_MODE.EDIT_ONLY_ICON}
				onClick={() => console.log("test")}
			/>
		),
	},
];

const row = [
	{
		id: 1,
		name: "Test1",
		job: "Developer",
	},
	{
		id: 2,
		name: "Test2",
		job: "Tester",
	},
	{
		id: 3,
		name: "Test3",
		job: "Developer",
	},
];

export const AllButton: Story = {
	args: {
		mode: BUTTON_MODE.EDIT_ONLY_ICON,
		isStoryBook: true,
	},
	parameters: {
		docs: {
			sources: {
				code: `
				<CustomCellButton
					id="test"
					{...props}
					onClick={() => console.log("test")}
				/>
			`,
			},
		},
	},
};

export const ExampleInTable: Story = {
	render: () => (
		<BaseGrid columns={column} rows={row} isShowPagination={false} />
	),
	parameters: {
		docs: {
			sources: {
				code: `
				import React from 'react';
				import CustomCellButton from "wcf-component-lib/src/components/BaseGrid/CustomGridCell/Cell/CustomCellButton";

				const Example = () => {
					const column = [
									{
										title: "No",
										dataIndex: "id",
										key: "id",
									},
									{
										title: "Name",
										dataIndex: "name",
										key: "name",
									},
									{
										title: "Job",
										dataIndex: "job",
										key: "job",
									},
									{
										title: "",
										dataIndex: "",
										key: "",
										render: () => (
											<CustomCellButton
												id="test"
												mode={BUTTON_MODE.EDIT_ONLY_ICON}
												onClick={() => console.log("test")}
											/>
										),
									},
								];

					const row = [
						{
							id: 1,
							name: "Test1",
							job: "Developer",
						},
						{
							id: 2,
							name: "Test2",
							job: "Tester",
						},
						{
							id: 3,
							name: "Test3",
							job: "Developer",
						},
					];

				return (
				<BaseGrid columns={column} rows={row} isShowPagination={false} rowKey='id' />
				)
			}
			export default Example;
			`,
			},
		},
	},
};
