import BaseButton, { ButtonProps } from "../BaseButton";
import CloseCircleOutlined from "@ant-design/icons/lib/icons/CloseCircleOutlined";

import "./style.scss";

const BaseButtonDraft = (props: ButtonProps) => {
	return (
		<BaseButton
			{...props}
			icon={<CloseCircleOutlined />}
			label={"Draft"}
			className={`base-button-draft ${props.className}`}
		/>
	);
};

export default BaseButtonDraft;
