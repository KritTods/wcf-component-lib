import React from "react";
import Icon from "@ant-design/icons";
import { IconComponents, IconName } from "./icon";
import "./style.scss";

export interface IconClassNameColor {
	base?: string;
	hover?: string;
	disabled?: string;
	active?: string;
}

export interface BaseIconProps {
	id?: string;
	name?: IconName;
	size?: string;
	classNameColor?: IconClassNameColor;
	onClick?: (e: React.MouseEvent) => void;
	disabled?: boolean;
	active?: boolean;
	className?: string;
}

const BaseIcon: React.FC<BaseIconProps> = (props) => {
	const {
		id,
		name = "questionMarkIcon",
		size = "24px",
		classNameColor = {},
		onClick,
		disabled = false,
		active = false,
		className,
	} = props;
	const IconComponent = IconComponents[name];

	const style: Record<string, string> = {
		"--icon-base-color": classNameColor.base
			? `var(--${classNameColor.base})`
			: "",
		"--icon-hover-color": classNameColor.hover
			? `var(--${classNameColor.hover})`
			: "",
		"--icon-active-color": classNameColor.active
			? `var(--${classNameColor.active})`
			: "",
		"--icon-disabled-color": classNameColor.disabled
			? `var(--${classNameColor.disabled})`
			: "",
	};

	const combinedClassName = [
		"base-icon",
		active ? "base-icon-active" : "",
		!disabled ? "base-icon-enabled" : "base-icon-disabled",
		className,
	]
		.filter(Boolean)
		.join(" ");

	const handleClick = (e: React.MouseEvent) => {
		if (disabled) return;
		onClick?.(e);
	};

	return (
		<Icon
			// {...props}
			id={id}
			component={() => <IconComponent size={size} />}
			className={combinedClassName}
			style={style}
			onClick={handleClick}
			alt={String(name)}
		/>
	);
};

export default BaseIcon;
