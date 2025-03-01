import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import BaseDropDown from "..";
import type { Option } from "../model";
import { MenuProps } from "antd/es/menu";

const meta: Meta<typeof BaseDropDown> = {
	title: "BaseComponent/Form/BaseDropDown",
	component: BaseDropDown,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseDropDown>;

const options: Option[] = [
	{ value: "1", label: "Option 1" },
	{ value: "2", label: "Option 2" },
	{ value: "3", label: "Option 3" },
];

export const DefaultSelect: Story = {
	render: () => {
		const [selectedValue, setSelectedValue] = useState<string | number | null>(
			null,
		);

		const handleGetValue = (value: string) => {
			console.log("Selected Value:", value);
			setSelectedValue(value);
		};

		return (
			<BaseDropDown
				isStorybook
				value={selectedValue}
				getValue={handleGetValue}
				option={options}
				placeholder="Select an option"
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseDropDown } from 'wcf-component-lib/src/components';

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

const Example = () => {
  const [selectedValue, setSelectedValue] = useState<string | number | null>(null);

  const handleGetValue = (value: string) => {
    console.log("Selected Value:", value);
    setSelectedValue(value);
  };

  return (
    <BaseDropDown
      value={selectedValue}
      getValue={handleGetValue}
      option={options}
      placeholder="Select an option"
    />
  );
};

export default Example;
        `,
			},
		},
	},
};

export const DefaultDropDown: Story = {
	render: () => {
		const items: MenuProps["items"] = [
			{
				key: "1",
				label: <div onClick={() => console.log("clickasdasdad")}>Test 555</div>,
			},
			{
				key: "2",
				label: "sub menu",
				children: [
					{
						key: "2-1",
						label: "3rd menu item",
					},
					{
						key: "2-2",
						label: "4th menu item",
					},
				],
			},
			{
				key: "3",
				label: "disabled sub menu",
				disabled: true,
				children: [
					{
						key: "3-1",
						label: "5d menu item",
					},
					{
						key: "3-2",
						label: "6th menu item",
					},
				],
			},
		];

		return (
			<>
				<BaseDropDown
					isStorybook
					isSelect={false}
					menu={items}
					dropdownParent={<>test</>}
					trigger={["click"]}
				/>
			</>
		);
	},
};

export const DisabledDropDown: Story = {
	render: () => {
		return (
			<BaseDropDown
				isStorybook
				option={options}
				placeholder="Cannot select"
				disabled={true}
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseDropDown } from 'wcf-component-lib/src/components';

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

const Example = () => (
  <BaseDropDown
    option={options}
    placeholder="Cannot select"
    disabled={true}
  />
);

export default Example;
        `,
			},
		},
	},
};
