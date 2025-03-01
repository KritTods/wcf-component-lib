import BaseButton, { ButtonProps } from "../BaseButton";
import SaveOutlined from "@ant-design/icons/lib/icons/SaveOutlined";

import "./style.scss";

const BaseButtonSave = (props: ButtonProps) => {
	return (
		<BaseButton
			{...props}
			icon={props.icon ? props.icon : <SaveOutlined />}
			label={"บันทึก"}
			iconPosition="start"
			className={`base-button-save ${props.className}`}
		/>
	);
};

export default BaseButtonSave;
