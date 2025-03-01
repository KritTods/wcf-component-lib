import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import BaseItemDropdown from "..";

const meta: Meta<typeof BaseItemDropdown> = {
	title: "BaseComponent/Form/BaseItemDropdown",
	component: BaseItemDropdown,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseItemDropdown>;

const options = [
	{ value: 1, label: "Option 1" },
	{ value: 2, label: "Option 2" },
	{ value: 3, label: "Option 3", disabled: true },
];

export const DefaultDropdown: Story = {
	render: () => {
		const [selectedValue, setSelectedValue] = useState<
			number | string | undefined
		>(undefined);

		const handleDropdownChange = (value: number) => {
			console.log("Selected Value:", value);
			setSelectedValue(value);
		};

		return (
			<BaseItemDropdown
				value={selectedValue}
				onChange={handleDropdownChange}
				option={options}
				placeholder="โปรดเลือก"
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseItemDropdown } from 'wcf-component-lib/src/components';

const options = [
  { value: 1, label: "Option 1" },
  { value: 2, label: "Option 2" },
  { value: 3, label: "Option 3", disabled: true },
];

const Example = () => {
  const [selectedValue, setSelectedValue] = useState<number | string | undefined>(undefined);

  const handleDropdownChange = (value: number) => {
    console.log("Selected Value:", value);
    setSelectedValue(value);
  };

  return (
    <BaseItemDropdown
      value={selectedValue}
      onChange={handleDropdownChange}
      option={options}
      placeholder="โปรดเลือก"
    />
  );
};

export default Example;
        `,
			},
		},
	},
};

export const LoadingDropdown: Story = {
	render: () => {
		return (
			<BaseItemDropdown
				option={options}
				placeholder="กำลังโหลด..."
				loading={true}
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseItemDropdown } from 'wcf-component-lib/src/components';

const options = [
  { value: 1, label: "Option 1" },
  { value: 2, label: "Option 2" },
  { value: 3, label: "Option 3" },
];

const Example = () => (
  <BaseItemDropdown
    option={options}
    placeholder="กำลังโหลด..."
    loading={true}
  />
);

export default Example;
        `,
			},
		},
	},
};
