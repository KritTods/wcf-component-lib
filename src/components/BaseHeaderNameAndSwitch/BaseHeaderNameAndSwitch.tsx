import { BaseFormItemPosition } from "../../constants/form-item-position";
import Row from "antd/es/row";
import Col from "antd/es/col";
// import "./style.css";
import BaseItemSwitch from "../BaseItemSwitch/BaseItemSwitch";
import ClockCircleOutlined from "@ant-design/icons/lib/icons/ClockCircleOutlined";
import BaseSubmitButton from "../BaseSubmitButton/BaseSubmitButton";
import { Key } from "../../provider/LayoutProvider/type";

export interface BaseHeaderNameAndSwitchProps {
	onChangeSwitchFunction: (e: boolean) => void;
	switchCheckValue: boolean;
	onClickHistoryButtonFunction?: () => void;
	textHeader?: string;
	disabled?: boolean;
	isShowHeaderSwitch?: boolean;
	disabledHistoryButton?: boolean;
	pageLevel?: Key;
}

export default function BaseHeaderNameAndSwitch(
	props: BaseHeaderNameAndSwitchProps,
) {
	const {
		onChangeSwitchFunction,
		switchCheckValue,
		disabled = false,
		onClickHistoryButtonFunction = () => {},
		textHeader = "",
		isShowHeaderSwitch = true,
		disabledHistoryButton = false,
		pageLevel,
	} = props;

	return (
		<>
			<Row gutter={24}>
				<Col span={!isShowHeaderSwitch ? 24 : 12} className="flex items-center">
					<label className=" text-xl self-left">{textHeader}</label>
				</Col>
				{isShowHeaderSwitch && (
					<Col span={12} className="flex justify-end">
						{!disabledHistoryButton && (
							<BaseSubmitButton
								type="cancel"
								className="text-base font-semibold mr-3"
								label="ประวัติการแก้ไข"
								onClickFunction={() => {
									onClickHistoryButtonFunction();
								}}
								icon={<ClockCircleOutlined />}
								customStyle={{
									width: "175px",
									height: "48px",
									borderRadius: "99px",
								}}
							/>
						)}
						<Row gutter={24} className="items-center">
							<Col span={24}>
								<BaseItemSwitch
									labelPosition={BaseFormItemPosition.LEFT}
									itemName={"isActive"}
									label="สถานะ"
									checked={switchCheckValue}
									onChangeFunction={(e) => {
										onChangeSwitchFunction(e);
									}}
									switchClassName={"mb-0 "}
									disabled={disabled}
									secondaryLabel={switchCheckValue ? "ใช้งาน" : "ปิดใช้งาน"}
									customStyleSecondaryLabel={{ width: "80px" }}
									pageLevel={pageLevel}
								/>
							</Col>
						</Row>
					</Col>
				)}
			</Row>
		</>
	);
}
