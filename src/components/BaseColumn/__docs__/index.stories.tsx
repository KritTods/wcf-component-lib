import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import BaseColumn from "..";

const meta: Meta<typeof BaseColumn> = {
	title: "BaseComponent/Layout/BaseColumn",
	component: BaseColumn,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseColumn>;

export const DefaultColumn: Story = {
	args: {
		className: "space-y-4",
		children: (
			<>
				<div className="bg-blue-200 p-4">Content 1</div>
				<div className="bg-blue-400 p-4">Content 2</div>
				<div className="bg-blue-600 p-4">Content 3</div>
			</>
		),
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseColumn } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseColumn className="space-y-4">
    <div className="bg-blue-200 p-4">Content 1</div>
    <div className="bg-blue-400 p-4">Content 2</div>
    <div className="bg-blue-600 p-4">Content 3</div>
  </BaseColumn>
);

export default Example;
        `,
			},
		},
	},
};

export const ColumnWithCustomIdAndKey: Story = {
	args: {
		id: "custom-column",
		key: "column-1",
		className: "space-y-4",
		children: (
			<>
				<div className="bg-red-200 p-4">Custom Content 1</div>
				<div className="bg-red-400 p-4">Custom Content 2</div>
				<div className="bg-red-600 p-4">Custom Content 3</div>
			</>
		),
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseColumn } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseColumn id="custom-column" key="column-1" className="space-y-4">
    <div className="bg-red-200 p-4">Custom Content 1</div>
    <div className="bg-red-400 p-4">Custom Content 2</div>
    <div className="bg-red-600 p-4">Custom Content 3</div>
  </BaseColumn>
);

export default Example;
        `,
			},
		},
	},
};
