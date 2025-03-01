import { Steps } from "antd";
import React from "react";
import "./style.scss";

interface BaseStepperProps {
	items: StepItem[];
	type: "navigation" | "default" | "inline";
	size?: "default" | "small";
	current: number;
	onChange?: (value: number) => void;
	className?: string;
}

export interface StepItem {
	description?: React.ReactNode | string;
	disabled?: boolean;
	icon?: React.ReactNode;
	status?: "error" | "wait" | "process" | "finish";
	subTitle?: React.ReactNode | string;
	title?: React.ReactNode | string;
}

function BaseStepper(props: BaseStepperProps): React.ReactElement {
	const {
		items,
		type = "default",
		size = "default",
		current = 0,
		onChange,
		className,
	} = props;
	return (
		<Steps
			type={type}
			size={size}
			current={current}
			onChange={onChange}
			className={`base-stepper  ${className}`}
			items={items}
			// style={{ backgroundColor: "#FBC108" }}
		/>
	);
}

export default BaseStepper;
