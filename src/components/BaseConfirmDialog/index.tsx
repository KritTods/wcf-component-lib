import Modal from "antd/es/modal";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";
import BaseSubmitButton from "../BaseSubmitButton/BaseSubmitButton";
import ArrowRightOutlined from "@ant-design/icons/lib/icons/ArrowRightOutlined";
import { DeleteOutlined } from "@ant-design/icons";
import React from "react";
import { QuestionMark } from "iconoir-react";
import { DeleteV2Icon, PrintIcon, SaveIcon } from "./icons";

type ModalTypes = "blank" | "delete" | "edit" | "deleteV2" | "print" | "save";
type IconTheme = "default" | "danger" | "warning" | "success" | "info";

export interface BaseConfirmDialogProps {
	isOpen?: boolean;
	type?: ModalTypes;
	themeIcon?: IconTheme;
	iconColor?: string;
	iconBackgroundColor?: string;
	confirmFunction: () => void;
	bodyHeaderText?: string;
	bodyDescriptionText?: React.ReactElement | string;
	cancelFunction: () => void;
	closeFunction: () => void;
	headerLeftIcon?: React.ReactNode | undefined;
	labelConfirm?: string;
	isDelete?: boolean;
	labelSubmit?: string;
	labelCancel?: string;
	iconInSubmit?: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	buttonStyle?: any;
}

const MODAL_ICON: Record<ModalTypes, React.ReactElement> = {
	blank: <QuestionMark />,
	delete: <DeleteOutlined />,
	edit: <EditOutlined />,
	deleteV2: <DeleteV2Icon />,
	print: <PrintIcon />,
	save: <SaveIcon />,
};

export default function BaseConfirmDialog(props: BaseConfirmDialogProps) {
	const {
		isOpen = false,
		type = "blank",
		themeIcon = "default",
		iconColor = "",
		iconBackgroundColor = "",
		confirmFunction,
		bodyHeaderText = "ต้องการบันทึกข้อมูลใช่หรือไม่?",
		bodyDescriptionText = "กรุณายืนยันการทำรายการอีกครั้ง",
		cancelFunction,
		closeFunction,
		headerLeftIcon = undefined,
		labelConfirm,
		isDelete,
		labelSubmit,
		labelCancel,
		iconInSubmit = false,
		buttonStyle,
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

	const icon = MODAL_ICON[type] || {};
	const IconTheme = MODAL_ICON_THEME[themeIcon] || {};

	return (
		<Modal
			open={isOpen}
			centered
			maskClosable={false}
			footer={null}
			style={{ maxWidth: "600px", padding: 24 }}
			closable={false}
			width={"100%"}
		>
			<div className="flex py-1 flex-col gap-y-5">
				<div className="header flex justify-between items-center">
					{isDelete ? (
						<DeleteOutlined
							className="p-3"
							style={{
								fontSize: "30px",
								color: "#193f49",
								backgroundColor: "#ededed",
								borderRadius: "99%",
							}}
						/>
					) : (
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
						className="cursor-pointer font-bold "
						style={{ fontSize: "32px" }}
						onClick={() => {
							closeFunction();
						}}
					/>
				</div>
				{isDelete ? (
					<div className="flex flex-col gap-y-2">
						<h1 className="font-semibold text-3xl">
							คุณยืนยันในความต้องการลบใช่หรือไม่
						</h1>
						<p className="status text-[#4B5760]">
							คุณต้องการลบ
							{bodyDescriptionText
								? ` "${bodyDescriptionText}" `
								: "ข้อมูลนี้ "}
							ใช่ไหม
						</p>
					</div>
				) : (
					<div className="flex flex-col gap-y-2">
						<h1 className="font-semibold text-3xl">{bodyHeaderText}</h1>
						<p className="status text-[#4B5760]">{bodyDescriptionText}</p>
					</div>
				)}
				<div className="grid gap-x-6 grid-cols-2">
					<BaseSubmitButton
						type="cancel"
						className="text-base font-semibold"
						customStyle={{ height: "60px" }}
						label={labelCancel ? labelCancel : "ยกเลิก"}
						onClickFunction={() => {
							cancelFunction();
						}}
					/>
					{isDelete ? (
						<BaseSubmitButton
							type="danger"
							label={labelConfirm ? labelConfirm : "ลบข้อมูลนี้"}
							htmlType="submit"
							customStyle={{ height: "60px" }}
							iconPosition="end"
							icon={
								iconInSubmit ? (
									<ArrowRightOutlined className="text-base" />
								) : undefined
							}
							onClickFunction={() => {
								confirmFunction();
							}}
						/>
					) : (
						<BaseSubmitButton
							type="primary"
							label={labelSubmit ? labelSubmit : "ยืนยัน"}
							htmlType="submit"
							customStyle={{ ...buttonStyle, height: "60px" }}
							icon={
								iconInSubmit ? (
									<ArrowRightOutlined className="text-base" />
								) : undefined
							}
							iconPosition="end"
							onClickFunction={() => {
								confirmFunction();
							}}
						/>
					)}
				</div>
			</div>
		</Modal>
	);
}
