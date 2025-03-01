import type { Meta, StoryObj } from "@storybook/react";
import BaseButtonBack from "..";

const meta: Meta<typeof BaseButtonBack> = {
	title: "BaseComponent/Button/BaseButtonBack",
	component: BaseButtonBack,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseButtonBack>;

export const DefaultButton: Story = {
	args: {
		onClick: () => console.log("Button is clicked"),
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseButtonBack } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseButtonBack onClick={() => console.log("Button is clicked")} />
);

export default Example;
        `,
			},
		},
	},
};
