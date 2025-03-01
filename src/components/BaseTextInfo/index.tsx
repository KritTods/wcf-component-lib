import React from "react";

interface BaseTextInfoProps {
	label: string;
	text?: string;
	customTextContent?: React.ReactNode;
	className?: string;
	downloadContent?: JSX.Element;
}

export default function BaseTextInfo(
	props: BaseTextInfoProps,
): React.ReactElement {
	const { label, text, customTextContent, className, downloadContent } = props;
	return (
		<div className={`flex flex-col gap-2 ${className}`}>
			{downloadContent ? (
				<div className="text-label text-[#779097] flex justify-between">
					<div>{label}</div>
					{downloadContent}
				</div>
			) : (
				<p className="text-label text-[#779097]">{label}</p>
			)}
			{customTextContent ? (
				customTextContent
			) : (
				<p className="text-display text-[#212121]">{text}</p>
			)}
		</div>
	);
}
