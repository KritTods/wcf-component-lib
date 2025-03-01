import { Button } from "antd";
import { ButtonHTMLType } from "antd/es/button/buttonHelpers";
import "./style.scss";
import { useState } from "react";

export type ButtonTypes =
	| "primary"
	| "outlined"
	| "cancel"
	| "delete"
	| "warning"
	| "danger";
export interface Props {
	id?: string;
	label: string;
	className?: string;
	type?: ButtonTypes | undefined;
	htmlType?: ButtonHTMLType | undefined;
	onClickFunction?: () => void;
	customStyle?: React.CSSProperties | undefined;
	icon?: JSX.Element | undefined;
	iconPosition?: "start" | "end" | undefined;
}

const BUTTON_STYLES: Record<ButtonTypes, React.CSSProperties> = {
	primary: {
		backgroundColor: "#1C4651",
		color: "#FFFFFF",
		borderColor: "#1C4651",
	},
	outlined: {
		backgroundColor: "#FFFFFF",
		color: "#1C4651",
		borderColor: "#1C4651",
	},
	cancel: {
		backgroundColor: "#DEDEDE",
		color: "#212121",
		borderColor: "#DEDEDE",
	},
	delete: {
		backgroundColor: "#FFFFFF",
		color: "#C42828",
		borderColor: "#C42828",
	},
	warning: {
		backgroundColor: "#FBC108",
		color: "#1C4651",
		borderColor: "#FBC108",
	},
	danger: {
		backgroundColor: "#C42828",
		color: "#FFFFFF",
		borderColor: "#C42828",
	},
};

const BUTTON_HOVER_STYLES: Record<ButtonTypes, React.CSSProperties> = {
	primary: {
		backgroundColor: "#779097",
		color: "#FFFFFF",
		borderColor: "#779097",
	},
	outlined: {
		backgroundColor: "#FFF",
		color: "#779097",
		borderColor: "#779097",
	},
	cancel: {
		backgroundColor: "#EDEDED",
		borderColor: "#EDEDED",
	},
	delete: {
		backgroundColor: "#FFF",
		color: "#D66969",
		borderColor: "#D66969",
	},
	warning: {
		backgroundColor: "#FDDA6B",
		borderColor: "#FDDA6B",
	},
	danger: {
		backgroundColor: "#D66969",
		color: "#FFFFFF",
		borderColor: "#D66969",
	},
};

export default function BaseSubmitButton(props: Props) {
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const {
		id,
		label,
		className = "",
		type = "primary",
		htmlType = undefined,
		onClickFunction = () => {},
		customStyle = {},
		icon = undefined,
		iconPosition = undefined,
	} = props;

	const buttonStyle = BUTTON_STYLES[type] || {};
	const hoverStyle = BUTTON_HOVER_STYLES[type] || {};
	const currentStateStyle = isHovered ? { ...hoverStyle } : { ...buttonStyle };

	return (
		<>
			<Button
				{...(id && { id: id })}
				onClick={() => onClickFunction()}
				htmlType={htmlType}
				className={`base-submit-button text-base font-semibold ${className}`}
				style={{
					minWidth: "240px",
					maxWidth: "286px",
					height: "44px",
					borderRadius: "99px",
					...currentStateStyle,
					...customStyle,
				}}
				onMouseOver={() => {
					setIsHovered(true);
				}}
				onMouseOut={() => {
					setIsHovered(false);
				}}
				icon={icon}
				iconPosition={iconPosition}
			>
				{label}
			</Button>
		</>
	);
}
