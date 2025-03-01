interface BaseCollapseLabelHeaderProps {
	title: string;
	description?: string;
	className?: string;
	iconLeft?: React.ReactNode;
	titleFontSize?: "xs" | "sm" | "lg" | "xl" | "2xl";
}

const BaseCollapseLabelHeader = (props: BaseCollapseLabelHeaderProps) => {
	const {
		title,
		description = "",
		className = "",
		iconLeft,
		titleFontSize = "2xl",
	} = props;
	return (
		<>
			<div className={`pt-3 pb-2.5 ${className} items-center`}>
				{iconLeft}
				<p className={`text-${titleFontSize}`}>{title}</p>
				<p className="text-xs mt-3" style={{ color: "#B7BEC5" }}>
					{description}
				</p>
			</div>
		</>
	);
};

export default BaseCollapseLabelHeader;
