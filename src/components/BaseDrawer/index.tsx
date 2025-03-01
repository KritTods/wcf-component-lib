import Drawer, { DrawerProps } from "antd/es/drawer";
import React from "react";
import Column from "../BaseColumn";
import Row from "../BaseRow";
import { handleOnClose, handleOnConfirm } from "./service";
import "./style.css";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import BaseButton from "../BaseButton";

export interface Props {
	id?: string;
	loading?: boolean;
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
	content: React.ReactNode;
	label?: string;
	anchor?: DrawerProps["placement"];
	isFilter?: boolean;
	confirmFuntion?: () => void;
	clearFilter?: () => void;
	onClose?: () => void;
	handleSubmitFilter?: () => void;
	submitLabel?: string;
}

const BaseDrawer = (props: Props) => {
	const {
		id,
		loading = false,
		isOpen,
		setIsOpen = () => {},
		onClose = () => {},
		content,
		label = "ตัวกรอง",
		anchor,
		confirmFuntion = () => {},
		clearFilter = () => {},
		handleSubmitFilter,
		submitLabel,
	} = props;
	return (
		<Drawer
			title={label ?? ""}
			key={anchor ?? "right"}
			open={isOpen}
			width={"30%"}
			footer={
				<Row className="flex flex-row gap-3 items-center w-full p-3">
					<BaseButton
						{...(id && { id: `${id}-Drawer-clearFilter` })}
						onClick={clearFilter}
						type="default"
						className="text-base"
						customSizeStyle="w-1/2 px-3 py-5"
						label="ล้าง"
					/>
					<BaseButton
						{...(id && { id: `${id}-Drawer-submit` })}
						loading={loading}
						onClick={() =>
							handleSubmitFilter
								? handleSubmitFilter()
								: handleOnConfirm(confirmFuntion, setIsOpen)
						}
						type="primary"
						htmlType="submit"
						className="text-base"
						customSizeStyle="w-1/2 px-3 py-5"
						label={submitLabel || "ยืนยัน"}
					/>
				</Row>
			}
		>
			<div className="border-b-2 border-[#00000033] px-6 pt-6 pb-4">
				<Row className="justify-between items-center">
					<p className="text-[28px] leading-[32px] font-bold">{label}</p>

					<CloseOutlined
						onClick={() => handleOnClose(onClose, setIsOpen)}
						{...(id && { id: `${id}-Drawer-CloseOutlined` })}
					/>
				</Row>
			</div>
			<Column className="p-6">{content}</Column>
			{/* {isFilter && (
				<div className="flex flex-col flex-grow justify-end px-6 py-4">
					<div className="w-full px-6 pt-6 pb-4 ">
						<Row className="justify-center items-center space-x-6">
							<Button
								{...(id && { id: `${id}-Drawer-clearFilter` })}
								onClick={clearFilter}
								className="border-2 w-full border-solid border-[#2196F380]"
							>
								ล้าง
							</Button>
							<Button
								{...(id && { id: `${id}-Drawer-submit` })}
								loading={loading}
								className="bg-[#2196F3] w-full text-white"
								onClick={() =>
									handleSubmitFilter
										? handleSubmitFilter()
										: handleOnConfirm(confirmFuntion, setIsOpen)
								}
								type="primary"
								htmlType="submit"
							>
								ยืนยัน
							</Button>
						</Row>
					</div>
				</div>
			)} */}
			{/* </Form> */}
		</Drawer>
	);
};

export default BaseDrawer;
