import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import "./style.scss";

export interface StatusFilterItem {
	label: string;
	value: string | number;
	count: number;
	state: "active" | "hidden" | "disabled";
}

interface BaseStatusFilterProps {
	statusFilterItem: StatusFilterItem[];
	onStatusChange?: (updatedStatus: StatusFilterItem[]) => void;
}

const BaseStatusFilter = ({
	statusFilterItem,
	onStatusChange,
}: BaseStatusFilterProps) => {
	const handleToggleVisibility = (index: number) => {
		const updatedItems: StatusFilterItem[] = statusFilterItem.map(
			(item, idx) => {
				if (idx === index && item.state !== "disabled") {
					return {
						...item,
						state: item.state === "active" ? "hidden" : "active",
					};
				}
				return item;
			},
		);
		onStatusChange && onStatusChange(updatedItems);
	};

	return (
		<div className="base-status-container">
			{statusFilterItem.map((item, index) => (
				<div
					key={index}
					className={`status-item status-${item.state}`}
					onClick={() => handleToggleVisibility(index)}
					style={{
						cursor: item.state === "disabled" ? "not-allowed" : "pointer",
					}}
				>
					<div className="status-count">{item.count}</div>
					<div className="status-content">
						<span className="status status-text "> {item.label}</span>
						{item.state === "active" ? (
							<EyeFilled className="eye-icon" />
						) : (
							<EyeInvisibleFilled className="eye-icon" />
						)}
					</div>
				</div>
			))}
		</div>
	);
};
export default BaseStatusFilter;
