import "./style.scss";
import { useEffect, useState } from "react";
import { GetProp, Upload, UploadProps, Image } from "antd";
import Icon, { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import Dragger from "antd/es/upload/Dragger";
import BaseToastNotification from "../BaseToastNotification";
import { BaseToastNotificationMessage } from "../../constants/base-toast-notification";
import _ from "lodash";
import { FILE_TYPES } from "../../constants/file-types";
import { RcFile, UploadChangeParam, UploadFile } from "antd/es/upload";
import BaseIcon from "../BaseIcon";
import React from "react";

export interface BaseUploadPictureWallProps {
	className?: string;
	disabled?: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChangeFunction: (files: UploadFile<any>[]) => void;
	antUploadDragIcon?: string | React.ReactNode;
	antUploadDragHint?: string | React.ReactNode;
	antUploadDragText?: string | React.ReactNode;
	antUploadWallIcon?: string | React.ReactNode;
	antUploadWallText?: string | React.ReactNode;
	emptyUploadText?: string | React.ReactNode;
	emptyUploadHint?: string | React.ReactNode;
	uploadUrl: string;
	bearer: string;
	subFolderPath?: string;
	multiple?: boolean;
	maxCount?: number;
	maximumUploadWallFiles?: number;
	reset?: boolean;
	showUploadList?: boolean;
	allowFileTypesToUpload?: FILE_TYPES[];
	extraUrl?: string;
	showPreviewWallIcon?: boolean;
	showRemoveWallIcon?: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	fileList?: UploadFile<any>[];
}

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = (error) => reject(error);
	});

export default function BaseUploadPictureWall({
	className = "",
	disabled = false,
	antUploadDragIcon = (
		<BaseIcon
			name="cloudUpload"
			size="35px"
			classNameColor={{ base: "#1C4651" }}
		/>
	),
	antUploadDragText = "ลากหรือคลิกเพื่ออัปโหลด",
	antUploadDragHint = (
		<>
			สามารถแนบไฟล์ได้เฉพาะไฟล์ที่มีนามสกุล PDF, JPG หรือ PNG
			<br />
			ขนาดไม่เกิน 5MB เท่านั้น
		</>
	),
	antUploadWallIcon = (
		<BaseIcon
			name="cloudUpload"
			size="35px"
			classNameColor={{ base: "#1C4651" }}
		/>
	),
	antUploadWallText = "อัพโหลดไฟล์",
	emptyUploadText = "ยังไม่มีไฟล์เอกสารที่อัพโหลด",
	emptyUploadHint,
	uploadUrl,
	bearer,
	subFolderPath = "",
	multiple = false,
	maxCount = 1,
	maximumUploadWallFiles = 10,
	reset = false,
	showUploadList = false,
	allowFileTypesToUpload = [],
	extraUrl = "",
	showPreviewWallIcon = true,
	showRemoveWallIcon = true,
	fileList: serverFilesList = [],
	onChangeFunction,
}: BaseUploadPictureWallProps) {
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState("");
	const [fileList, setFileList] = useState<UploadFile[]>(serverFilesList ?? []);
	const [isHidden, setIsHidden] = useState<boolean>(false);

	useEffect(() => {
		if (reset) {
			setFileList([]);
		}
	}, [reset]);

	useEffect(() => {
		if (fileList.length === 0) {
			setIsHidden(false);
		} else {
			setIsHidden(true);
		}
	}, [fileList]);

	const subFolder = encodeURIComponent(subFolderPath);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const uploadInfoValidate = (values: UploadChangeParam<UploadFile<any>>) => {
		const newInfo = _.cloneDeep(values);
		const { status } = newInfo.file;
		if (status === "done") {
			BaseToastNotification({
				message: BaseToastNotificationMessage.SUCCESS,
				description: `${newInfo.file.name} file uploaded successfully.`,
				type: "success",
			});
			const updatedFileList = newInfo.fileList.map((file) => {
				if (file.uid === newInfo.file.uid) {
					return {
						...file,
						name: newInfo.file.name,
						url: URL.createObjectURL(file.originFileObj as Blob),
					};
				}
				return file;
			});
			setFileList(updatedFileList);
			onChangeFunction(updatedFileList);
		} else if (status === "error") {
			BaseToastNotification({
				message: BaseToastNotificationMessage.ERROR,
				description: `${newInfo.file.name} file upload failed.`,
				type: "error",
			});
		} else {
			setFileList(newInfo.fileList);
		}
	};

	const handleDownload = (file: UploadFile) => {
		const url = file.url;

		if (url) {
			const a = document.createElement("a");
			a.href = url;
			a.download = file.uid;
			a.click();
		}
	};

	const handlePreview = async (file: UploadFile) => {
		if (file.type === FILE_TYPES.JPEG || file.type === FILE_TYPES.PNG) {
			if (!file.url && !file.preview) {
				file.preview = await getBase64(file.originFileObj as FileType);
			}

			setPreviewImage(file.url || (file.preview as string));
			setPreviewOpen(true);
		} else {
			handleDownload(file);
		}
	};

	const handleChange: UploadProps["onChange"] = (info) => {
		uploadInfoValidate(info);
	};

	const uploadButton = (
		<button type="button" className="text-[#1C4651] gap-2">
			{antUploadWallIcon}
			<div className="font-semibold">{antUploadWallText}</div>
		</button>
	);

	const isAbleToUpload = (type: string | undefined) => {
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
		accept: allowFileTypesToUpload.join(", "),
		maxCount: maxCount,
		disabled: disabled,
		action: `${uploadUrl}?subFolder=${subFolder}&${extraUrl}`,
		method: "POST",
		headers: {
			authorization: `Bearer ${bearer}`,
		},
		fileList: fileList,
		onChange(info) {
			uploadInfoValidate(info);
		},
		beforeUpload(file: RcFile) {
			return isAbleToUpload(file.type);
		},
		onRemove() {},
	};

	const shortenFileName = (fileName: string) => {
		if (fileName.length > 8) {
			const parts = fileName.split(".");
			const baseName = fileName.substring(0, 8);
			const lastPart = parts[0].slice(-3);
			const extension = fileName.split(".").pop();

			return `${baseName}...${lastPart}.${extension}`;
		}

		return fileName;
	};
	const getTypeFiles = (type?: string): boolean => {
		if (type === FILE_TYPES.JPEG || type === FILE_TYPES.PNG) {
			return true;
		} else {
			return false;
		}
	};

	const itemRender = (
		_originNode: React.ReactElement,
		file: UploadFile,
		_fileList: UploadFile[],
		actions: {
			download: () => void;
			preview: () => void;
			remove: () => void;
		},
	) => {
		return (
			<>
				<div className="custom-file-item">
					<div className="bg-white rounded-sm p-3">
						{getTypeFiles(file.type) ? (
							<Image width={75} height={75} src={file.url} />
						) : (
							<div className="image-file">
								<BaseIcon
									name="multiplePage"
									size="35px"
									classNameColor={{ base: "#1C4651" }}
								/>
							</div>
						)}
					</div>
					<div className="file-icons-overlay flex flex-row gap-1">
						{showPreviewWallIcon && (
							<Icon
								component={() => <EyeOutlined />}
								onClick={() => actions.preview()}
							/>
						)}

						{showRemoveWallIcon && (
							<Icon
								component={() => <DeleteOutlined />}
								onClick={() => actions.remove()}
							/>
						)}
					</div>
				</div>
				<a
					href={file.url}
					target="_blank"
					rel="noreferrer"
					className="underline decoration-[#1A6CA8] hover:no-underline"
				>
					<p className="text-xs text-[#1A6CA8] text-ellipsis whitespace-nowrap line-clamp-1">
						{shortenFileName(file.name)}
					</p>
				</a>
			</>
		);
	};

	return (
		<div className={` ${className}`}>
			{maximumUploadWallFiles === 0 ? (
				<div className={`base-empty-files ${className}`}>
					<p className="empty-upload-drag-icon">{antUploadDragIcon}</p>
					<p className="empty-upload-text">{emptyUploadText}</p>
					{emptyUploadHint && (
						<p className="empty-upload-hint">{antUploadDragHint}</p>
					)}
				</div>
			) : (
				<>
					<div className={`${isHidden && "hidden"}`}>
						<Dragger
							className={`base-upload-dragger-custom-wcf ${className}`}
							{...uploadProps}
						>
							<p className="ant-upload-drag-icon">{antUploadDragIcon}</p>
							<p className="ant-upload-text">{antUploadDragText}</p>
							<p className="ant-upload-hint">{antUploadDragHint}</p>
						</Dragger>
					</div>
					{fileList.length > 0 && (
						<div className={`base-ant-upload-wall style1 ${className}`}>
							<Upload
								className={`base-ant-upload-wall ${className}`}
								action={uploadUrl}
								listType="picture-card"
								fileList={fileList}
								onPreview={handlePreview}
								rootClassName=" border-3"
								onChange={handleChange}
								itemRender={itemRender}
								showUploadList={{
									showDownloadIcon: false,
									showPreviewIcon: showPreviewWallIcon,
									showRemoveIcon: showRemoveWallIcon,
								}}
								accept={allowFileTypesToUpload.join(", ")}
							>
								{fileList.length >= maximumUploadWallFiles
									? null
									: uploadButton}
							</Upload>

							{previewImage && (
								<div>
									<Image
										wrapperStyle={{ display: "none" }}
										preview={{
											visible: previewOpen,
											onVisibleChange: (visible) => setPreviewOpen(visible),
											afterOpenChange: (visible) =>
												!visible && setPreviewImage(""),
										}}
										src={previewImage}
									/>
								</div>
							)}
						</div>
					)}
				</>
			)}
		</div>
	);
}
