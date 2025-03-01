import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import BaseRadioButton from "..";
import { RadioItems } from "../../BaseRadio";

const meta: Meta<typeof BaseRadioButton> = {
	title: "BaseComponent/Form/BaseRadioButton",
	component: BaseRadioButton,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseRadioButton>;

export const DefaultBaseRadioButton: Story = {
	render: () => {
		const [value, setValue] = React.useState<number>(1);
		const items: RadioItems[] = [
			{ value: 1, label: "Option 1" },
			{ value: 2, label: "Option 2" },
		];

		return (
			<BaseRadioButton
				notForm
				label="Select an option"
				groupDirection="horizental"
				alignContent="center"
				customWidthSize="w-[200px]"
				value={value}
				setValue={(newValue) => setValue(newValue as number)}
				items={items}
				rules={[{ required: true, message: "Please select an option" }]}
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import BaseRadioButton from 'wcf-component-lib/src/components/BaseRadioButton';
import { RadioItems } from "../../BaseRadio";

const Example = () => {
  const [value, setValue] = useState<number>(1);
  const items: RadioItems[] = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
  ];

  return (
    <BaseRadioButton
		notForm
		label="Select an option"
		groupDirection="horizental"
		alignContent="center"
		customWidthSize="w-[200px]"
		value={value}
		setValue={(newValue) => setValue(newValue as number)}
		items={items}
		rules={[{ required: true, message: "Please select an option" }]}
	/>
  );
};

export default Example;
        `,
			},
		},
	},
};
