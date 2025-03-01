import "./style.scss";
import "../../../../../../scss/color-variable.scss";
import _ from "lodash";
import Circle from "./icons/Circle";
import Hexagon from "./icons/Hexagon";
import Square from "./icons/Square";
import Diamond from "./icons/Diamond";
import LeftArrow from "./icons/Left-Arrow";
import RoundSquare from "./icons/Rounded-Square";
import Star1 from "./icons/Star1";
import Star2 from "./icons/Star2";
import Triangle from "./icons/Triangle";
import Star from "./icons/Star";
import Plus from "./icons/Plus";
export type StatusIndicatorType =
	| "Y"
	| "N"
	| "SUCCESS"
	| "INACTIVE"
	| "ใช้งาน"
	| "ไม่ใช้งาน"
	| "อนุมัติ"
	| "รออนุมัติ"
	| "แบบร่าง"
	| "รอเอกสารเพิ่มเติม"
	| "ลูกจ้าง"
	| "รอยืนยัน"
	| "ยืนยันแล้ว"
	| "ไม่อนุมัติ"
	| "รอการตัดจ่าย"
	| "รอวินิจฉัย"
	| "W"
	| "P"
	| "เป็นสมาชิก"
	| "C"
	| "S"
	| BaseStatusTag;

export type BaseStatusTag =
	| "red"
	| "orange"
	| "yellow"
	| "green"
	| "blue"
	| "purple"
	| "primary"
	| "gray";

export type BaseIconShape =
	| "circle"
	| "square"
	| "rounded-square"
	| "diamond"
	| "triangle"
	| "star"
	| "star1"
	| "star2"
	| "plus"
	| "left-arrow"
	| "hexagon";
export interface StatusConfig {
	bgColor: string;
	dotColor: string;
	textColor: string;
	statusText?: string;
}

export interface StatusIndicatorProps {
	status: StatusIndicatorType;
	height?: string;
	classNameText?: string;
	customStatusTag?: StatusConfig;
	customStatusText?: string;
	iconShape?: BaseIconShape;
}

export const statusBaseConfigMap: Record<BaseStatusTag, StatusConfig> = {
	red: {
		bgColor: "#F9EAEA",
		dotColor: "#C42828",
		textColor: "#C42828",
		statusText: "",
	},
	orange: {
		bgColor: "#FEF0E9",
		dotColor: "#F56C1F",
		textColor: "#F56C1F",
		statusText: "",
	},
	yellow: {
		bgColor: "#FFF9E5",
		dotColor: "#C99A06",
		textColor: "#C99A06",
		statusText: "",
	},
	green: {
		bgColor: "#E7FAF2",
		dotColor: "#09AA6A",
		textColor: "#09AA6A",
		statusText: "",
	},
	blue: {
		bgColor: "#E6EFF5",
		dotColor: "#176197",
		textColor: "#176197",
		statusText: "",
	},
	purple: {
		bgColor: "#E6E6F2",
		dotColor: "#000080",
		textColor: "#000080",
		statusText: "",
	},
	gray: {
		bgColor: "#E7F3F5",
		dotColor: "#1C4651",
		textColor: "#1C4651",
		statusText: "",
	},
	primary: {
		bgColor: "#EDEDED",
		dotColor: "#121212",
		textColor: "#121212",
		statusText: "",
	},
};

export const statusConfigMap: Record<StatusIndicatorType, StatusConfig> = {
	SUCCESS: {
		bgColor: "#BBF7D0",
		dotColor: "#22C55E",
		textColor: "#22C55E",
		statusText: "ใช้งาน",
	},
	Y: {
		bgColor: "#BBF7D0",
		dotColor: "#22C55E",
		textColor: "#22C55E",
		statusText: "ใช้งาน",
	},
	ใช้งาน: {
		bgColor: "#BBF7D0",
		dotColor: "#22C55E",
		textColor: "#22C55E",
		statusText: "ใช้งาน",
	},
	INACTIVE: {
		bgColor: "#FECACA",
		dotColor: "#EF4444",
		textColor: "#EF4444",
		statusText: "ไม่ใช้งาน",
	},
	N: {
		bgColor: "#FECACA",
		dotColor: "#EF4444",
		textColor: "#EF4444",
		statusText: "ไม่ใช้งาน",
	},
	ไม่ใช้งาน: {
		bgColor: "#FECACA",
		dotColor: "#EF4444",
		textColor: "#EF4444",
		statusText: "ไม่ใช้งาน",
	},
	อนุมัติ: {
		bgColor: "#B8E6CF",
		dotColor: "#36D294",
		textColor: "#267852",
		statusText: "อนุมัติ",
	},
	รออนุมัติ: {
		bgColor: "#F5DAA3",
		dotColor: "#FBC108",
		textColor: "#8E670B",
		statusText: "รออนุมัติ",
	},
	แบบร่าง: {
		bgColor: "#BABABA",
		dotColor: "#4B5760",
		textColor: "#323334",
		statusText: "แบบร่าง",
	},
	รอเอกสารเพิ่มเติม: {
		bgColor: "#F5DAA3",
		dotColor: "#FBC108",
		textColor: "#8E670B",
		statusText: "รอเอกสารเพิ่มเติม",
	},
	ลูกจ้าง: {
		bgColor: "#8EA3A8",
		dotColor: "#163841",
		textColor: "#163841",
		statusText: "ลูกจ้าง",
	},
	รอยืนยัน: {
		bgColor: "#FFF9E5",
		dotColor: "#C99A06",
		textColor: "#C99A06",
		statusText: "รอยืนยัน",
	},
	ยืนยันแล้ว: {
		bgColor: "#09AA6A",
		dotColor: "#FFF9E5",
		textColor: "#FFF9E5",
		statusText: "ยืนยันแล้ว",
	},
	ไม่อนุมัติ: {
		bgColor: "#FEF0E9",
		dotColor: "#C42828",
		textColor: "#C42828",
		statusText: "ไม่อนุมัติ",
	},
	รอการตัดจ่าย: {
		bgColor: "#E6E6F2",
		dotColor: "#000080",
		textColor: "#000080",
		statusText: "รอการตัดจ่าย",
	},
	รอวินิจฉัย: {
		bgColor: "#E7F3F5",
		dotColor: "#163841",
		textColor: "#163841",
		statusText: "รอวินิจฉัย",
	},
	W: {
		bgColor: "#FFF9E5",
		dotColor: "#FBC108",
		textColor: "#C99A06",
		statusText: "รอประมวลผล",
	},
	P: {
		bgColor: "#E6EFF5",
		dotColor: "#176197",
		textColor: "#176197",
		statusText: "กำลังประมวลผล",
	},
	C: {
		bgColor: "#FECACA",
		dotColor: "#EF4444",
		textColor: "#EF4444",
		statusText: "ยกเลิก",
	},
	S: {
		bgColor: "#E7FAF2",
		dotColor: "#09AA6A",
		textColor: "#09AA6A",
		statusText: "สำเร็จ",
	},
	เป็นสมาชิก: {
		bgColor: "#E6EFF5",
		dotColor: "#176197",
		textColor: "#176197",
	},
	...statusBaseConfigMap,
};

const getIconShapeMap = (
	iconShape: BaseIconShape,
	statusConfig: StatusConfig,
) => {
	switch (iconShape) {
		case "circle":
			return <Circle fill={statusConfig.dotColor} />;
		case "hexagon":
			return <Hexagon fill={statusConfig.dotColor} />;
		case "square":
			return <Square fill={statusConfig.dotColor} />;
		case "rounded-square":
			return <RoundSquare fill={statusConfig.dotColor} />;
		case "diamond":
			return <Diamond fill={statusConfig.dotColor} />;
		case "triangle":
			return <Triangle fill={statusConfig.dotColor} />;
		case "star":
			return <Star fill={statusConfig.dotColor} />;
		case "star1":
			return <Star1 fill={statusConfig.dotColor} />;
		case "star2":
			return <Star2 fill={statusConfig.dotColor} />;
		case "plus":
			return <Plus fill={statusConfig.dotColor} />;
		case "left-arrow":
			return <LeftArrow fill={statusConfig.dotColor} />;
	}
};

const StatusIndicator = ({
	status,
	height = "36px",
	classNameText = "status",
	customStatusTag,
	customStatusText = "",
	iconShape = "circle",
}: StatusIndicatorProps) => {
	let statusConfig = statusConfigMap[status] || {
		bgColor: "#ffffff",
		dotColor: "#000000",
		textColor: "#000000",
		statusText: status,
	};

	if (customStatusTag) {
		statusConfig = customStatusTag;
	}

	return (
		<div
			className="status-wrapper"
			style={
				{
					"--status-bg-color": statusConfig.bgColor,
					"--status-height": height,
				} as React.CSSProperties
			}
		>
			<div className="icon-wrapper">
				{getIconShapeMap(iconShape, statusConfig)}
			</div>
			<p
				className={`${classNameText} status-text`}
				style={
					{
						"--status-text-color": statusConfig.textColor,
					} as React.CSSProperties
				}
			>
				{!_.isEmpty(statusConfig.statusText)
					? statusConfig.statusText
					: customStatusText}
			</p>
		</div>
	);
};

export default StatusIndicator;
