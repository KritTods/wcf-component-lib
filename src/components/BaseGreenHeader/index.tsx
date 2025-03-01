import "./style.scss";

interface BaseGreenHeaderProps {
	title: string;
	description?: string;
	className?: string;
	content?: React.ReactNode;
	iconLeft?: React.ReactNode;
}

const BaseGreenHeader = (props: BaseGreenHeaderProps) => {
	const { title, description = "", className = "", content, iconLeft } = props;
	return (
		<>
			<div className={`base-green-header px-6 py-4 ${className}`}>
				{iconLeft}
				<p className="header">{title}</p>
				<p className="desc mt-3">{description}</p>
			</div>
			{content && (
				<div className="bg-white p-6" style={{ borderRadius: "0 0 24px 24px" }}>
					{content}
				</div>
			)}
		</>
	);
};

export default BaseGreenHeader;
