import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import BaseRow from "..";

const meta: Meta<typeof BaseRow> = {
	title: "BaseComponent/Layout/BaseRow",
	component: BaseRow,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseRow>;

export const DefaultBaseRow: Story = {
	render: () => (
		<BaseRow className="bg-gray-100 p-4">
			<div className="w-1/3 bg-blue-200 p-2 text-center">Item 1</div>
			<div className="w-1/3 bg-blue-300 p-2 text-center">Item 2</div>
			<div className="w-1/3 bg-blue-400 p-2 text-center">Item 3</div>
		</BaseRow>
	),
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import BaseRow from './BaseRow';

const Example = () => (
  <BaseRow className="bg-gray-100 p-4">
    <div className="w-1/3 bg-blue-200 p-2 text-center">Item 1</div>
    <div className="w-1/3 bg-blue-300 p-2 text-center">Item 2</div>
    <div className="w-1/3 bg-blue-400 p-2 text-center">Item 3</div>
  </BaseRow>
);

export default Example;
        `,
			},
		},
	},
};

export const SpacedBaseRow: Story = {
	render: () => (
		<BaseRow className="bg-gray-100 p-4 space-x-4">
			<div className="w-1/3 bg-green-200 p-2 text-center">Item 1</div>
			<div className="w-1/3 bg-green-300 p-2 text-center">Item 2</div>
			<div className="w-1/3 bg-green-400 p-2 text-center">Item 3</div>
		</BaseRow>
	),
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import BaseRow from './BaseRow';

const Example = () => (
  <BaseRow className="bg-gray-100 p-4 space-x-4">
    <div className="w-1/3 bg-green-200 p-2 text-center">Item 1</div>
    <div className="w-1/3 bg-green-300 p-2 text-center">Item 2</div>
    <div className="w-1/3 bg-green-400 p-2 text-center">Item 3</div>
  </BaseRow>
);

export default Example;
        `,
			},
		},
	},
};
