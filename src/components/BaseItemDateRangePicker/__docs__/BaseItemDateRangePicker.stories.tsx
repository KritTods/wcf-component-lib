import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import BaseItemDateRangePicker from "..";

const meta: Meta<typeof BaseItemDateRangePicker> = {
	title: "BaseComponent/Form/BaseItemDateRangePicker",
	component: BaseItemDateRangePicker,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseItemDateRangePicker>;

export const DefaultDateRangePicker: Story = {
	render: () => {
		return <BaseItemDateRangePicker placeholder={["เริ่มต้น", "สิ้นสุด"]} />;
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseItemDateRangePicker } from 'wcf-component-lib/src/components';
import dayjs from 'dayjs';

const Example = () => {

  return (
    <BaseItemDateRangePicker
      placeholder={["เริ่มต้น", "สิ้นสุด"]}
    />
  );
};

export default Example;
        `,
			},
		},
	},
};

export const DisabledDateRangePicker: Story = {
	render: () => {
		return (
			<BaseItemDateRangePicker
				value={null}
				disabled={true}
				placeholder={["Disabled", "Disabled"]}
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseItemDateRangePicker } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseItemDateRangePicker value={null} disabled={true} placeholder={["Disabled", "Disabled"]} />
);

export default Example;
        `,
			},
		},
	},
};
