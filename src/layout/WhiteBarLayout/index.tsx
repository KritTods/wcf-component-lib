export interface WhiteBarLayoutProps {
	isFlexCol?: boolean;
	children: React.ReactNode;
	className?: string;
}

const WhiteBarLayout = (props: WhiteBarLayoutProps) => {
	const { children, isFlexCol, className } = props;
	return (
		<div
			className={`bg-white h-full ${isFlexCol ? "flex-col" : "flex"} rounded-2xl p-6 ${className}`}
		>
			{children}
		</div>
	);
};

export default WhiteBarLayout;
