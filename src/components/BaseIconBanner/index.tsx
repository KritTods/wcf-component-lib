import React from "react";

interface BaseIconBannerProps {
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	textColor: string;
	backgroundColor: string;
	title: string;
	description?: string;
	fullWidth?: boolean;
	justify?: "center" | "start" | "end" | "between" | "around";
	titleSize?: string;
	iconSize?: string;
	titleWeight?:
		| "thin"
		| "light"
		| "normal"
		| "medium"
		| "semibold"
		| "bold"
		| "extrabold"
		| "black";
}

function BaseIconBanner(props: BaseIconBannerProps) {
	const {
		iconLeft,
		iconRight,
		textColor,
		backgroundColor = "white",
		title,
		description,
		fullWidth = false,
		justify = "start",
		titleSize = "16px",
		iconSize = "16px",
		titleWeight = "normal",
	} = props;
	return (
		<div
			className={`flex items-center gap-2 bg-[${backgroundColor}] ${fullWidth ? "w-full" : ""} h-16 rounded-lg justify-${justify}`}
		>
			{iconLeft && (
				<div
					className={`flex items-center justify-center w-12 h-12`}
					style={{ fontSize: iconSize }}
				>
					{iconLeft}
				</div>
			)}

			<>
				<p
					className={`text-[${titleSize}px] font-${titleWeight}`}
					style={{ color: textColor, fontSize: titleSize }}
				>
					{title}
				</p>
				{description && (
					<p className="text-sm" style={{ color: textColor }}>
						{description}
					</p>
				)}
			</>

			{iconRight && (
				<div
					className={`flex items-center justify-center w-12 h-12`}
					style={{ fontSize: iconSize }}
				>
					{iconRight}
				</div>
			)}
		</div>
	);
}

export default BaseIconBanner;
