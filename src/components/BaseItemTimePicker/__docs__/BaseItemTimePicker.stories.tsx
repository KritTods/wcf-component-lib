import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import BaseItemTimePicker from "..";

const meta: Meta<typeof BaseItemTimePicker> = {
	title: "BaseComponent/Form/BaseItemTimePicker",
	component: BaseItemTimePicker,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseItemTimePicker>;

export const DefaultTimePicker: Story = {
	render: () => {
		return <BaseItemTimePicker placeholder="เวลาเริ่มต้น" />;
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseItemTimePicker } from 'wcf-component-lib/src/components';

const Example = () => {
  return (
    <BaseItemTimePicker
      placeholder="เวลาเริ่มต้น"
    />
  );
};

export default Example;
        `,
			},
		},
	},
};

export const DisabledTimePicker: Story = {
	render: () => {
		return (
			<BaseItemTimePicker value={null} disabled={true} placeholder="Disabled" />
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseItemTimePicker } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseItemTimePicker value={null} disabled={true} placeholder="Disabled" />
);

export default Example;
        `,
			},
		},
	},
};
