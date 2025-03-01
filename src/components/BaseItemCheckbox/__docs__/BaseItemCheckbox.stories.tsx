import type { Meta, StoryObj } from "@storybook/react";
import BaseItemCheckbox from "../BaseItemCheckbox";
import { BaseFormItemPosition } from "../../../constants/form-item-position";

const meta: Meta<typeof BaseItemCheckbox> = {
	title: "BaseComponent/Form/BaseItemCheckbox",
	component: BaseItemCheckbox,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseItemCheckbox>;

export const DefaultBaseItemCheckbox: Story = {
	args: {
		isStorybook: true,
		itemName: "checkClinicCode",
		label: "รหัสคลินิค",
		checked: true,
		labelPosition: BaseFormItemPosition.RIGHT,
		onClickFunction: () => {
			console.log("Checkbox clicked");
		},
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseItemCheckbox } from 'wcf-component-lib/src/components';
import { BaseFormItemPosition } from 'wcf-component-lib/src/constants/form-item-position';

const Example = () => (
  <BaseItemCheckbox
    itemName="checkClinicCode"
    label="รหัสคลินิค"
    checked={true}
    labelPosition={BaseFormItemPosition.RIGHT}
    onClickFunction={() => console.log("Checkbox clicked")}
  />
);

export default Example;
        `,
			},
		},
	},
};

export const LeftLabelCheckbox: Story = {
	args: {
		isStorybook: true,
		itemName: "checkClinicCode",
		label: "รหัสคลินิค",
		checked: false,
		labelPosition: BaseFormItemPosition.LEFT,
		onClickFunction: () => {
			console.log("Checkbox clicked");
		},
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseItemCheckbox } from 'wcf-component-lib/src/components';
import { BaseFormItemPosition } from 'wcf-component-lib/src/constants/form-item-position';

const Example = () => (
  <BaseItemCheckbox
    itemName="checkClinicCode"
    label="รหัสคลินิค"
    checked={false}
    labelPosition={BaseFormItemPosition.LEFT}
    onClickFunction={() => console.log("Checkbox clicked")}
  />
);

export default Example;
        `,
			},
		},
	},
};
