import React from "react";
export interface InformationLayoutProps {
	title?: string;
	children: React.ReactNode;
	className?: string;
}

export default function InformationLayout(
	props: InformationLayoutProps,
): React.ReactElement {
	const { children, className, title } = props;
	return (
		<div
			className={`bg-white h-full flex flex-col rounded-2xl p-9 gap-7 ${className}`}
		>
			{title && <p className="tablnact title-content">{title}</p>}
			{children}
		</div>
	);
}
