import type { Meta, StoryObj } from "@storybook/react";
import BaseButtonSave from "..";

const meta: Meta<typeof BaseButtonSave> = {
	title: "BaseComponent/Button/BaseButtonSave",
	component: BaseButtonSave,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseButtonSave>;

export const DefaultSaveButton: Story = {
	args: {
		onClick: () => console.log("Save button clicked"),
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseButtonSave } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseButtonSave onClick={() => console.log("Save button clicked")} />
);

export default Example;
        `,
			},
		},
	},
};

export const SaveButtonWithCustomClass: Story = {
	args: {
		onClick: () => console.log("Custom save button clicked"),
		className: "custom-save-class",
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseButtonSave } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseButtonSave
    onClick={() => console.log("Custom save button clicked")}
    className="custom-save-class"
  />
);

export default Example;
        `,
			},
		},
	},
};
