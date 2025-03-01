import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import BaseModalForm from "..";
import { BaseItemInput } from "../../BaseItemInput";
import { Button } from "antd";

const meta: Meta<typeof BaseModalForm> = {
	title: "BaseComponent/BaseModalForm",
	component: BaseModalForm,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		headerText: { control: "text" },
		descriptionText: { control: "text" },
		labelButtonSubmit: { control: "text" },
		showIconHeader: { control: "boolean" },
		hideSubmitButton: { control: "boolean" },
		showButtonAll: { control: "boolean" },
	},
};

export default meta;
type Story = StoryObj<typeof BaseModalForm>;

export const DefaultModalForm: Story = {
	args: {
		headerText: "Default",
		descriptionText: "Default Form",
		labelButtonSubmit: "บันทึก",
		showIconHeader: true,
		hideSubmitButton: false,
		showButtonAll: true,
	},
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);
		const handleConfirm = (): void => {
			console.log("Confirmed");
			setIsOpen(false);
		};

		const handleCancel = (): void => {
			console.log("Cancelled");
			setIsOpen(false);
		};

		const handleClose = (): void => {
			console.log("Closed");
			setIsOpen(false);
		};

		return (
			<>
				<Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
				<BaseModalForm
					{...args}
					isStoryBook
					isOpen={isOpen}
					handleSubmit={handleConfirm}
					cancelFunction={handleCancel}
					closeFunction={handleClose}
					layout="inline"
					inputs={
						<>
							<div className="grid gap-4 w-full">
								<BaseItemInput
									isStorybook
									label="Name"
									itemName="name"
									id="demo-name"
								/>
							</div>
						</>
					}
				/>
			</>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseDialog, BaseItemInput  } from 'wcf-component-lib/src/components';
import { Button } from 'wcf-component-lib/node_modules/antd';
import { Form } from 'wcf-component-lib/node_modules/antd';

const DialogExampleDialog = () => {
const [form] = Form.useForm();
const [isOpen, setIsOpen] = useState(false);

const handleConfirm = (): void => {
	console.log("Confirmed");
	setIsOpen(false);
};

const handleCancel = (): void => {
	console.log("Cancelled");
	setIsOpen(false);
};

const handleClose = (): void => {
	console.log("Closed");
	setIsOpen(false);
};

const ExampleDialog = () => 
	<BaseLoading 
		pageLevel="form"
		extraForm={form}
		isOpen={isOpen}
		layout="inline"
		headerText="Default"
		descriptionText="Default Form"
		handleSubmit={handleConfirm}
		cancelFunction={handleCancel}
		closeFunction={handleClose}
		inputs={
			<>
				<div className="grid gap-4 w-full">
					<BaseItemInput
						label="Name"
						itemName="name"
						id="demo-name"
					/>
				</div>
			</>
		} 
	/>;

export default ExampleDialog;
        `,
			},
		},
	},
};
