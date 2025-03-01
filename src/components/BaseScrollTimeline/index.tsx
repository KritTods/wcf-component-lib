import { Timeline, TimelineItemProps } from "antd";
import React, { ReactNode } from "react";

export interface BaseScrollTimelineProps {
	mode: "left" | "alternate" | "right";
	items: TimelineItemProps[];
	maxItemsWithoutScroll?: number;
	heightPercentFromDivContent?: string;
	pending?: boolean;
	pendingDot?: ReactNode;
	reverse?: boolean;
	blurBottom?: boolean;
	className?: string;
}

export default function BaseScrollTimeline(
	props: BaseScrollTimelineProps,
): React.ReactElement {
	const {
		mode,
		items,
		maxItemsWithoutScroll = 7,
		heightPercentFromDivContent = "78%",
		pending = false,
		pendingDot = undefined,
		reverse = false,
		blurBottom = true,
		className,
	} = props;

	return (
		<div
			style={{
				position: "relative",
				overflowY: "auto",
				minHeight:
					items.length <= maxItemsWithoutScroll
						? heightPercentFromDivContent
						: "auto", // Ensure Timeline grows when items are fewer
			}}
		>
			<Timeline
				className={`mt-3 ${className}`}
				mode={mode}
				items={items}
				pending={pending}
				pendingDot={pendingDot}
				reverse={reverse}
			/>
			{blurBottom && items.length > maxItemsWithoutScroll && (
				<div
					style={{
						zIndex: 20,
						width: "100%",
						height: "40px",
						position: "sticky",
						bottom: 0,
						backgroundImage: "linear-gradient(transparent, white)",
						pointerEvents: "none",
					}}
				></div>
			)}
		</div>
	);
}
