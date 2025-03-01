import { Timeline, TimelineItemProps } from "antd";
import "./style.scss";

interface BaseTimelineProps {
	items: TimelineItemProps[];
	mode: "left" | "alternate" | "right";
	daysDifference?: number;
	extend?: boolean;
}

function BaseTimeline(props: BaseTimelineProps) {
	const { items, mode, daysDifference, extend } = props;
	return (
		<>
			<div className="flex col items-center gap-2 relative">
				<Timeline mode={mode} items={items} />
				{extend && (
					<div className="extend-container">
						<div className="orange-line"></div>
						<div className="days-difference">{daysDifference} วัน</div>
					</div>
				)}
			</div>
		</>
	);
}

export default BaseTimeline;
