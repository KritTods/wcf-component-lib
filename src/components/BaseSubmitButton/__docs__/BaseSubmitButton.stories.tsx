import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import BaseSubmitButton from "../BaseSubmitButton";
import { SaveOutlined } from "@ant-design/icons";

const meta: Meta<typeof BaseSubmitButton> = {
	title: "BaseComponent/Button/BaseSubmitButton",
	component: BaseSubmitButton,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		label: { control: "text" },
		type: {
			options: ["primary", "outlined", "cancel", "delete", "warning", "danger"],
			control: { type: "radio" },
		},
	},
};

export default meta;
type Story = StoryObj<typeof BaseSubmitButton>;

export const DefaultButton: Story = {
	args: {
		label: "Submit",
		type: "primary",
		onClickFunction: () => alert("Submit clicked"),
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseSubmitButton } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseSubmitButton
    label="Submit"
    type="primary"
    onClickFunction={() => alert("Submit clicked")}
  />
);

export default Example;
        `,
			},
		},
	},
};

export const OutlinedButton: Story = {
	args: {
		label: "Outlined",
		type: "outlined",
		onClickFunction: () => alert("clicked"),
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseSubmitButton } from 'wcf-component-lib/src/components';
import { CloseOutlined } from '@ant-design/icons';

const Example = () => (
  <BaseSubmitButton
    label="Outlined"
    type="outlined"
    onClickFunction={() => alert("clicked")}
  />
);

export default Example;
        `,
			},
		},
	},
};

export const CancelButton: Story = {
	args: {
		label: "Cancel",
		type: "cancel",
		onClickFunction: () => alert("Cancel clicked"),
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseSubmitButton } from 'wcf-component-lib/src/components';
import { CloseOutlined } from '@ant-design/icons';

const Example = () => (
  <BaseSubmitButton
    label="Cancel"
    type="default"
    onClickFunction={() => alert("Cancel clicked")}
  />
);

export default Example;
        `,
			},
		},
	},
};

export const DeleteButton: Story = {
	args: {
		label: "Delete",
		type: "delete",
		onClickFunction: () => alert("Delete clicked"),
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseSubmitButton } from 'wcf-component-lib/src/components';
import { CloseOutlined } from '@ant-design/icons';

const Example = () => (
  <BaseSubmitButton
    label="Delete"
    type="delete"
    onClickFunction={() => alert("Delete clicked")}
  />
);

export default Example;
        `,
			},
		},
	},
};

export const WarningButton: Story = {
	args: {
		label: "Warning",
		type: "warning",
		onClickFunction: () => alert("Warning clicked"),
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseSubmitButton } from 'wcf-component-lib/src/components';
import { CloseOutlined } from '@ant-design/icons';

const Example = () => (
  <BaseSubmitButton
    label="Warning"
    type="warning"
    onClickFunction={() => alert("Warning clicked")}
  />
);

export default Example;
        `,
			},
		},
	},
};

export const DangerButton: Story = {
	args: {
		label: "Danger",
		type: "danger",
		onClickFunction: () => alert("Danger clicked"),
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseSubmitButton } from 'wcf-component-lib/src/components';
import { CloseOutlined } from '@ant-design/icons';

const Example = () => (
  <BaseSubmitButton
    label="Danger"
    type="danger"
    onClickFunction={() => alert("Danger clicked")}
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
		label: "Save",
		type: "primary",
		icon: <SaveOutlined />,
		onClickFunction: () => alert("Save clicked"),
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseSubmitButton } from 'wcf-component-lib/src/components';
import { SaveOutlined } from '@ant-design/icons';

const Example = () => (
  <BaseSubmitButton
    label="Save"
    type="primary"
    icon={<SaveOutlined />}
    onClickFunction={() => alert("Save clicked")}
  />
);

export default Example;
        `,
			},
		},
	},
};
