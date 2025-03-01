import notification from "antd/es/notification";
import {
	IconType,
	NotificationPlacement,
} from "antd/es/notification/interface";
import { CheckCircle, InfoCircle, XmarkCircle, Xmark } from "iconoir-react";
import "./style.scss";

export interface BaseToastNotificationProps {
	message?: string;
	description: string;
	duration?: number;
	onClick?: () => void;
	onClose?: () => void;
	pauseOnHover?: boolean;
	placement?: NotificationPlacement;
	type?: IconType;
	key?: string;
}

const TOAST_COLOR: Record<string, React.CSSProperties> = {
	success: {
		backgroundColor: "#E7FAF2",
		borderColor: "#09AA6A",
	},
	info: {
		backgroundColor: "#E6EFF5",
		borderColor: "#176197",
	},
	warning: {
		backgroundColor: "#FFF9E5",
		borderColor: "#FBC108",
	},
	error: {
		backgroundColor: "#F9EAEA",
		borderColor: "#C42828",
	},
};

const TOAST_TITLE = (type: IconType) => {
	switch (type) {
		case "success":
			return "เสร็จสิ้น";
		case "info":
			return "คำแนะนำ";
		case "warning":
			return "แจ้งเตือน";
		case "error":
			return "ผิดพลาด";
		default:
			return "";
	}
};

const TOAST_ICON = (type: IconType) => {
	switch (type) {
		case "success":
			return <CheckCircle color="#09AA6A" fontSize="27px" />;
		case "info":
			return <InfoCircle color="#176197" fontSize="27px" />;
		case "warning":
			return <InfoCircle color="#FBC108" fontSize="27px" />;
		case "error":
			return <XmarkCircle color="#C42828" fontSize="27px" />;
		default:
			return "";
	}
};

const TOAST_STYLE = (type: IconType): React.CSSProperties => {
	return {
		...TOAST_COLOR[type],
		borderWidth: 1,
		padding: "16px",
		borderRadius: "16px",
	};
};

const BaseToastNotification = (attribute: BaseToastNotificationProps) => {
	const {
		message,
		type = "success",
		description,
		duration = 3,
		pauseOnHover = true,
		onClick = () => {},
		onClose = () => {},
		placement = "topRight",
		key,
	} = attribute;
	notification.open({
		message: (
			<>
				{TOAST_ICON(type)}
				<div>
					<p className="tablnact">{message ? message : TOAST_TITLE(type)}</p>
					<p className="text-label" style={{ color: "#4B5760" }}>
						{description}
					</p>
				</div>
			</>
		),
		closeIcon: <Xmark fontSize="25px" color="#4B5760" />,
		showProgress: true,
		pauseOnHover: pauseOnHover,
		duration: duration,
		style: TOAST_STYLE(type),
		onClick: onClick,
		onClose: onClose,
		placement,
		key,
	});
};

export default BaseToastNotification;
