"use client";

import { useState } from "react";
import { Tooltip } from "antd";
import UserContent from "./content/User";
import { SsoUser } from "./model";
import { ActionType } from "@rc-component/trigger";

export interface BaseTooltipProps {
	name: string;
	contentType?: "user";
	userItem?: SsoUser;
	uniqueContent?: JSX.Element;
	className?: string;
	trigger?: ActionType | ActionType[];
	onClick?: () => void;
	onHover?: () => void;
	color?: string;
}

export default function BaseTooltip(props: BaseTooltipProps) {
	const {
		name,
		userItem,
		contentType = "user",
		uniqueContent,
		className,
		trigger = "click",
		onClick = () => {},
		onHover = () => {},
		color = "#FFFFFF",
	} = props;

	const [visible, setVisible] = useState(false);
	const [isHover, setIsHover] = useState(false);

	const renderContent = () => {
		if (uniqueContent) return uniqueContent;

		switch (contentType) {
			case "user":
				return <UserContent userItem={userItem} />;
			default:
				return null;
		}
	};

	const handleMouseEnter = () => {
		if (trigger === "hover") {
			if (!isHover) {
				onHover();
			}
			setIsHover(true);
			setVisible(true);
		}
	};

	const handleMouseLeave = () => {
		if (trigger === "hover") {
			setIsHover(false);
			setVisible(false);
		}
	};

	const handleOnClick = () => {
		if (trigger === "click") {
			if (!visible) {
				onClick();
				setVisible(true);
			} else {
				setVisible(false);
			}
		}
	};

	return (
		<Tooltip
			color={color}
			title={<>{renderContent()}</>}
			trigger={trigger}
			open={visible}
			className={`${className}`}
			// onOpenChange={handleVisibleChange}
			overlayStyle={{ maxWidth: "max-content" }}
		>
			<p
				className="text-[#1A6CA8] underline hover:text-[#1A6CA8] cursor-pointer"
				onClick={() => handleOnClick()}
				onMouseEnter={() => handleMouseEnter()}
				onMouseLeave={() => handleMouseLeave()}
			>
				{name}
			</p>
		</Tooltip>
	);
}
