import type { Meta, StoryObj } from "@storybook/react";
import BaseButtonCancel from "..";

const meta: Meta<typeof BaseButtonCancel> = {
	title: "BaseComponent/Button/BaseButtonCancel",
	component: BaseButtonCancel,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseButtonCancel>;

export const DefaultCancelButton: Story = {
	args: {
		onClick: () => console.log("Cancel button clicked"),
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseButtonCancel } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseButtonCancel onClick={() => console.log("Cancel button clicked")} />
);

export default Example;
        `,
			},
		},
	},
};

export const CancelButtonWithCustomClass: Story = {
	args: {
		onClick: () => console.log("Custom class button clicked"),
		className: "custom-class",
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseButtonCancel } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseButtonCancel
    onClick={() => console.log("Custom class button clicked")}
    className="custom-class"
  />
);

export default Example;
        `,
			},
		},
	},
};
