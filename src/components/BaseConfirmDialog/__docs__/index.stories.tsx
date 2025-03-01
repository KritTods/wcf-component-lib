import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import BaseConfirmDialog from "..";

const meta: Meta<typeof BaseConfirmDialog> = {
	title: "BaseComponent/Dialog/BaseConfirmDialog",
	component: BaseConfirmDialog,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		labelSubmit: { control: "text" },
		labelCancel: { control: "text" },
		isDelete: { control: "boolean" },
		type: {
			options: ["blank", "delete", "edit", "deleteV2", "print", "save"],
			control: { type: "radio" },
		},
		themeIcon: {
			options: ["default", "danger", "warning", "success", "info"],
			control: { type: "radio" },
		},
		iconBackgroundColor: { control: "text" },
		iconColor: { control: "text" },
	},
};

export default meta;
type Story = StoryObj<typeof BaseConfirmDialog>;

export const DefaultConfirmDialog: Story = {
	args: {
		type: "blank",
		themeIcon: "default",
		bodyHeaderText: "ต้องการบันทึกข้อมูลใช่หรือไม่?",
		bodyDescriptionText: "กรุณายืนยันการทำรายการอีกครั้ง",
		labelSubmit: "ยืนยัน",
		labelCancel: "ยกเลิก",
		isDelete: false,
		iconColor: "",
		iconBackgroundColor: "",
	},
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);

		const handleConfirm = () => {
			console.log("Confirmed");
			setIsOpen(false);
		};

		const handleCancel = () => {
			console.log("Cancelled");
			setIsOpen(false);
		};

		const handleClose = () => {
			console.log("Closed");
			setIsOpen(false);
		};

		return (
			<div>
				<button onClick={() => setIsOpen(true)}>Open Confirm Dialog</button>
				<BaseConfirmDialog
					{...args}
					isOpen={isOpen}
					confirmFunction={handleConfirm}
					cancelFunction={handleCancel}
					closeFunction={handleClose}
				/>
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseConfirmDialog } from 'wcf-component-lib/src/components';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    console.log("Confirmed");
    setIsOpen(false);
  };

  const handleCancel = () => {
    console.log("Cancelled");
    setIsOpen(false);
  };

  const handleClose = () => {
    console.log("Closed");
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Confirm Dialog</button>
      <BaseConfirmDialog
        isOpen={isOpen}
        confirmFunction={handleConfirm}
        cancelFunction={handleCancel}
        closeFunction={handleClose}
      />
    </div>
  );
};

export default Example;
        `,
			},
		},
	},
};

export const DeleteConfirmDialog: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);

		const handleConfirm = () => {
			console.log("Deleted");
			setIsOpen(false);
		};

		const handleCancel = () => {
			console.log("Cancelled");
			setIsOpen(false);
		};

		const handleClose = () => {
			console.log("Closed");
			setIsOpen(false);
		};

		return (
			<div>
				<button onClick={() => setIsOpen(true)}>Open Delete Dialog</button>
				<BaseConfirmDialog
					isOpen={isOpen}
					confirmFunction={handleConfirm}
					cancelFunction={handleCancel}
					closeFunction={handleClose}
					isDelete={true}
					labelConfirm="Delete this data"
				/>
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseConfirmDialog } from 'wcf-component-lib/src/components';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    console.log("Deleted");
    setIsOpen(false);
  };

  const handleCancel = () => {
    console.log("Cancelled");
    setIsOpen(false);
  };

  const handleClose = () => {
    console.log("Closed");
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Delete Dialog</button>
      <BaseConfirmDialog
        isOpen={isOpen}
        confirmFunction={handleConfirm}
        cancelFunction={handleCancel}
        closeFunction={handleClose}
        isDelete={true}
        labelConfirm="Delete this data"
      />
    </div>
  );
};

export default Example;
        `,
			},
		},
	},
};
