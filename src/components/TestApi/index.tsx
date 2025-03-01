import Button from "antd/es/button";
import { useEffect } from "react";

export interface ButtonProps {
	label: string;
	onClick: () => void;
	icon?: JSX.Element;
	type?: "primary" | "dashed" | "link" | "text" | "default";
	size?: "large" | "middle" | "small";
	shape?: "default" | "circle" | "round";
	disabled?: boolean;
	className?: string;
	apiTest?: () => void;
}

const TestApi = (props: ButtonProps) => {
	const {
		label,
		onClick,
		icon,
		type = "primary",
		size = "middle",
		disabled,
		shape = "round",
		className,
		apiTest,
	} = props;

	useEffect(() => {
		console.log("qwer");
		if (apiTest) apiTest();
		console.log("qwer");
	}, []);

	return (
		<Button
			onClick={onClick}
			icon={icon}
			type={type}
			size={size}
			disabled={disabled}
			shape={shape}
			className={className}
		>
			{label}
		</Button>
	);
};

export default TestApi;
