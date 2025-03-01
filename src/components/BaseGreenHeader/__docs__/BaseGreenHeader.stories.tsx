import type { Meta, StoryObj } from "@storybook/react";
import BaseGreenHeader from "../";

const meta: Meta<typeof BaseGreenHeader> = {
	title: "BaseComponent/Layout/BaseGreenHeader",
	component: BaseGreenHeader,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseGreenHeader>;

export const DefaultHeader: Story = {
	args: {
		title: "Green Header",
		description: "This is the description for the green header.",
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseGreenHeader } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseGreenHeader
    title="Green Header"
    description="This is the description for the green header."
  />
);

export default Example;
        `,
			},
		},
	},
};

export const HeaderWithCustomClass: Story = {
	args: {
		title: "Custom Class Header",
		description: "This header uses a custom class.",
		className: "custom-class",
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseGreenHeader } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseGreenHeader
    title="Custom Class Header"
    description="This header uses a custom class."
    className="custom-class"
  />
);

export default Example;
        `,
			},
		},
	},
};
