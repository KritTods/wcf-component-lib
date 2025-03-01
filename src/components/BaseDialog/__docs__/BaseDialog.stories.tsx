import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Button from "antd/es/button";
import BaseDialog from "../index";
import { CheckCircleOutlined } from "@ant-design/icons";

const meta: Meta<typeof BaseDialog> = {
	title: "BaseComponent/dialog/BaseDialog",
	component: BaseDialog,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		headerText: { control: "text" },
		baseDialogType: {
			options: [
				"blank",
				"delete",
				"edit",
				"deleteV2",
				"print",
				"save",
				"SUCCESS",
				"DANGER",
			],
			control: { type: "radio" },
		},
		themeIcon: {
			options: ["default", "danger", "warning", "success", "info"],
			control: { type: "radio" },
		},
		iconBackgroundColor: { control: "text" },
		iconColor: { control: "text" },
		showCancel: { control: "boolean" },
		labelConfirm: { control: "text" },
		labelCancel: { control: "text" },
	},
};

export default meta;
type Story = StoryObj<typeof BaseDialog>;

export const DefaultDialog: Story = {
	args: {
		headerText: "",
		showCancel: false,
		labelConfirm: "ตกลง",
		labelCancel: "ยกเลิก",
		baseDialogType: undefined,
		themeIcon: undefined,
		iconColor: "",
		iconBackgroundColor: "",
	},
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);
		const handleConfirm = (): void => {
			console.log("Confirmed");
			setIsOpen(false);
		};

		const handleCancel = (): void => {
			console.log("Cancelled");
			setIsOpen(false);
		};

		return (
			<div>
				<Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
				<BaseDialog
					{...args}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					content={<div>Content goes here</div>}
					onConfirm={handleConfirm}
					onCancel={handleCancel}
				/>
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseDialog } from 'wcf-component-lib/src/components';
import { Button } from 'wcf-component-lib/node_modules/antd';

const DialogExample = () => {
const [isOpen, setIsOpen] = useState(false);
const handleConfirm = (): void => {
console.log('Confirmed');
setIsOpen(false);
};

const handleCancel = (): void => {
console.log('Cancelled');
setIsOpen(false);
};

return (
<div>
  <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
  <BaseDialog
	isOpen={isOpen}
	setIsOpen={setIsOpen}
	content={<div>Content goes here</div>}
	onConfirm={handleConfirm}
	onCancel={handleCancel}
  />
</div>
);
};

export default DialogExample;
	`,
			},
		},
	},
};

export const DialogWithIcon: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);
		const handleConfirm = (): void => {
			console.log("Confirmed");
			setIsOpen(false);
		};

		const handleCancel = (): void => {
			console.log("Cancelled");
			setIsOpen(false);
		};

		return (
			<div>
				<Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
				<BaseDialog
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					content={<div>Content goes here</div>}
					onConfirm={handleConfirm}
					onCancel={handleCancel}
					headerLeftIcon={
						<CheckCircleOutlined
							className="p-3"
							style={{
								fontSize: "30px",
								backgroundColor: "#ededed",
								borderRadius: "99%",
							}}
						/>
					}
				/>
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseDialog } from 'wcf-component-lib/src/components';
import { Button } from 'wcf-component-lib/node_modules/antd';

const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleConfirm = (): void => {
    console.log('Confirmed');
    setIsOpen(false);
  };

  const handleCancel = (): void => {
    console.log('Cancelled');
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <BaseDialog
		isOpen={isOpen}
		setIsOpen={setIsOpen}
		content={<div>Content goes here</div>}
		onConfirm={handleConfirm}
		onCancel={handleCancel}
		headerLeftIcon={
			<CheckCircleOutlined
				className="p-3"
				style={{
					fontSize: "30px",
					backgroundColor: "#ededed",
					borderRadius: "99%",
				}}
			/>
		}
	  />
    </div>
  );
};

export default DialogExample;
        `,
			},
		},
	},
};

export const DialogWithCancelButton: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);
		const handleConfirm = (): void => {
			console.log("Confirmed");
			setIsOpen(false);
		};

		const handleCancel = (): void => {
			console.log("Cancelled");
			setIsOpen(false);
		};

		return (
			<div>
				<Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
				<BaseDialog
					isOpen={isOpen}
					showCancel={true}
					setIsOpen={setIsOpen}
					content={<div>Content goes here</div>}
					onConfirm={handleConfirm}
					onCancel={handleCancel}
				/>
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseDialog } from 'wcf-component-lib/src/components';
import { Button } from 'wcf-component-lib/node_modules/antd';

const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleConfirm = (): void => {
    console.log('Confirmed');
    setIsOpen(false);
  };

  const handleCancel = (): void => {
    console.log('Cancelled');
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <BaseDialog
		isOpen={isOpen}
		showCancel={true}
		setIsOpen={setIsOpen}
		content={<div>Content goes here</div>}
		onConfirm={handleConfirm}
		onCancel={handleCancel}
	  />
    </div>
  );
};

export default DialogExample;
        `,
			},
		},
	},
};

export const DialogWithByDialogType: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);
		const handleConfirm = (): void => {
			console.log("Confirmed");
			setIsOpen(false);
		};

		const handleCancel = (): void => {
			console.log("Cancelled");
			setIsOpen(false);
		};

		return (
			<div>
				<Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
				<BaseDialog
					baseDialogType="blank"
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					content={<div>Content goes here</div>}
					onConfirm={handleConfirm}
					onCancel={handleCancel}
				/>
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseDialog } from 'wcf-component-lib/src/components';
import { Button } from 'wcf-component-lib/node_modules/antd';

const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleConfirm = (): void => {
    console.log('Confirmed');
    setIsOpen(false);
  };

  const handleCancel = (): void => {
    console.log('Cancelled');
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <BaseDialog
		baseDialogType="blank"
		isOpen={isOpen}
		setIsOpen={setIsOpen}
		content={<div>Content goes here</div>}
		onConfirm={handleConfirm}
		onCancel={handleCancel}
	  />
    </div>
  );
};

export default DialogExample;
        `,
			},
		},
	},
};
