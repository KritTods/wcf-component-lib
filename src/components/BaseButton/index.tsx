import Button, { ButtonHTMLType, ButtonType } from "antd/es/button";
import "../../scss/color-variable.scss";
import "../../scss/variable.scss";
import "./style.scss";
import {
	FloppyDisk,
	Search,
	Clock,
	Download,
	Import,
	Plus,
} from "iconoir-react";
import { Key } from "../../provider/LayoutProvider/type";
import usePermission from "../../hook/usePermission";
import { checkDisabled } from "../../utils";

export type buttonTypes =
	| "primary"
	| "secondary"
	| "cancel"
	| "delete"
	| "dashed"
	| "link"
	| "text"
	| "default"
	| "warmSpice"
	| "honeyGlow"
	| "outline"
	| "fieryRed"
	| "deepTeal"
	| "reject"
	| "emeraldShade"
	| "emeraldShadeWithYollow"
	| "royalBlue"
	| "cancel"
	| "yellowOutline"
	| "noBgGrayTextColor"
	| "cancelConfirm"
	| "onlyWhiteColor"
	| "pinkRedSweet"
	| "whiteSmoke"
	| "onlyBorderAndText";

type IconType = "save" | "search" | "clock" | "download" | "import" | "plus";

type SizeType = "extraWide" | "large" | "middle" | "small";

type ShapeType = "default" | "circle" | "round";
export interface ButtonProps<T extends string = never> {
	label?: string;
	id?: string;
	loading?: boolean;
	onClick?: () => void;
	icon?: JSX.Element;
	type?: buttonTypes;
	size?: SizeType;
	shape?: ShapeType;
	disabled?: boolean;
	className?: string;
	htmlType?: ButtonHTMLType;
	iconPosition?: "start" | "end";
	customStyle?: React.CSSProperties | undefined;
	customSizeStyle?: string;
	iconType?: IconType;
	pageLevel?: Key | T;
	isHoverStyle?: boolean;
	isStorybook?: boolean;
}

const BUTTON_STYLES: Record<string, React.CSSProperties> = {
	primary: {
		backgroundColor: "#1C4651",
		color: "#FFFFFF",
		borderColor: "#1C4651",
	},
	secondary: {
		backgroundColor: "#FFFFFF",
		color: "#1C4651",
		borderColor: "#1C4651",
	},
	cancel: {
		backgroundColor: "#DEDEDE",
		color: "#212121",
		borderColor: "#DEDEDE",
	},
	delete: {
		backgroundColor: "#FFF",
		color: "#C42828",
		borderColor: "#C42828",
	},
	honeyGlow: {
		backgroundColor: "#FBC108",
		color: "#1C4651",
		borderColor: "#FBC108",
	},
	fieryRed: {
		backgroundColor: "#C42828",
		color: "#FFFFFF",
		borderColor: "#C42828",
	},
	warmSpice: {
		backgroundColor: "#BF7B3D",
		color: "#fff",
		borderColor: "#BF7B3D",
	},
	outline: {
		backgroundColor: "#F8FAFC",
		color: "#1C4651",
		borderColor: "#1C4651",
	},
	deepTeal: {
		backgroundColor: "#163841",
		color: "#FFFFFF",
		borderColor: "#163841",
	},
	reject: {
		backgroundColor: "#F1F4F7",
		color: "#C42828",
		borderColor: "#F1F4F7",
	},
	emeraldShade: {
		backgroundColor: "#1C4651",
		color: "#FBC108",
		borderColor: "#1C4651",
	},
	emeraldShadeWithYollow: {
		backgroundColor: "#1C4651",
		color: "#FBC108",
		borderColor: "#FBC108",
	},
	royalBlue: {
		backgroundColor: "#15347F",
		color: "#FBC108",
		borderColor: "##15347F",
	},
	yellowOutline: {
		backgroundColor: "#FFFFFF",
		color: "#FBC108",
		borderColor: "#FBC108",
	},
	noBgGrayTextColor: {
		backgroundColor: "#FFFFFF",
		color: "#98999A",
		borderColor: "#FFFFFF",
	},
	cancelConfirm: {
		backgroundColor: "#FFFFFF",
		color: "#C42828",
		borderColor: "#C42828",
	},
	onlyWhiteColor: {
		backgroundColor: "transparent",
		color: "#FFFFFF",
		borderColor: "#FFFFFF",
	},
	onlyBorderAndText: {
		backgroundColor: "transparent",
		color: "#1C4651",
		borderColor: "#1C4651",
	},
	pinkRedSweet: {
		backgroundColor: "#F9EAEA",
		color: "#FF0000",
		borderColor: "#F9EAEA",
	},
	whiteSmoke: {
		backgroundColor: "#F1F4F7",
		color: "#212121",
		borderColor: "#F1F4F7",
	},
};

const BUTTON_HOVER_STYLES: Record<string, React.CSSProperties> = {
	primary: {
		backgroundColor: "#779097",
	},
	secondary: {
		backgroundColor: "#FFF",
		color: "#779097",
		borderColor: "#779097",
	},
	cancel: {
		backgroundColor: "#ededed",
	},
	delete: {
		backgroundColor: "#D66969",
	},
	warmSpice: {
		backgroundColor: "#A8421A",
	},
	honeyGlow: {
		backgroundColor: "#FDDA6B",
	},
	fieryRed: {
		backgroundColor: "#D66969",
	},
	outline: {
		backgroundColor: "#E1E9ED",
	},
	deepTeal: {
		backgroundColor: "#112F34",
	},
	reject: {
		backgroundColor: "#F1F4F7",
	},
	emeraldShade: {
		backgroundColor: "#1C4651",
	},
	emeraldShadeWithYollow: {
		backgroundColor: "#1C4651",
	},
	royalBlue: {
		backgroundColor: "#15347F",
	},
	yellowOutline: {
		backgroundColor: "#FBC108",
	},
	noBgGrayTextColor: {
		backgroundColor: "#FFFFFF",
	},
	cancelConfirm: {
		backgroundColor: "#C42828",
		color: "#FFFFFF",
	},
	onlyWhiteColor: {
		backgroundColor: "#779097",
		color: "#1C4651",
	},
	pinkRedSweet: {
		backgroundColor: "#F9E2E2",
	},
	whiteSmoke: {
		backgroundColor: "#F5F5F5",
	},
};

const ICON_SET: Record<string, JSX.Element> = {
	save: <FloppyDisk />,
	search: <Search />,
	clock: <Clock />,
	download: <Download />,
	import: <Import />,
	plus: <Plus />,
};

const BaseButton = <T extends string = never>(props: ButtonProps<T>) => {
	const {
		label,
		id,
		loading,
		onClick,
		icon,
		type = "primary",
		size = "small",
		disabled,
		shape = "round",
		className,
		htmlType,
		iconPosition = "start",
		customStyle,
		customSizeStyle,
		iconType,
		pageLevel,
		isHoverStyle = false,
		isStorybook = false,
	} = props;

	const customButtonStyle = BUTTON_STYLES[type] || {};
	const hoverStyle = BUTTON_HOVER_STYLES[type] || {};

	let iconSet = null;
	if (iconType) {
		iconSet = ICON_SET[iconType];
	}

	const permission = usePermission<T>(pageLevel ?? "edit", isStorybook);

	return (
		<Button
			onClick={onClick}
			id={id}
			loading={loading}
			icon={icon ?? iconSet}
			type={
				BUTTON_STYLES[type] === undefined ? (type as ButtonType) : undefined
			}
			// size={size !== "extraWide" ? size : undefined}
			disabled={checkDisabled<T>({ pageLevel, permission, disabled })}
			shape={shape}
			className={`${className} ${customSizeStyle ?? `${size} buttons`}`}
			htmlType={htmlType}
			iconPosition={iconPosition}
			style={customStyle ? { ...customStyle } : { ...customButtonStyle }}
			onMouseOver={(e) => {
				e.currentTarget.style.backgroundColor =
					hoverStyle.backgroundColor || "";
				if (isHoverStyle) {
					e.currentTarget.style.color = hoverStyle.color || "";
				}
			}}
			onMouseOut={(e) => {
				e.currentTarget.style.backgroundColor =
					customButtonStyle.backgroundColor || "";
				if (isHoverStyle) {
					e.currentTarget.style.color = hoverStyle.backgroundColor || "";
				}
			}}
		>
			{label}
		</Button>
	);
};

export default BaseButton;
