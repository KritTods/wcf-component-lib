import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { RadioItems } from "..";
import BaseRadio from "..";

const meta: Meta<typeof BaseRadio> = {
	title: "BaseComponent/Form/BaseRadio",
	component: BaseRadio,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseRadio>;

export const DefaultBaseRadio: Story = {
	render: () => {
		const [value, setValue] = React.useState<number>(1);
		const items: RadioItems[] = [
			{ value: 1, label: "Option 1" },
			{ value: 2, label: "Option 2" },
			{ value: 3, label: "Option 3" },
		];

		return (
			<BaseRadio
				notForm
				label="Select an option"
				value={value}
				setValue={(newValue) => setValue(newValue as number)}
				items={items}
				rules={[{ required: true, message: "Please select an option" }]}
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import BaseRadio, { RadioItems } from 'wcf-component-lib/src/components/BaseRadio';

const Example = () => {
  const [value, setValue] = useState<number>(1);
  const items: RadioItems[] = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ];

  return (
    <BaseRadio
	  notForm
      label="Select an option"
      value={value}
      setValue={(newValue) => setValue(newValue as number)}
      items={items}
      rules={[{ required: true, message: "Please select an option" }]}
    />
  );
};

export default Example;
        `,
			},
		},
	},
};

export const VerticalBaseRadio: Story = {
	render: () => {
		const [value, setValue] = React.useState<number>(1);
		const items: RadioItems[] = [
			{ value: 1, label: "Vertical Option 1" },
			{ value: 2, label: "Vertical Option 2" },
			{ value: 3, label: "Vertical Option 3" },
		];

		return (
			<BaseRadio
				label="Select an option"
				value={value}
				setValue={(newValue) => setValue(newValue as number)}
				items={items}
				isVertical={true}
				rules={[{ required: true, message: "Please select an option" }]}
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import BaseRadio, { RadioItems } from 'wcf-component-lib/src/components/BaseRadio';

const Example = () => {
  const [value, setValue] = useState<number>(1);
  const items: RadioItems[] = [
    { value: 1, label: "Vertical Option 1" },
    { value: 2, label: "Vertical Option 2" },
    { value: 3, label: "Vertical Option 3" },
  ];

  return (
    <BaseRadio
      label="Select an option"
      value={value}
      setValue={(newValue) => setValue(newValue as number)}
      items={items}
      isVertical={true}
      rules={[{ required: true, message: "Please select an option" }]}
    />
  );
};

export default Example;
        `,
			},
		},
	},
};

export const ColorfulBaseRadio: Story = {
	render: () => {
		const [value, setValue] = React.useState<number>(1);
		const items: RadioItems[] = [
			{ value: 1, label: "Option 1" },
			{ value: 2, label: "Option 2" },
			{ value: 3, label: "Option 3" },
		];

		return (
			<BaseRadio
				notForm
				label="Select an option"
				value={value}
				isColorful={true}
				setValue={(newValue) => setValue(newValue as number)}
				items={items}
				rules={[{ required: true, message: "Please select an option" }]}
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import BaseRadio, { RadioItems } from 'wcf-component-lib/src/components/BaseRadio';

const Example = () => {
  const [value, setValue] = useState<number>(1);
  const items: RadioItems[] = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ];

  return (
    <BaseRadio
	  notForm
      label="Select an option"
      value={value}
	  isColorful={true}
      setValue={(newValue) => setValue(newValue as number)}
      items={items}
      rules={[{ required: true, message: "Please select an option" }]}
    />
  );
};

export default Example;
        `,
			},
		},
	},
};
