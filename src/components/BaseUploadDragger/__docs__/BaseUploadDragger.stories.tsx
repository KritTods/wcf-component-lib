import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import BaseUploadDragger from "..";
import { UploadFile } from "antd/es/upload/interface";

const meta: Meta<typeof BaseUploadDragger> = {
	title: "BaseComponent/Upload/BaseUploadDragger",
	component: BaseUploadDragger,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseUploadDragger>;

export const Default: Story = {
	render: () => {
		const handleFileChange = (files: UploadFile[]) => {
			console.log("Uploaded files:", files);
		};

		return (
			<div className="w-[400px]">
				<BaseUploadDragger
					uploadUrl="https://your-upload-api.com/upload"
					bearer="yourBearerToken"
					onChangeFunction={handleFileChange}
					antUploadText="Drag or click to upload files"
					antUploadHint="You can upload single or multiple files."
					multiple={true}
					maxCount={5}
				/>
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { UploadFile } from 'wcf-component-lib/node_modules/antd/es/upload/interface';
import { BaseUploadDragger } from 'wcf-component-lib/src/components';

const Example = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadFile[]>([]);

  const handleFileChange = (files: UploadFile[]) => {
    setUploadedFiles(files);
    console.log("Uploaded files:", files);
  };

  return (
    <div className="w-[400px]">
      <BaseUploadDragger
        uploadUrl="https://your-upload-api.com/upload"
        bearer="yourBearerToken"
        onChangeFunction={handleFileChange}
        antUploadText="Drag or click to upload files"
        antUploadHint="You can upload single or multiple files."
        multiple={true}
        maxCount={5}
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
