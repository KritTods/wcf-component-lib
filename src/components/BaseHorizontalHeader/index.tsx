import Divider from "antd/es/divider";
import "./style.scss";

interface BaseHorizontalHeaderProps {
	title: string;
	borderColor?: string;
	titleColor?: string;
	iconsColor?: string;
	icons?: JSX.Element;
	children?: JSX.Element;
	className?: string;
	noMargin?: boolean;
}

const BaseHorizontalHeader = (props: BaseHorizontalHeaderProps) => {
	const {
		title,
		icons,
		children,
		borderColor = "#8E670B",
		titleColor = "#8E670B",
		iconsColor = "#8E670B",
		className = "",
		noMargin = false,
	} = props;
	return (
		<>
			<div
				className={`base-horizontal-header flex items-center text-[#8E670B] overflow-hidden ${!noMargin && "my-2"} ${className} `}
			>
				<div style={{ color: iconsColor }} className="p-2 icon">
					{icons}
				</div>
				<Divider
					style={{
						borderColor: borderColor,
					}}
					orientation="left"
					className="my-0"
				>
					{children ?? (
						<>
							<p className="text-base" style={{ color: titleColor }}>
								{title}
							</p>
						</>
					)}
				</Divider>
			</div>
		</>
	);
};

export default BaseHorizontalHeader;
