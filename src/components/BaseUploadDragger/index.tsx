import InboxOutlined from "@ant-design/icons/lib/icons/InboxOutlined";
import "./style.scss";
import Dragger from "antd/es/upload/Dragger";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
// import message from "antd/es/message";
import { FILE_TYPES } from "../../constants/file-types";
import BaseToastNotification from "../BaseToastNotification";
import { BaseToastNotificationMessage } from "../../constants/base-toast-notification";
// import Cookies from "js-cookie";

export interface BaseUploadDraggerProps {
	className?: string;
	disabled?: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChangeFunction: (files: UploadFile<any>[]) => void;
	antUploadDragIcon?: string | React.ReactNode;
	antUploadText?: string | React.ReactNode;
	antUploadHint?: string | React.ReactNode;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	// fileList?: UploadFile<any>[] | undefined;
	uploadUrl: string;
	bearer: string;
	subFolderPath?: string;
	multiple?: boolean;
	maxCount?: number;
	isHidden?: boolean;
	reset?: boolean;
	showUploadList?: boolean;
	// backgroundColor?: string;
	allowFileTypesToUpload?: FILE_TYPES[];
	originalFileName?: boolean;
	extraUrl?: string;
}

export default function BaseUploadDragger(props: BaseUploadDraggerProps) {
	const [fileList, setFileList] = useState<UploadFile[]>([]);
	const {
		className = "",
		onChangeFunction,
		disabled = false,
		antUploadDragIcon = <InboxOutlined className="" />,
		antUploadText = "ลากหรือคลิกเพื่ออัปโหลด",
		antUploadHint = (
			<>
				Strictly prohibit from uploading company data or other banned files.
				<br />
				Support for a single or bulk upload.
			</>
		),
		uploadUrl,
		bearer,
		subFolderPath = "",
		multiple = false,
		maxCount = 1,
		isHidden = false,
		reset = false,
		showUploadList = true,
		originalFileName = false,
		// backgroundColor = "#e3f5f2",
		// fileList = undefined,
		allowFileTypesToUpload = [],
		extraUrl = "",
	} = props;

	useEffect(() => {
		if (reset) {
			setFileList([]);
		}
	}, [reset]);

	const subFolder = encodeURIComponent(subFolderPath);

	// const beforeUpload: UploadProps["beforeUpload"] = (file) => {
	// 	const isPdf = file.type === "application/pdf";
	// 	console.log("🚀 ~ BaseUploadDragger ~ file:", file);
	// 	if (!isPdf) {
	// 		message.error("You can only upload PDF files!");
	// 	}
	// 	return isPdf;
	// };

	const isAbleToUpload = (type: string | undefined) => {
		// console.log("🚀 ~ isAbleToUpload ~ type:", type);
		if (_.isEmpty(allowFileTypesToUpload)) {
			return true;
		}
		const isAllow = _.includes(allowFileTypesToUpload, type);

		if (!isAllow) {
			BaseToastNotification({
				message: BaseToastNotificationMessage.ERROR,
				description: `You can only upload files of the following types: ${allowFileTypesToUpload.join(", ")}`,
				type: "error",
			});
		}
		return isAllow;
	};

	const uploadProps: UploadProps = {
		name: "file",
		showUploadList: showUploadList,
		multiple: multiple,
		maxCount: maxCount,
		disabled: disabled,
		action: `${uploadUrl}?subFolder=${subFolder}&${extraUrl}`,
		method: "POST", // HTTP method
		headers: {
			authorization: `Bearer ${bearer}`,
		},
		fileList: fileList,
		onChange(info) {
			// return false;
			/** สร้าง info ใหม่ เนื่องจากบางครั้งอาจทำให้เกิด error TypeError: Cannot add property status, object is not extensible */
			const newInfo = _.cloneDeep(info);
			const { status, response } = newInfo.file;
			if (status === "done") {
				BaseToastNotification({
					message: BaseToastNotificationMessage.SUCCESS,
					description: `${newInfo.file.name} file uploaded successfully.`,
					type: "success",
				});
				// message.success(`${newInfo.file.name} file uploaded successfully.`);

				const updatedFileList = newInfo.fileList.map((file) => {
					if (file.uid === newInfo.file.uid) {
						return {
							...file,
							name: originalFileName ? newInfo.file.name : response, // Replace the name with the one from the server
							url: URL.createObjectURL(file.originFileObj as Blob),
						};
					}
					return file;
				});
				setFileList(updatedFileList);
				onChangeFunction(updatedFileList);
			} else if (status === "error") {
				// message.error(`${newInfo.file.name} file upload failed.`);
				BaseToastNotification({
					message: BaseToastNotificationMessage.ERROR,
					description: `${newInfo.file.name} file upload failed.`,
					type: "error",
				});
			} else {
				setFileList(newInfo.fileList);
				// onChangeFunction(newInfo.fileList);
			}
		},

		beforeUpload(file: RcFile) {
			return isAbleToUpload(file.type);
		},

		onRemove() {},

		// onDrop(e) {
		// 	console.log("Dropped files", e.dataTransfer.files);
		// },
	};

	return (
		<>
			{/* <style>{`
				.base-upload-dragger-hospital .ant-upload.ant-upload-drag {background-color: ${backgroundColor};}
			`}</style> */}
			<div className={`${isHidden && "hidden"}`}>
				<Dragger
					className={`${className} base-upload-dragger-wcf`}
					{...uploadProps}
				>
					<p className="ant-upload-drag-icon">{antUploadDragIcon}</p>
					<p className="ant-upload-text">{antUploadText}</p>
					<p className="ant-upload-hint">{antUploadHint}</p>
				</Dragger>
			</div>
		</>
	);
}
