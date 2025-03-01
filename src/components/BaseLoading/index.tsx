import * as React from "react";
import "./style.css";
import Spin from "antd/es/spin";

type Props = {
	size?: "small" | "large" | "default";
};

export default function BaseLoading(props: Props) {
	const { size = "large" } = props;
	const contentStyle: React.CSSProperties = {
		padding: 50,
		background: "rgba(0, 0, 0, 0.05)",
		borderRadius: 4,
	};
	const content = <div style={contentStyle} />;
	return (
		<>
			<div className="spin-loading">
				<div className="spin-loading-child">
					<Spin tip="Loading" size={size}>
						{content}
					</Spin>
				</div>
			</div>
		</>
	);
}
