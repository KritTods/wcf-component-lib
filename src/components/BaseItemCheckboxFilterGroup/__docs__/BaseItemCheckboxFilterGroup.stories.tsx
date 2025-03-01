import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import BaseItemCheckboxFilterGroup from "../BaseItemCheckboxFilterGroup";
import { IsActive } from "../../../constants/constants";

const meta: Meta<typeof BaseItemCheckboxFilterGroup> = {
	title: "BaseComponent/BaseItemCheckboxFilterGroup",
	component: BaseItemCheckboxFilterGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseItemCheckboxFilterGroup>;

export const DefaultBaseItemCheckboxFilterGroup: Story = {
	render: () => {
		const [isMainChecked, setIsMainChecked] = useState(false);
		const [subInputValue, setSubInputValue] = useState<IsActive | undefined>(
			undefined,
		);

		const handleMainCheckboxClick = () => {
			setIsMainChecked(!isMainChecked);
		};

		const handleSubInputYClick = () => {
			setSubInputValue(IsActive.Y);
		};

		const handleSubInputNClick = () => {
			setSubInputValue(IsActive.N);
		};

		return (
			<BaseItemCheckboxFilterGroup
				isMainInputChecked={isMainChecked}
				onClickMainInputFunction={handleMainCheckboxClick}
				subInputValue={subInputValue}
				onClickSubInputYFunction={handleSubInputYClick}
				onClickSubInputNFunction={handleSubInputNClick}
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseItemCheckboxFilterGroup } from 'wcf-component-lib/src/components';
import { IsActive } from 'wcf-component-lib/src/constants/constants';

const Example = () => {
  const [isMainChecked, setIsMainChecked] = useState(false);
  const [subInputValue, setSubInputValue] = useState<IsActive | undefined>(undefined);

  const handleMainCheckboxClick = () => {
    setIsMainChecked(!isMainChecked);
  };

  const handleSubInputYClick = () => {
    setSubInputValue(IsActive.Y);
  };

  const handleSubInputNClick = () => {
    setSubInputValue(IsActive.N);
  };

  return (
    <BaseItemCheckboxFilterGroup
      isMainInputChecked={isMainChecked}
      onClickMainInputFunction={handleMainCheckboxClick}
      subInputValue={subInputValue}
      onClickSubInputYFunction={handleSubInputYClick}
      onClickSubInputNFunction={handleSubInputNClick}
    />
  );
};

export default Example;
        `,
			},
		},
	},
};
