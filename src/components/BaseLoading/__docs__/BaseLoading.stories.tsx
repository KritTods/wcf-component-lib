import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import BaseLoading from "..";

const meta: Meta<typeof BaseLoading> = {
	title: "BaseComponent/BaseLoading",
	component: BaseLoading,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseLoading>;

export const DefaultLoading: Story = {
	render: () => <BaseLoading />,
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import BaseLoading from 'wcf-component-lib/src/components/BaseLoading';

const Example = () => <BaseLoading />;

export default Example;
        `,
			},
		},
	},
};

export const SmallLoading: Story = {
	render: () => <BaseLoading size="small" />,
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import BaseLoading from 'wcf-component-lib/src/components/BaseLoading';

const Example = () => <BaseLoading size="small" />;

export default Example;
        `,
			},
		},
	},
};

export const LargeLoading: Story = {
	render: () => <BaseLoading size="large" />,
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import BaseLoading from 'wcf-component-lib/src/components/BaseLoading';

const Example = () => <BaseLoading size="large" />;

export default Example;
        `,
			},
		},
	},
};
