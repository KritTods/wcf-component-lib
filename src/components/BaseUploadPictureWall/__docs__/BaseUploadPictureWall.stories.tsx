import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import BaseUploadPictureWall from "..";
import { UploadFile } from "antd/es/upload/interface";
import BaseIcon from "../../BaseIcon";

const meta: Meta<typeof BaseUploadPictureWall> = {
	title: "BaseComponent/Upload/BaseUploadPictureWall",
	component: BaseUploadPictureWall,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseUploadPictureWall>;

export const Default: Story = {
	render: () => {
		const handleFileChange = (files: UploadFile[]) => {
			console.log("Uploaded files:", files);
		};

		return (
			<div className="w-[400px]">
				<BaseUploadPictureWall
					uploadUrl="https://your-upload-api.com/upload"
					bearer="yourBearerToken"
					onChangeFunction={handleFileChange}
					antUploadDragIcon={
						<BaseIcon
							name="cloudUpload"
							size="35px"
							classNameColor={{ base: "#1C4651" }}
						/>
					}
					antUploadDragText="ลากหรือคลิกเพื่ออัปโหลด"
					antUploadDragHint={
						<>
							สามารถแนบไฟล์ได้เฉพาะไฟล์ที่มีนามสกุล PDF, JPG หรือ PNG
							<br />
							ขนาดไม่เกิน 5MB เท่านั้น
						</>
					}
					antUploadWallIcon={
						<BaseIcon
							name="cloudUpload"
							size="35px"
							classNameColor={{ base: "#1C4651" }}
						/>
					}
					antUploadWallText="อัพโหลดไฟล์"
					emptyUploadText="ยังไม่มีไฟล์เอกสารที่อัพโหลด"
					showPreviewWallIcon={true}
					showRemoveWallIcon={true}
					multiple={true}
					maxCount={10}
				/>
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseUploadPictureWall } from 'wcf-component-lib/src/components';
import { UploadFile } from 'wcf-component-lib/node_modules/antd/es/upload/interface';

const Example = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadFile[]>([]);

  const handleFileChange = (files: UploadFile[]) => {
    setUploadedFiles(files);
    console.log("Uploaded files:", files);
  };

  return (
    <div className="w-[400px]">
      <BaseUploadPictureWall
        uploadUrl="https://your-upload-api.com/upload"
        bearer="yourBearerToken"
		onChangeFunction={handleFileChange}
		antUploadDragIcon={
			<BaseIcon
				name="cloudUpload"
				size="35px"
				classNameColor={{ base: "#1C4651" }}
			/>
		}
		antUploadDragText="ลากหรือคลิกเพื่ออัปโหลด"
		antUploadDragHint={
			<>
				สามารถแนบไฟล์ได้เฉพาะไฟล์ที่มีนามสกุล PDF, JPG หรือ PNG
				<br />
				ขนาดไม่เกิน 5MB เท่านั้น
			</>
		}
		antUploadWallIcon={
			<BaseIcon
				name="cloudUpload"
				size="35px"
				classNameColor={{ base: "#1C4651" }}
			/>
		}
		antUploadWallText="อัพโหลดไฟล์"
		emptyUploadText="ยังไม่มีไฟล์เอกสารที่อัพโหลด"
		showPreviewWallIcon={true}
		showRemoveWallIcon={true}
		maximumUploadWallFiles={10}
		multiple={true}
		maxCount={10}
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
