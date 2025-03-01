import BaseButton, { ButtonProps } from "../BaseButton";

import "./style.scss";
// import "../../scss/variable.scss";

const BaseButtonCancel = (props: ButtonProps) => {
	return (
		<BaseButton
			{...props}
			label={"ยกเลิก"}
			className={`base-button-cancel ${props.className}`}
		/>
	);
};

export default BaseButtonCancel;
