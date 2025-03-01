import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import BaseItemTextArea from "../BaseItemTextArea";
import { maxRule } from "../../../rules/FormRulesFunction";

const meta: Meta<typeof BaseItemTextArea> = {
	title: "BaseComponent/Form/BaseItemTextArea",
	component: BaseItemTextArea,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseItemTextArea>;

export const DefaultTextArea: Story = {
	render: () => {
		return (
			<BaseItemTextArea
				isStorybook
				itemName="defaultTextArea"
				label="รายละเอียด"
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseItemTextArea } from 'wcf-component-lib/src/components';

const Example = () => {


  return (
    <BaseItemTextArea
      itemName="defaultTextArea"
      label="รายละเอียด"
    />
  );
};

export default Example;
        `,
			},
		},
	},
};

export const TextAreaWithMaxLength: Story = {
	render: () => {
		return (
			<BaseItemTextArea
				isStorybook
				itemName="textAreaWithMaxLength"
				label="ข้อความ"
				rules={[maxRule("Demo", 10)]}
				rows={4}
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseItemTextArea } from 'wcf-component-lib/src/components';
import { maxRule } from 'wcf-component-lib/src/rules/FormRulesFunction';

const Example = () => {


  return (
			<BaseItemTextArea
				itemName="textAreaWithMaxLength"
				label="ข้อความ"
	            rules={[maxRule("Demo", 10)]}
				rows={4}
			/>
  );
};

export default Example;
        `,
			},
		},
	},
};
