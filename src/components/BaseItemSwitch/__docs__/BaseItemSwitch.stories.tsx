import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import BaseItemSwitch from "../BaseItemSwitch";
import { BaseFormItemPosition } from "../../../constants/form-item-position";

const meta: Meta<typeof BaseItemSwitch> = {
	title: "BaseComponent/Form/BaseItemSwitch",
	component: BaseItemSwitch,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseItemSwitch>;

export const DefaultSwitch: Story = {
	render: () => {
		const [switchValue, setSwitchValue] = useState<boolean>(false);

		const handleSwitchChange = (checked: boolean) => {
			console.log("Switch changed:", checked);
			setSwitchValue(checked);
		};

		return (
			<BaseItemSwitch
				isStorybook
				itemName="defaultSwitch"
				label="สถานะ"
				checked={switchValue}
				onChangeFunction={handleSwitchChange}
				labelPosition={BaseFormItemPosition.RIGHT}
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseItemSwitch } from 'wcf-component-lib/src/components';
import { BaseFormItemPosition } from 'wcf-component-lib/src/constants/form-item-position';

const Example = () => {
  const [switchValue, setSwitchValue] = useState<boolean>(false);

  const handleSwitchChange = (checked: boolean) => {
    console.log("Switch changed:", checked);
    setSwitchValue(checked);
  };

  return (
    <BaseItemSwitch
      itemName="defaultSwitch"
      label="สถานะ"
      checked={switchValue}
      onChangeFunction={handleSwitchChange}
      labelPosition={BaseFormItemPosition.RIGHT}
    />
  );
};

export default Example;
        `,
			},
		},
	},
};

export const LeftLabelSwitch: Story = {
	render: () => {
		const [switchValue, setSwitchValue] = useState<boolean>(true);

		const handleSwitchChange = (checked: boolean) => {
			console.log("Switch changed:", checked);
			setSwitchValue(checked);
		};

		return (
			<BaseItemSwitch
				isStorybook
				itemName="leftLabelSwitch"
				label="เปิดใช้งาน"
				checked={switchValue}
				onChangeFunction={handleSwitchChange}
				labelPosition={BaseFormItemPosition.LEFT}
				secondaryLabel={switchValue ? "ใช้งานอยู่" : "ปิดใช้งาน"}
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseItemSwitch } from 'wcf-component-lib/src/components';
import { BaseFormItemPosition } from 'wcf-component-lib/src/constants/form-item-position';

const Example = () => {
  const [switchValue, setSwitchValue] = useState<boolean>(true);

  const handleSwitchChange = (checked: boolean) => {
    console.log("Switch changed:", checked);
    setSwitchValue(checked);
  };

  return (
    <BaseItemSwitch
      itemName="leftLabelSwitch"
      label="เปิดใช้งาน"
      checked={switchValue}
      onChangeFunction={handleSwitchChange}
      labelPosition={BaseFormItemPosition.LEFT}
      secondaryLabel={switchValue ? "ใช้งานอยู่" : "ปิดใช้งาน"}
    />
  );
};

export default Example;
        `,
			},
		},
	},
};
