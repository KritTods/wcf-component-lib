import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import BaseHeaderNameAndSwitch from "../BaseHeaderNameAndSwitch";

const meta: Meta<typeof BaseHeaderNameAndSwitch> = {
	title: "BaseComponent/Layout/BaseHeaderNameAndSwitch",
	component: BaseHeaderNameAndSwitch,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseHeaderNameAndSwitch>;

export const DefaultHeaderWithSwitch: Story = {
	render: () => {
		const [switchValue, setSwitchValue] = useState(true);

		const handleSwitchChange = (checked: boolean) => {
			setSwitchValue(checked);
			console.log("Switch changed:", checked);
		};

		const handleHistoryClick = () => {
			console.log("History button clicked");
		};

		return (
			<div className="w-[800px]">
				<BaseHeaderNameAndSwitch
					textHeader="การจัดการสถานะ"
					switchCheckValue={switchValue}
					onChangeSwitchFunction={handleSwitchChange}
					onClickHistoryButtonFunction={handleHistoryClick}
				/>
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseHeaderNameAndSwitch } from 'wcf-component-lib/src/components';

const Example = () => {
  const [switchValue, setSwitchValue] = useState(true);

  const handleSwitchChange = (checked: boolean) => {
    setSwitchValue(checked);
    console.log("Switch changed:", checked);
  };

  const handleHistoryClick = () => {
    console.log("History button clicked");
  };

  return (
    <BaseHeaderNameAndSwitch
      textHeader="การจัดการสถานะ"
      switchCheckValue={switchValue}
      onChangeSwitchFunction={handleSwitchChange}
      onClickHistoryButtonFunction={handleHistoryClick}
    />
  );
};

export default Example;
        `,
			},
		},
	},
};
