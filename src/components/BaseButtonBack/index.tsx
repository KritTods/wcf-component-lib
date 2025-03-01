import Button, { ButtonProps } from "antd/es/button";
import "./style.scss";

const BaseButtonBack = (props: ButtonProps) => {
	return (
		<Button {...props} className="button-back">
			<span className="text-xl">{"< กลับ"}</span>
		</Button>
	);
};

export default BaseButtonBack;
