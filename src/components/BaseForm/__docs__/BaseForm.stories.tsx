import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import BaseForm from "..";
import { Button } from "antd/es";
import BaseItemInput from "../../BaseItemInput/BaseItemInput"; // แก้ไขเส้นทางให้ถูกต้อง

const meta: Meta<typeof BaseForm> = {
	title: "BaseComponent/Form/BaseForm",
	component: BaseForm,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseForm>;

export const DefaultForm: Story = {
	render: () => {
		const handleFinish = (values: unknown) => {
			console.log("Form submitted:", values);
		};

		const handleFinishFailed = (errorInfo: unknown) => {
			console.log("Form submission failed:", errorInfo);
		};

		return (
			<BaseForm onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
				<BaseItemInput itemName="username" placeholder="Username" />
				<BaseItemInput itemName="password" placeholder="Password" />
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</BaseForm>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseForm ,BaseItemInput} from 'wcf-component-lib/src/components';
import { Button } from 'wcf-component-lib/node_modules/antd';


const Example = () => {
  const handleFinish = (values: any) => {
    console.log("Form submitted:", values);
  };

  const handleFinishFailed = (errorInfo: any) => {
    console.log("Form submission failed:", errorInfo);
  };

  return (
    <BaseForm onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
      <BaseItemInput itemName="username" placeholder="Username" />
      <BaseItemInput itemName="password" placeholder="Password" />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </BaseForm>
  );
};

export default Example;
        `,
			},
		},
	},
};

export const PrefilledForm: Story = {
	render: () => {
		const handleFinish = (values: unknown) => {
			console.log("Form submitted:", values);
		};

		const initialValues = {
			username: "JohnDoe",
			password: "password123",
		};

		return (
			<BaseForm onFinish={handleFinish} initialValues={initialValues}>
				<BaseItemInput itemName="username" placeholder="Username" />
				<BaseItemInput itemName="password" placeholder="Password" />
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</BaseForm>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseForm ,BaseItemInput} from 'wcf-component-lib/src/components';
import { Button } from 'wcf-component-lib/node_modules/antd';


const Example = () => {
  const handleFinish = (values: any) => {
    console.log("Form submitted:", values);
  };

  const initialValues = {
    username: "JohnDoe",
    password: "password123",
  };

  return (
    <BaseForm onFinish={handleFinish} initialValues={initialValues}>
      <BaseItemInput itemName="username" placeholder="Username" />
      <BaseItemInput itemName="password" placeholder="Password" />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </BaseForm>
  );
};

export default Example;
        `,
			},
		},
	},
};
