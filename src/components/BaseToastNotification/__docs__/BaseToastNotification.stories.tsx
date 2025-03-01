import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import BaseToastNotification, { BaseToastNotificationProps } from "..";

const meta: Meta<typeof BaseToastNotification> = {
	title: "BaseComponent/BaseToastNotification",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		message: { control: "text" },
		type: {
			options: ["success", "info", "warning", "error"],
			control: { type: "radio" },
		},
		description: { control: "text" },
		duration: { control: "number" },
		pauseOnHover: { control: "boolean" },
	},
};

export default meta;
type Story = StoryObj<BaseToastNotificationProps>;
export const Success: Story = {
	args: {
		message: "สำเร็จ",
		type: "success",
		description: "This is a success message.",
		duration: 3,
		pauseOnHover: true,
		onClick: () => console.log("close"),
		onClose: () => console.log("close"),
	},
	render: (args) => {
		const { type, description } = args;
		return (
			<div>
				<button
					onClick={() => {
						BaseToastNotification({ ...args, description });
					}}
				>
					Show {type} Toast
				</button>
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseToastNotification } from 'wcf-component-lib/src/components';

const Example = () => (
  <div>
    <button
      onClick={() => {
        BaseToastNotification({
            type: "success",
            description: "This is a success message.",
        });
      }}
    >
      Show Success Toast
    </button>
  </div>
);

export default Example;
        `,
			},
		},
	},
};

export const ErrorToast: Story = {
	render: () => {
		return (
			<div>
				<button
					onClick={() => {
						BaseToastNotification({
							type: "error",
							description: "This is an error message.",
						});
					}}
				>
					Show Error Toast
				</button>
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseToastNotification } from 'wcf-component-lib/src/components';

const Example = () => (
  <div>
    <button
      onClick={() => {
        BaseToastNotification({
            type: "error",
            description: "This is an error message.",
        });
      }}
    >
      Show Error Toast
    </button>
  </div>
);

export default Example;
        `,
			},
		},
	},
};

export const InfoToast: Story = {
	render: () => {
		return (
			<div>
				<button
					onClick={() => {
						BaseToastNotification({
							type: "info",
							description: "This is an info message.",
						});
					}}
				>
					Show Info Toast
				</button>
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseToastNotification } from 'wcf-component-lib/src/components';

const Example = () => (
  <div>
    <button
      onClick={() => {
        BaseToastNotification({
			type: "info",
			description: "This is a info message.",
		});
      }}
    >
      Show Info Toast
    </button>
  </div>
);

export default Example;
        `,
			},
		},
	},
};

export const WarningToast: Story = {
	render: () => {
		return (
			<div>
				<button
					onClick={() => {
						BaseToastNotification({
							type: "warning",
							description: "This is a warning message.",
						});
					}}
				>
					Show Warning Toast
				</button>
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseToastNotification } from 'wcf-component-lib/src/components';

const Example = () => (
  <div>
    <button
      onClick={() => {
        BaseToastNotification({
			type: "warning",
			description: "This is a warning message.",
		});
      }}
    >
      Show Warning Toast
    </button>
  </div>
);

export default Example;
        `,
			},
		},
	},
};
