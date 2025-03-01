import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import BaseUploadDraggerHospital from "..";
import { UploadFile } from "antd/es/upload/interface";

const meta: Meta<typeof BaseUploadDraggerHospital> = {
	title: "BaseComponent/Upload/BaseUploadDraggerHospital",
	component: BaseUploadDraggerHospital,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseUploadDraggerHospital>;

export const Default: Story = {
	render: () => {
		const handleFileChange = (files: UploadFile[]) => {
			console.log("Uploaded files:", files);
		};

		return (
			<div className="w-[400px]">
				<BaseUploadDraggerHospital
					uploadUrl="https://your-upload-api.com/upload"
					bearer="yourBearerToken"
					onChangeFunction={handleFileChange}
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
import { BaseUploadDraggerHospital } from 'wcf-component-lib/src/components';
import { UploadFile } from 'wcf-component-lib/node_modules/antd/es/upload/interface';

const Example = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadFile[]>([]);

  const handleFileChange = (files: UploadFile[]) => {
    setUploadedFiles(files);
    console.log("Uploaded files:", files);
  };

  return (
    <div className="w-[400px]">
      <BaseUploadDraggerHospital
        uploadUrl="https://your-upload-api.com/upload"
        bearer="yourBearerToken"
        onChangeFunction={handleFileChange}
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
