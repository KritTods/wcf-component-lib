import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import BasePreviewPicture from "..";
import { UploadFile } from "antd";

const meta: Meta<typeof BasePreviewPicture> = {
	title: "BaseComponent/BasePreviewPicture",
	component: BasePreviewPicture,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BasePreviewPicture>;

export const DefaultBasePreviewPicture: Story = {
	render: () => {
		const [files, setFiles] = useState<UploadFile[]>([
			{
				uid: "-1",
				name: "example.png",
				status: "done",
				url: "https://via.placeholder.com/150",
			},
		]);

		const handleFileChange = (newFiles: UploadFile[]) => {
			console.log("Updated files:", newFiles);
			setFiles(newFiles);
		};

		return (
			<BasePreviewPicture items={files} onChangeFunction={handleFileChange} />
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BasePreviewPicture } from 'wcf-component-lib/src/components/BasePreviewPicture';
import { UploadFile } from 'wcf-component-lib/node_modules/antd';

const Example = () => {
  const [files, setFiles] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "example.png",
      status: "done",
      url: "https://via.placeholder.com/150",
    },
  ]);

  const handleFileChange = (newFiles: UploadFile[]) => {
    console.log("Updated files:", newFiles);
    setFiles(newFiles);
  };

  return (
    <BasePreviewPicture
      items={files}
      onChangeFunction={handleFileChange}
    />
  );
};

export default Example;
        `,
			},
		},
	},
};

export const HiddenBasePreviewPicture: Story = {
	render: () => {
		const [files, setFiles] = useState<UploadFile[]>([]);

		const handleFileChange = (newFiles: UploadFile[]) => {
			console.log("Updated files:", newFiles);
			setFiles(newFiles);
		};

		return (
			<BasePreviewPicture
				items={files}
				onChangeFunction={handleFileChange}
				isHidden={true}
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BasePreviewPicture } from 'wcf-component-lib/src/components/BasePreviewPicture';
import { UploadFile } from 'wcf-component-lib/node_modules/antd';

const Example = () => {
  const [files, setFiles] = useState<UploadFile[]>([]);

  const handleFileChange = (newFiles: UploadFile[]) => {
    console.log("Updated files:", newFiles);
    setFiles(newFiles);
  };

  return (
    <BasePreviewPicture
      items={files}
      onChangeFunction={handleFileChange}
      isHidden={true} 
    />
  );
};

export default Example;
        `,
			},
		},
	},
};
