import type { Meta, StoryObj } from "@storybook/react";
import BaseCollapseLabelHeader from "..";

const meta: Meta<typeof BaseCollapseLabelHeader> = {
	title: "BaseComponent/Layout/BaseCollapseLabelHeader",
	component: BaseCollapseLabelHeader,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseCollapseLabelHeader>;

export const DefaultLabelHeader: Story = {
	args: {
		title: "Collapse Header Title",
		description: "This is the description for the collapse header.",
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseCollapseLabelHeader } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseCollapseLabelHeader
    title="Collapse Header Title"
    description="This is the description for the collapse header."
  />
);

export default Example;
        `,
			},
		},
	},
};

export const LabelHeaderWithCustomClass: Story = {
	args: {
		title: "Custom Class Header",
		description: "This header has a custom class applied.",
		className: "custom-header-class",
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseCollapseLabelHeader } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseCollapseLabelHeader
    title="Custom Class Header"
    description="This header has a custom class applied."
    className="custom-header-class"
  />
);

export default Example;
        `,
			},
		},
	},
};
