import React from "react";
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import { BaseFormMaster } from "../../components/BaseFormMaster";
import { Store } from "antd/es/form/interface";
import { BaseItemInput } from "../../components/BaseItemInput";
import { requiredRule } from "../../rules/FormRulesFunction";
import { BaseHeaderNameAndSwitchProps } from "../../components/BaseHeaderNameAndSwitch/BaseHeaderNameAndSwitch";
import { BaseFormProps } from "../../components/BaseForm";
import { BaseButton } from "../../components";
import { Key } from "../../provider/LayoutProvider/type";
// import dayjs from "dayjs";
// import _ from "lodash";
// import { DateFormat } from "../../constants/date-format.constant";

/**
 * ไม่ extends BaseFormMasterProps เนื่องจาก BaseFormMasterProps ต้องการ prop child
 * ถ้า extends ตรงๆ ด้านนอกจะต้องส่ง prop child เข้ามาเอง แต่เนื่องจากเป็นการส่ง prop child ภายนี้ในไฟล์เอง
 */
export interface MasterDataProps
	extends BaseFormProps,
		BaseHeaderNameAndSwitchProps {
	inputs: React.ReactNode;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onFinish: (values: any) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onFinishFailed?: (values: any) => void;
	onChangeSwitchFunction: (e: boolean) => void;
	switchCheckValue: boolean;
	cancelFunction: () => void;
	initialValues?: Store;
	disabled?: boolean;
	isEdit?: boolean;
	textHeader?: string;
	pageLevel?: Key;
}

const MasterDataFormLayout = (props: MasterDataProps) => {
	const {
		inputs,
		onFinish,
		onFinishFailed,
		onChangeSwitchFunction,
		switchCheckValue,
		cancelFunction,
		initialValues = undefined,
		disabled = true,
		isEdit = false,
		textHeader = "",
		isShowHeaderSwitch = true,
		onValuesChange,
		pageLevel,
	} = props;

	return (
		<>
			<div className="rounded-t-lg w-full flex flex-col relative pt-8 pb-14 px-5 bg-white">
				<BaseFormMaster
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					isShowHeaderSwitch={isShowHeaderSwitch}
					initialValues={initialValues}
					textHeader={textHeader}
					onChangeSwitchFunction={(e) => onChangeSwitchFunction(e)}
					switchCheckValue={switchCheckValue}
					onValuesChange={onValuesChange}
					pageLevel={pageLevel}
					child={
						<>
							{inputs}
							{isEdit && (
								<Row gutter={24}>
									<Col span={6}>
										<BaseItemInput
											disabled={disabled}
											label="วันที่อัปเดต"
											itemName="updatedDate"
											rules={[requiredRule("วันที่อัปเดต")]}
										/>
									</Col>
									<Col span={6}>
										<BaseItemInput
											disabled={disabled}
											label="วันที่สร้าง"
											itemName="createdDate"
											rules={[requiredRule("วันที่สร้าง")]}
										/>
									</Col>
									<Col span={6}>
										<BaseItemInput
											disabled={disabled}
											label="สร้างโดย"
											itemName="createdBy"
											rules={[requiredRule("สร้างโดย")]}
											value={""}
										/>
									</Col>
									<Col span={6}>
										<BaseItemInput
											disabled={disabled}
											label="อัปเดตโดย"
											itemName="updatedBy"
											rules={[requiredRule("อัปเดตโดย")]}
										/>
									</Col>
								</Row>
							)}
							<div
								className="flex justify-center space-x-6 items-center"
								style={{ marginTop: "205px" }}
							>
								<BaseButton
									type="cancel"
									label="ยกเลิก"
									onClick={() => {
										cancelFunction();
									}}
									pageLevel={pageLevel}
								/>
								<BaseButton
									type="primary"
									iconType="save"
									label="บันทึก"
									htmlType="submit"
									pageLevel={pageLevel}
								/>
							</div>
						</>
					}
				/>
			</div>
		</>
	);
};

export default MasterDataFormLayout;
