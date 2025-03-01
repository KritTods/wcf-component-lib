import "./style.scss";
import InboxOutlined from "@ant-design/icons/lib/icons/InboxOutlined";
import BaseUploadDragger, {
	BaseUploadDraggerProps,
} from "../BaseUploadDragger";

export default function BaseUploadDraggerHospital(
	props: BaseUploadDraggerProps,
) {
	const { onChangeFunction } = props;
	return (
		<>
			<BaseUploadDragger
				{...props}
				onChangeFunction={onChangeFunction}
				className={`base-upload-dragger-hospital ${props.className}`}
				antUploadDragIcon={<InboxOutlined className="" />}
				antUploadText="ลากหรือคลิกเพื่ออัปโหลด"
				antUploadHint={
					<>
						Strictly prohibit from uploading company data or other band files.
						<br />
						Support for a single or bulk upload.
					</>
				}
			/>
		</>
	);
}
