import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import BaseDatePicker from "../BaseDatePicker";

const meta: Meta<typeof BaseDatePicker> = {
	title: "BaseComponent/Form/BaseDatePicker",
	component: BaseDatePicker,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseDatePicker>;

export const DefaultDatePicker: Story = {
	render: () => {
		const [selectedDate, setSelectedDate] = useState<string | null>(null);

		const handleDateChange = (date: string) => {
			console.log("Selected date:", date);
			setSelectedDate(date);
		};

		return (
			<BaseDatePicker
				isStorybook
				value={selectedDate}
				onChangeDateFunction={handleDateChange}
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseDatePicker } from 'wcf-component-lib/src/components';

const Example = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateChange = (date: string) => {
    console.log("Selected date:", date);
    setSelectedDate(date);
  };

  return (
    <BaseDatePicker
      value={selectedDate}
      onChangeDateFunction={handleDateChange}
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
	render: () => <BaseDatePicker isStorybook value={null} disabled={true} />,
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseDatePicker } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseDatePicker value={null} disabled={true} />
);

export default Example;
        `,
			},
		},
	},
};
