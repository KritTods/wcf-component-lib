import type { UploadFile, UploadProps } from "antd/es/upload/interface";
import InboxOutlined from "@ant-design/icons/InboxOutlined";
import message from "antd/es/message";
import Upload from "antd/es/upload";
import "./style.css";

interface BaseDraggerProps {
	multiple?: boolean;
	setFile?: (file: UploadFile) => void;
	setFileList?: (fileList: UploadFile[]) => void;
	successMessage?: string;
	errorMessage?: string;
}

const BaseDragger = (draggerProps: BaseDraggerProps) => {
	const {
		multiple = true,
		setFile,
		setFileList,
		successMessage,
		errorMessage,
	} = draggerProps;
	const { Dragger } = Upload;

	const props: UploadProps = {
		name: "file",
		multiple: multiple,
		onChange(info) {
			const { status } = info.file;
			let baseMessage = "";
			if (status !== "uploading") {
				console.log("hello welcome", info.file, info.fileList);
				if (setFile) setFile(info.file);
				if (setFileList) setFileList(info.fileList);
			}
			if (status === "done") {
				baseMessage = `${info.file.name} file uploaded successfully.`;
				message.success(successMessage ?? baseMessage);
			} else if (status === "error") {
				baseMessage = `${info.file.name} file upload failed.`;
				message.error(errorMessage ?? baseMessage);
			}
		},
		// onDrop(e) {
		// 	console.log("Dropped files", e.dataTransfer.files);
		// },
	};

	return (
		<Dragger {...props}>
			<p className="ant-upload-drag-icon">
				<InboxOutlined />
			</p>
			<div className="ant-upload-text w-full flex justify-center">
				<p className="w-fit border-2 border-red-300">ลากหรือคลิกเพื่ออัปโหลด</p>
			</div>
			<p className="ant-upload-hint">
				Support for a single or bulk upload. Strictly prohibited from uploading
				company data or other banned files.
			</p>
		</Dragger>
	);
};

export default BaseDragger;
