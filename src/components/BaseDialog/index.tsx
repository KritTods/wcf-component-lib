import Modal from "antd/es/modal";
import { handleCloseDialog } from "./service";
import CheckCircleOutlined from "@ant-design/icons/lib/icons/CheckCircleOutlined";
import ExclamationCircleOutlined from "@ant-design/icons/lib/icons/ExclamationCircleOutlined";
import { BaseDialogType } from "../../constants/base-dialog-type";
import "./style.scss";
import { CloseOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { BaseSubmitButton } from "../BaseSubmitButton";
import { QuestionMark } from "iconoir-react";
import { DeleteV2Icon, PrintIcon, SaveIcon } from "../BaseConfirmDialog/icons";
import { ButtonTypes } from "../BaseSubmitButton/BaseSubmitButton";

export type ConfirmModalTypes =
	| "blank"
	| "delete"
	| "edit"
	| "deleteV2"
	| "print"
	| "save";
export type IconTheme = "default" | "danger" | "warning" | "success" | "info";
export interface BaseDialogProps {
	isOpen: boolean;
	setIsOpen?: (value: boolean) => void;
	iconColor?: string;
	iconBackgroundColor?: string;
	themeIcon?: IconTheme;
	content?: React.ReactNode;
	onConfirm?: () => void;
	onCancel?: () => void;
	baseDialogType?: BaseDialogType | ConfirmModalTypes;
	headerLeftIcon?: JSX.Element;
	headerText?: React.ReactNode;
	showCancel?: boolean;
	contentCenter?: boolean;
	labelConfirm?: string;
	labelCancel?: string;
	uniqueContent?: JSX.Element;
	header?: JSX.Element;
	footer?: JSX.Element;
	isOverFlow?: boolean;
	width?: string | number;
	confirmButtonType?: ButtonTypes;
	maxHeight?: string;
	maxWidth?: string;
	headerContent?: JSX.Element | undefined;
}

const MODAL_ICON: Record<
	ConfirmModalTypes | BaseDialogType,
	React.ReactElement
> = {
	blank: <QuestionMark />,
	delete: <DeleteOutlined />,
	edit: <EditOutlined />,
	deleteV2: <DeleteV2Icon />,
	print: <PrintIcon />,
	save: <SaveIcon />,
	SUCCESS: <CheckCircleOutlined />,
	DANGER: <ExclamationCircleOutlined />,
};

const BaseDialog = (props: BaseDialogProps) => {
	const {
		isOpen,
		content,
		onConfirm,
		onCancel,
		setIsOpen,
		showCancel,
		iconColor,
		iconBackgroundColor,
		baseDialogType = undefined,
		themeIcon = undefined,
		headerText,
		labelConfirm,
		labelCancel,
		uniqueContent,
		isOverFlow = false,
		width,
		headerLeftIcon = undefined,
		header,
		footer,
		contentCenter = false,
		confirmButtonType,
		maxHeight,
		maxWidth,
		headerContent = undefined,
	} = props;

	const MODAL_ICON_THEME: Record<IconTheme, React.CSSProperties> = {
		default: {
			backgroundColor: iconBackgroundColor || "#EDEDED",
			color: iconColor || "#1C4651",
		},
		danger: {
			backgroundColor: iconBackgroundColor || "#F9EAEA",
			color: iconColor || "#C42828",
		},
		warning: {
			backgroundColor: iconBackgroundColor || "#FFF9E5",
			color: iconColor || "#FBC108",
		},
		success: {
			backgroundColor: iconBackgroundColor || "#E7FAF2",
			color: iconColor || "#09AA6A",
		},
		info: {
			backgroundColor: iconBackgroundColor || "#E6EFF5",
			color: iconColor || "#1A6CA8",
		},
	};

	const icon = MODAL_ICON[baseDialogType as ConfirmModalTypes | BaseDialogType];
	let IconTheme = {};
	const isDefaultType: boolean =
		baseDialogType === "SUCCESS" || baseDialogType === "DANGER";
	if (isDefaultType) {
		switch (baseDialogType) {
			case "SUCCESS":
				IconTheme = {
					color: iconColor || "#08c",
					backgroundColor: iconBackgroundColor || "#ededed",
				};
				break;
			case "DANGER":
				IconTheme = {
					color: iconColor || "#C91432",
					backgroundColor: iconBackgroundColor || "#ededed",
				};
				break;
		}
	} else {
		IconTheme = themeIcon
			? MODAL_ICON_THEME[themeIcon]
			: MODAL_ICON_THEME["default"];
	}

	const footerButtonStyle = showCancel ? "grid gap-x-6 grid-cols-2" : "";
	const contentStyle = contentCenter ? "text-center" : "";

	return (
		<Modal
			open={isOpen}
			centered
			width={width}
			className={`base-dialog ${isOverFlow ? "over-flow" : ""}`}
			onCancel={() => handleCloseDialog({ onCancel, setIsOpen })}
			maskClosable={false}
			footer={null}
			closable={false}
			style={{
				["--modal-max-width" as string]: maxWidth ? `${maxWidth}` : undefined,
				["--modal-max-height" as string]: maxHeight
					? `${maxHeight}`
					: undefined,
			}}
		>
			{uniqueContent ?? (
				<div
					className={`flex flex-col h-full justify-between py-1 gap-5  ${contentStyle}`}
				>
					{headerContent ? (
						headerContent
					) : (
						<div
							className={`header flex items-start ${
								baseDialogType || headerLeftIcon || headerContent
									? "justify-between"
									: "justify-end"
							}`}
						>
							{(baseDialogType || headerLeftIcon) && (
								<div
									style={{
										width: "68px",
										height: "68px",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										fontSize: "30px",
										borderRadius: "99%",
										...IconTheme,
									}}
								>
									{headerLeftIcon ? headerLeftIcon : icon}
								</div>
							)}
							<CloseOutlined
								className="cursor-pointer font-bold text-4xl"
								onClick={() => {
									handleCloseDialog({ onCancel, setIsOpen });
								}}
							/>
						</div>
					)}
					<div className="flex flex-col items-start gap-2">
						{header ? (
							header
						) : (
							<h1 className="font-semibold text-3xl">{headerText}</h1>
						)}
						{content}
					</div>
					<div className="w-full flex justify-center">
						{footer ? (
							footer
						) : (
							<div className={`${footerButtonStyle}`}>
								{showCancel && (
									<BaseSubmitButton
										type="cancel"
										label={labelCancel || "ยกเลิก"}
										iconPosition="end"
										onClickFunction={() => {
											handleCloseDialog({ onCancel, setIsOpen });
										}}
									/>
								)}
								<BaseSubmitButton
									type={confirmButtonType || "primary"}
									label={labelConfirm || "ตกลง"}
									htmlType="submit"
									iconPosition="end"
									onClickFunction={() => {
										handleCloseDialog({ onConfirm, setIsOpen });
									}}
								/>
							</div>
						)}
					</div>
				</div>
			)}
		</Modal>
	);
};

export default BaseDialog;
