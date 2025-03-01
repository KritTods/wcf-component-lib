import { useEffect } from "react";
import { notification, NotificationArgsProps } from "antd";
import "./style.css";
import { IconType } from "antd/es/notification/interface";

type NotificationPlacement = NotificationArgsProps["placement"];

export interface BaseToastNotificationProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	isOpen: boolean;
	placement?: NotificationPlacement;
	message: string;
	description: string;
	type: IconType;
	onClick?: () => void;
	onClose?: () => void;
	setDefault: () => void;
	duration?: number;
}

const BaseToastNotificationOld = (props: BaseToastNotificationProps) => {
	const { duration = 3 } = props;

	const [context, contextHolder] = notification.useNotification({
		duration: duration,
		showProgress: true,
	});

	const openNotification = (toast: BaseToastNotificationProps) => {
		const setContext = {
			...toast,
			message: <p className="text-base font-semibold">{toast.message}</p>,
			description: <p className="text-base">{toast.description}</p>,
			onClick: () => {
				if (toast.onClick) toast.onClick();
			},
			onClose: () => {
				if (toast.onClose) toast.onClose();
			},
		};
		context.open({
			...setContext,
			className: `custom-base-toast ${toast.type}`,
		});

		toast.setDefault();
	};

	useEffect(() => {
		if (props.isOpen) {
			openNotification(props);
		}
	}, [props.isOpen]);

	return <div>{contextHolder}</div>;
};

export default BaseToastNotificationOld;
