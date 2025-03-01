import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import BaseItemInput from "../BaseItemInput";
import { maxRule } from "../../../rules/FormRulesFunction";

const meta: Meta<typeof BaseItemInput> = {
	title: "BaseComponent/Form/BaseItemInput",
	component: BaseItemInput,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseItemInput>;

export const DefaultInput: Story = {
	render: () => {
		const [inputValue, setInputValue] = useState<string>("");

		const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			console.log("Input value:", e.target.value);
			setInputValue(e.target.value);
		};

		return (
			<BaseItemInput
				isStorybook
				value={inputValue}
				onChangeFunction={handleInputChange}
				placeholder="กรอกข้อมูล"
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseItemInput } from 'wcf-component-lib/src/components';

const Example = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input value:", e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <BaseItemInput
      value={inputValue}
      onChangeFunction={handleInputChange}
      placeholder="กรอกข้อมูล"
    />
  );
};

export default Example;
        `,
			},
		},
	},
};

export const InputWithMaxLength: Story = {
	render: () => {
		const [inputValue, setInputValue] = useState<string>("");

		const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			console.log("Input value:", e.target.value);
			setInputValue(e.target.value);
		};

		return (
			<BaseItemInput
				isStorybook
				value={inputValue}
				onChangeFunction={handleInputChange}
				placeholder="กรอกข้อมูล"
				rules={[maxRule("Demo", 10)]}
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseItemInput } from 'wcf-component-lib/src/components';
import { maxRule } from 'wcf-component-lib/src/rules/FormRulesFunction';

const Example = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input value:", e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <BaseItemInput
      value={inputValue}
      onChangeFunction={handleInputChange}
      placeholder="กรอกข้อมูล"
    rules={[maxRule("Demo", 10)]}
    />
  );
};

export default Example;
        `,
			},
		},
	},
};
