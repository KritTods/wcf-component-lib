import Modal from "antd/es/modal";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import BaseSubmitButton, {
	ButtonTypes,
} from "../BaseSubmitButton/BaseSubmitButton";
import _ from "lodash";
import { HistoryOutlined, SaveOutlined } from "@ant-design/icons";
import DivPermission from "../BaseDivPermission";
import { Key } from "../../provider/LayoutProvider/type";
import Row from "antd/es/row";
import Col from "antd/es/col";
import Switch from "antd/es/switch";
import { BaseItemInput } from "../BaseItemInput";
import { requiredRule } from "../../rules/FormRulesFunction";
import BaseForm from "../BaseForm";
import { Store } from "antd/es/form/interface";
import { FormInstance } from "antd/es/form";
import { FormLayout } from "antd/es/form/Form";
import { useEffect } from "react";
import { formatDateString } from "../../utils";
import { DateFormat } from "../../constants/date-format.constant";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "./style.scss";

dayjs.extend(customParseFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
export interface BaseModalFormProps {
	id?: string;
	isOpen: boolean;
	handleSubmit?: () => void;
	headerText?: string;
	descriptionText?: string;
	cancelFunction: () => void;
	closeFunction: () => void;
	headerLeftIcon?: React.ReactNode | undefined;
	content?: React.ReactNode;
	isStoryBook?: boolean;
	pageLevel?: Key;
	switchCheckValue?: boolean;
	onChangeSwitchFunction?: (e: boolean) => void;
	isEdit?: boolean;
	inputs?: React.ReactNode;
	initialValues?: Store;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onFinish?: (values: any) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	extraForm?: FormInstance<any>;
	layout?: FormLayout;
	disabled?: boolean;
	hideSubmitButton?: boolean;
	labelButtonSubmit?: string;
	iconButtonSubmit?: JSX.Element;
	showButtonAll?: boolean;
	minWidth?: string;
	contentPaddingNo?: boolean;
	showIconHeader?: boolean;
	labelButtonCancel?: string;
	TypeButtonCancel?: ButtonTypes;
	showUnderLineHeader?: boolean;
	showHeaderAll?: boolean;
}

export default function BaseModalForm(props: BaseModalFormProps) {
	const {
		id,
		isOpen,
		handleSubmit,
		headerText,
		descriptionText,
		cancelFunction,
		closeFunction,
		headerLeftIcon = undefined,
		content,
		pageLevel = "form",
		switchCheckValue,
		onChangeSwitchFunction,
		isEdit,
		inputs,
		extraForm,
		onFinish,
		initialValues,
		layout,
		disabled = false,
		hideSubmitButton,
		labelButtonSubmit = "บันทึก",
		iconButtonSubmit = <SaveOutlined className="text-base" />,
		showButtonAll = true,
		minWidth,
		contentPaddingNo = false,
		showIconHeader = true,
		isStoryBook,
		labelButtonCancel = "ยกเลิก",
		TypeButtonCancel = "cancel",
		showUnderLineHeader = true,
		showHeaderAll = true,
	} = props;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleValues = (initialValues: any) => {
		const clonedInitialValues = _.cloneDeep(initialValues);
		for (const key in clonedInitialValues) {
			const value = clonedInitialValues[key];
			if (_.isString(value)) {
				clonedInitialValues[key] = _.trim(value);
			}
			if (dayjs(value, DateFormat.YYYYMMDD, true).isValid()) {
				clonedInitialValues[key] = dayjs(value, DateFormat.YYYYMMDD);
			}
		}
		const value = {
			...clonedInitialValues,
			lastUpdateDate: formatDateString(
				_.get(clonedInitialValues, "lastUpdatedDate"),
				DateFormat.YYYYMMDDTHHmmss,
				DateFormat.DDMMYYYYHHmmss,
			),
			createdDate: formatDateString(
				_.get(clonedInitialValues, "createdDate"),
				DateFormat.YYYYMMDDTHHmmss,
				DateFormat.DDMMYYYYHHmmss,
			),
		};
		extraForm && extraForm.setFieldsValue(value);
	};

	useEffect(() => {
		handleValues(initialValues);
	}, [initialValues]);

	return (
		<Modal
			open={isOpen}
			centered
			maskClosable={false}
			footer={null}
			style={{
				minWidth: minWidth ? minWidth : "950px",
				// maxWidth: "90%",
			}}
			closable={false}
			className={`base-modal-form ${contentPaddingNo ? "content-padding-no" : ""}`}
		>
			<div className={"flex flex-col w-full gap-3"}>
				{showHeaderAll && (
					<div
						className={`header flex justify-between mb-6 ${contentPaddingNo ? "p-5" : ""}`}
					>
						<div className="flex gap-4 items-start">
							{showIconHeader && (
								<>
									{_.isUndefined(headerLeftIcon) ? (
										<HistoryOutlined
											className="text-4xl"
											style={{
												color: "#1C4651",
											}}
										/>
									) : (
										<>{headerLeftIcon}</>
									)}
								</>
							)}
							<div className="flex flex-col gap-4 justify-center items-start">
								{headerText && (
									<p
										style={{
											fontSize: "22px",
											fontWeight: 600,
											color: "#1C4651",
										}}
									>
										{headerText}
									</p>
								)}
								{descriptionText && (
									<p
										style={{
											fontSize: "12px",
											fontWeight: 400,
											color: "#1C4651",
										}}
									>
										{descriptionText}
									</p>
								)}
							</div>
						</div>
						<div className="flex items-start">
							{onChangeSwitchFunction && (
								<Row gutter={24} className="items-center">
									<Col span={24} className="mb-0 flex">
										<label className="mr-2 text-xl self-center">สถานะ</label>
										<Switch
											className="self-center"
											checked={switchCheckValue}
											onChange={(e: boolean) => {
												onChangeSwitchFunction(e);
											}}
											disabled={disabled}
										/>
										<label className="ml-2 text-xl" style={{ width: "100px" }}>
											{switchCheckValue ? "ใช้งาน" : "ปิดใช้งาน"}
										</label>
									</Col>
								</Row>
							)}

							<CloseOutlined
								className="cursor-pointer font-bold text-4xl"
								onClick={() => {
									closeFunction();
								}}
							/>
						</div>
					</div>
				)}
				{showUnderLineHeader && <hr className="px-2"></hr>}
				<div className="my-4 w-full">
					{content ? (
						<>{content}</>
					) : (
						<BaseForm
							extraForm={extraForm}
							onFinish={onFinish}
							initialValues={initialValues}
							layout={layout}
						>
							<>
								{inputs}
								{isEdit && (
									<Row gutter={24} className="my-8">
										<Col span={6}>
											<BaseItemInput
												disabled={true}
												label="Date Updated"
												itemName="lastUpdateDate"
												rules={[requiredRule("Date Updated")]}
												value={""}
											/>
										</Col>
										<Col span={6}>
											<BaseItemInput
												disabled={true}
												label="Date Create"
												itemName="createdDate"
												rules={[requiredRule("createdDate")]}
												value={""}
											/>
										</Col>
										<Col span={6}>
											<BaseItemInput
												disabled={true}
												label="Create By"
												itemName="createdBy"
												rules={[requiredRule("Create By")]}
												value={""}
											/>
										</Col>
										<Col span={6}>
											<BaseItemInput
												disabled={true}
												label="Updated By"
												itemName="lastUpdatedBy"
												rules={[requiredRule("Updated By")]}
												value={""}
											/>
										</Col>
									</Row>
								)}
							</>
						</BaseForm>
					)}
				</div>
				{showButtonAll && (
					<div className="py-5  flex justify-center">
						<BaseSubmitButton
							{...(id ? { id: `${id}-cancel` } : {})}
							type={TypeButtonCancel}
							label={labelButtonCancel}
							onClickFunction={() => {
								cancelFunction();
							}}
							customStyle={{
								minWidth: "218px",
								height: "60px",
								marginRight: "24px",
							}}
						/>
						{pageLevel && !isStoryBook ? (
							<DivPermission pageLevel={pageLevel}>
								{hideSubmitButton ? (
									<></>
								) : (
									<BaseSubmitButton
										{...(id ? { id: `${id}-submit` } : {})}
										type="primary"
										label={labelButtonSubmit}
										htmlType="submit"
										icon={iconButtonSubmit}
										iconPosition="start"
										onClickFunction={() => {
											handleSubmit && handleSubmit();
										}}
										customStyle={{
											minWidth: "218px",
											height: "60px",
										}}
									/>
								)}
							</DivPermission>
						) : hideSubmitButton ? (
							<></>
						) : (
							<BaseSubmitButton
								{...(id ? { id: `${id}-submit` } : {})}
								type="primary"
								label={labelButtonSubmit}
								htmlType="submit"
								icon={iconButtonSubmit}
								iconPosition="start"
								onClickFunction={() => {
									handleSubmit && handleSubmit();
								}}
								customStyle={{
									minWidth: "218px",
									height: "60px",
								}}
							/>
						)}
					</div>
				)}
			</div>
		</Modal>
	);
}
