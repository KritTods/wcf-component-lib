import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import BaseItemTimeRangePicker from "..";

const meta: Meta<typeof BaseItemTimeRangePicker> = {
	title: "BaseComponent/Form/BaseItemTimeRangePicker",
	component: BaseItemTimeRangePicker,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseItemTimeRangePicker>;

export const DefaultTimeRangePicker: Story = {
	render: () => {
		return (
			<BaseItemTimeRangePicker placeholder={["เวลาเริ่มต้น", "เวลาสิ้นสุด"]} />
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseItemTimeRangePicker } from 'wcf-component-lib/src/components';
import dayjs from 'dayjs';

const Example = () => {

  return (
    <BaseItemTimeRangePicker
      placeholder={["เวลาเริ่มต้น", "เวลาสิ้นสุด"]}
    />
  );
};

export default Example;
        `,
			},
		},
	},
};

export const DisabledTimeRangePicker: Story = {
	render: () => {
		return (
			<BaseItemTimeRangePicker
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
import { BaseItemTimeRangePicker } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseItemTimeRangePicker value={null} disabled={true} placeholder={["Disabled", "Disabled"]} />
);

export default Example;
        `,
			},
		},
	},
};
