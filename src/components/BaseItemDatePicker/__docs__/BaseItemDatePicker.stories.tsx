import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import BaseItemDatePicker from "..";
import dayjs from "dayjs";

const meta: Meta<typeof BaseItemDatePicker> = {
	title: "BaseComponent/Form/BaseItemDatePicker",
	component: BaseItemDatePicker,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseItemDatePicker>;

export const DefaultDatePicker: Story = {
	render: () => {
		const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(
			dayjs(),
		);

		const handleDateChange = (date: dayjs.Dayjs | null) => {
			console.log("Selected date:", date ? date.format("YYYY-MM-DD") : null);
			setSelectedDate(date);
		};

		return (
			<BaseItemDatePicker
				isStorybook
				value={selectedDate}
				onChange={handleDateChange}
				placeholder="เลือกวันที่"
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseItemDatePicker } from 'wcf-component-lib/src/components';
import dayjs from 'dayjs';

const Example = () => {
		const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(
			dayjs(),
		);

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    console.log("Selected date:", date ? date.format("YYYY-MM-DD") : null);
    setSelectedDate(date);
  };

  return (
    <BaseItemDatePicker
      value={selectedDate}
      onChange={handleDateChange}
      placeholder="เลือกวันที่"
    />
  );
};

export default Example;
        `,
			},
		},
	},
};

export const DisabledDatePicker: Story = {
	render: () => {
		return (
			<BaseItemDatePicker
				isStorybook
				value={null}
				disabled={true}
				placeholder="Disabled"
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseItemDatePicker } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseItemDatePicker value={null} disabled={true} placeholder="Disabled" />
);

export default Example;
        `,
			},
		},
	},
};
