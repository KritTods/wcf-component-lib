import { Button, Popover } from "antd";
import { InfoCircle } from "iconoir-react";
import React from "react";

export interface ButtonItemProps {
	label: string;
	helpText?: string;
	onClick?: () => void;
	icon?: JSX.Element;
	infoMessage?: string;
}

type ThemeColor = "purple" | "blue" | "green";

export interface BaseColorHeaderButtonGroupProps {
	title?: string;
	buttonList: ButtonItemProps[];
	columnNumber?: number;
	themeColor?: ThemeColor;
	activeList: string[];
}

const HEADER_STYLE: Record<ThemeColor, string> = {
	purple: "bg-pending",
	blue: "bg-new",
	green: "bg-success",
};

const BUTTON_STYLES: Record<ThemeColor, React.CSSProperties> = {
	purple: {
		backgroundColor: "#E6E6F2",
		color: "black",
	},
	blue: {
		backgroundColor: "#E6EFF5",
		color: "black",
	},
	green: {
		backgroundColor: "#E7FAF2",
		color: "black",
	},
};

const BUTTON_HOVER_STYLES: Record<ThemeColor, React.CSSProperties> = {
	purple: {
		color: "#6666B3",
	},
	blue: {
		color: "#176197",
	},
	green: {
		color: "#09AA6A",
	},
};

export default function BaseColorHeaderButtonGroup(
	props: BaseColorHeaderButtonGroupProps,
): React.ReactElement {
	const { title, buttonList, columnNumber, themeColor, activeList } = props;
	const headerClassName = themeColor ? HEADER_STYLE[themeColor] : "bg-pending";
	const buttonStyle = themeColor
		? BUTTON_STYLES[themeColor]
		: {
				backgroundColor: "#E6E6F2",
			};

	const buttonHoverStyle = themeColor
		? BUTTON_HOVER_STYLES[themeColor]
		: {
				color: "#6666B3",
			};
	const gridCoulumn = columnNumber
		? `grid-cols-${columnNumber}`
		: "grid-cols-3";

	return (
		<div>
			{title && (
				<p
					className={`w-full flex justify-center text-white ${headerClassName} py-2 tablnact rounded-tl-2xl rounded-tr-2xl`}
				>
					{title}
				</p>
			)}
			<div className={`grid ${gridCoulumn} gap-x-4 gap-y-2 mt-2`}>
				{buttonList.map((item) => {
					const itemActive = activeList.includes(item.label);
					const buttonCosmetic = itemActive ? { ...buttonStyle } : {};
					return (
						<Button
							key={item.label}
							onClick={item.onClick ? item.onClick : undefined}
							className="input"
							style={{
								minHeight: "64px",
								borderRadius: "0.5rem",
								...buttonCosmetic,
							}}
							onMouseOver={(e) => {
								e.currentTarget.style.color = buttonHoverStyle.color || "";
								e.currentTarget.style.borderColor =
									buttonHoverStyle.color || "";
							}}
							onMouseOut={(e) => {
								e.currentTarget.style.backgroundColor =
									itemActive && buttonStyle.backgroundColor
										? buttonStyle.backgroundColor
										: "";
								e.currentTarget.style.color =
									itemActive && buttonStyle.color ? buttonStyle.color : "";
								e.currentTarget.style.border = "none";
							}}
							icon={
								item.infoMessage ? (
									<Popover
										content={
											<p className="title-content text-help">
												{item.infoMessage}
											</p>
										}
									>
										<>
											<InfoCircle
												style={{ fontSize: 10 }}
												className="text-primary-bright"
											/>
										</>
									</Popover>
								) : undefined
							}
							iconPosition="end"
						>
							{item.label}
						</Button>
					);
				})}
			</div>
		</div>
	);
}
