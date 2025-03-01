import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import BaseButton from "..";

const meta: Meta<typeof BaseButton> = {
	title: "BaseComponent/Button/BaseButton",
	component: BaseButton,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const DefaultButton: Story = {
	args: {
		label: "Default Button",
		onClick: () => console.log("Default Button is clicked"),
		type: "primary",
		isStorybook: true,
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseButton } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseButton
    label="Default Button"
    onClick={() => console.log("Default Button is clicked")}
    type="primary"
  />
);

export default Example;
        `,
			},
		},
	},
};

export const ButtonWithIcon: Story = {
	args: {
		label: "Button with Icon",
		onClick: () => console.log("Button with Icon is clicked"),
		icon: <PlusOutlined />,
		isStorybook: true,
		type: "primary",
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseButton } from 'wcf-component-lib/src/components';
import { PlusOutlined } from '@ant-design/icons';

const Example = () => (
  <BaseButton
    label="Button with Icon"
    onClick={() => console.log("Button with Icon is clicked")}
    icon={<PlusOutlined />}
    type="primary"
  />
);

export default Example;
        `,
			},
		},
	},
};

export const ButtonWithIconType: Story = {
	args: {
		label: "Button with Icon Type",
		onClick: () => console.log("Button with Icon is clicked"),
		iconType: "save",
		isStorybook: true,
		type: "primary",
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseButton } from 'wcf-component-lib/src/components';
import { PlusOutlined } from '@ant-design/icons';

const Example = () => (
  <BaseButton
    label="Button with Icon"
    onClick={() => console.log("Button with Icon is clicked")}
    icon={<PlusOutlined />}
    type="primary"
  />
);

export default Example;
        `,
			},
		},
	},
};

export const WarmSpiceButton: Story = {
	args: {
		label: "WarmSpice Button",
		onClick: () => console.log("WarmSpice Button is clicked"),
		type: "warmSpice",
		isStorybook: true,
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseButton } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseButton
    label="WarmSpice Button"
    onClick={() => console.log("WarmSpice Button is clicked")}
    type="warmSpice"
  />
);

export default Example;
        `,
			},
		},
	},
};

export const HoneyGlowButton: Story = {
	args: {
		label: "HoneyGlow Button",
		onClick: () => console.log("HoneyGlow Button is clicked"),
		type: "honeyGlow",
		isStorybook: true,
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseButton } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseButton
    label="HoneyGlow Button"
    onClick={() => console.log("HoneyGlow Button is clicked")}
    type="honeyGlow"
  />
);

export default Example;
        `,
			},
		},
	},
};

export const OutlineButton: Story = {
	args: {
		label: "Outline Button",
		onClick: () => console.log("Outline Button is clicked"),
		type: "outline",
		isStorybook: true,
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseButton } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseButton
    label="Outline Button"
    onClick={() => console.log("Outline Button is clicked")}
    type="outline"
  />
);

export default Example;
        `,
			},
		},
	},
};

export const FieryRedButton: Story = {
	args: {
		label: "Fiery Red Button",
		onClick: () => console.log("Fiery Red Button is clicked"),
		type: "fieryRed",
		isStorybook: true,
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseButton } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseButton
    label="Fiery Red Button"
    onClick={() => console.log("Fiery Red Button is clicked")}
    type="fieryRed"
  />
);

export default Example;
        `,
			},
		},
	},
};

export const DeepTealButton: Story = {
	args: {
		label: "Deep Teal Button",
		onClick: () => console.log("Deep Teal Button is clicked"),
		type: "deepTeal",
		isStorybook: true,
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseButton } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseButton
    label="Deep Teal Button"
    onClick={() => console.log("Deep Teal Button is clicked")}
    type="deepTeal"
  />
);

export default Example;
        `,
			},
		},
	},
};

export const ExtraWideButton: Story = {
	args: {
		label: "ExtraWide Button",
		onClick: () => console.log("ExtraWide Button is clicked"),
		type: "primary",
		size: "extraWide",
		isStorybook: true,
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseButton } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseButton
    label="ExtraWide Button"
    onClick={() => console.log("ExtraWide Button is clicked")}
    type="primary"
    size="extraWide"
  />
);

export default Example;
        `,
			},
		},
	},
};
