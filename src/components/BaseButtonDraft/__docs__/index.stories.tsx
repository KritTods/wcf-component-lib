import type { Meta, StoryObj } from "@storybook/react";
import BaseButtonDraft from "..";

const meta: Meta<typeof BaseButtonDraft> = {
	title: "BaseComponent/Button/BaseButtonDraft",
	component: BaseButtonDraft,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseButtonDraft>;

export const DefaultDraftButton: Story = {
	args: {
		onClick: () => console.log("Draft button clicked"),
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseButtonDraft } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseButtonDraft onClick={() => console.log("Draft button clicked")} />
);

export default Example;
        `,
			},
		},
	},
};

export const DraftButtonWithCustomClass: Story = {
	args: {
		onClick: () => console.log("Custom draft button clicked"),
		className: "custom-draft-class",
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseButtonDraft } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseButtonDraft
    onClick={() => console.log("Custom draft button clicked")}
    className="custom-draft-class"
  />
);

export default Example;
        `,
			},
		},
	},
};
