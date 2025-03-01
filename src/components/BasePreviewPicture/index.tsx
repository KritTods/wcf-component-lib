import { useEffect, useState } from "react";
import _ from "lodash";
// import FilePdfOutlined from "@ant-design/icons/lib/icons/FilePdfOutlined";
import FileImageOutlined from "@ant-design/icons/lib/icons/FileImageOutlined";
import "./style.scss";
import { UploadFile } from "antd/es/upload/interface";
import Upload from "antd/es/upload/Upload";
interface BasePreviewPictureProps {
	items?: UploadFile[];
	onChangeFunction: (files: UploadFile[]) => void;
	className?: string;
	isHidden?: boolean;
	subFolderPath?: string;
}

const BasePreviewPicture = (props: BasePreviewPictureProps) => {
	const {
		items = [],
		onChangeFunction,
		className = "",
		isHidden = false,
		subFolderPath = "",
	} = props;
	const [fileList, setFileList] = useState<UploadFile[]>(items);

	const handleChange = (newFileList: UploadFile[]) => {
		const clonedNewFileList = newFileList.map((file) => ({
			...file,
			thumbUrl: file.thumbUrl || "",
			url: "",
			// preview: "",
		}));
		// console.log("🚀 ~ handleChange ~ clonedNewFileList:", clonedNewFileList);
		setFileList(clonedNewFileList);
		onChangeFunction(clonedNewFileList);
	};

	useEffect(() => {
		if (!_.isEqual(items, fileList)) {
			const newFileList = items.map((file) => ({
				...file,
				thumbUrl: file.thumbUrl || "",
				// preview: "",
				url: "",
			}));
			setFileList(newFileList);
			// console.log("🚀 ~ handleChange ~ clonedNewFileList:", items);
		}
	}, [items]);

	const iconRender = (file: UploadFile) => {
		// console.log("🚀 ~ iconRender ~ file:", file);
		if (file.type === "application/pdf" || file.type === "pdf") {
			return (
				<img
					src={"https://minio-wcf.soilfish.co/wcf2-public/icons/pdf-icon.svg"}
				/>
			);
			// return <FilePdfOutlined style={{ color: "red", fontSize: "24px" }} />;
		}
		if ((file.type && file.type.startsWith("image/")) || file.type === "png") {
			return <FileImageOutlined style={{ color: "green", fontSize: "24px" }} />;
		}
		return <FileImageOutlined style={{ color: "blue", fontSize: "24px" }} />;
	};

	const handlePreview = (file: UploadFile) => {
		// console.log("🚀 ~ handlePreview ~ file:", file);
		const imageUrl = !_.isEmpty(subFolderPath)
			? `https://minio-wcf.soilfish.co/wcf2-public/${subFolderPath}/${file.name}`
			: !_.isEmpty(file.url)
				? file.url
				: URL.createObjectURL(file.originFileObj as Blob);
		window.open(imageUrl, "_blank");
	};

	// const beforeUpload: UploadProps["beforeUpload"] = (file) => {
	// 	const isPdf = file.type === "application/pdf";
	// 	if (!isPdf) {
	// 		message.error("You can only upload PDF files!");
	// 	}
	// 	return isPdf;
	// };

	return (
		<div className={`${isHidden && "hidden"}`}>
			<Upload
				// showUploadList={true}
				showUploadList={{ showPreviewIcon: true, showRemoveIcon: true }}
				className={`base-antd-preview ${className}`}
				fileList={fileList}
				onChange={({ fileList: newFileList }) => handleChange(newFileList)}
				listType="picture"
				iconRender={iconRender}
				onPreview={handlePreview}
				// beforeUpload={beforeUpload}
			/>
		</div>
	);
};

export default BasePreviewPicture;
