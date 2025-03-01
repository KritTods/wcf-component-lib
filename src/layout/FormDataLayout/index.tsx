import React, { useEffect } from "react";
import { BaseSubmitButton } from "../../components/BaseSubmitButton";
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import { Store } from "antd/es/form/interface";
import { BaseItemInput } from "../../components/BaseItemInput";
import { requiredRule } from "../../rules/FormRulesFunction";
import SaveOutlined from "@ant-design/icons/lib/icons/SaveOutlined";
import BaseForm, { BaseFormProps } from "../../components/BaseForm";
import { FormInstance } from "antd/es/form";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { formatDateString } from "../../utils";
import _ from "lodash";
import { DateFormat } from "../../constants/date-format.constant";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);

export interface FormDataLayoutProps extends BaseFormProps {
	id?: string;
	inputs: React.ReactNode;
	content?: React.ReactNode;
	footer?: React.ReactNode;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onFinish: (values: any) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onFinishFailed?: (values: any) => void;
	onChangeSwitchFunction?: (e: boolean) => void;
	switchCheckValue?: boolean;
	cancelFunction: () => void;
	initialValues?: Store;
	disabled?: boolean;
	isEdit?: boolean;
	textHeader?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	extraForm: FormInstance<any>;
	disabledHistoryButton?: boolean;
	onClickHistoryButtonFunction?: () => void;
	isShowHeaderSwitch?: boolean;
	labelButtonSubmit?: string;
	iconButtonSubmit?: JSX.Element;
	labelButtonCancel?: string;
	outside?: boolean;
}

const FormDataLayout = (props: FormDataLayoutProps) => {
	const {
		id,
		name,
		inputs,
		onFinish,
		onFinishFailed = () => {},
		onChangeSwitchFunction,
		switchCheckValue,
		cancelFunction,
		initialValues = undefined,
		disabled = false,
		isEdit = false,
		textHeader = "",
		isShowHeaderSwitch = true,
		extraForm,
		onClickHistoryButtonFunction = () => {},
		disabledHistoryButton,
		layout,
		content,
		footer,
		labelButtonSubmit = "บันทึก",
		iconButtonSubmit = <SaveOutlined />,
		labelButtonCancel = "ยกเลิก",
		outside = true,
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
				DateFormat.DDMMYYYY,
			),
			createdDate: formatDateString(
				_.get(clonedInitialValues, "createdDate"),
				DateFormat.YYYYMMDDTHHmmss,
				DateFormat.DDMMYYYY,
			),
			createdDateAndBy: `${
				clonedInitialValues.createdBy +
				" (" +
				formatDateString(
					_.get(clonedInitialValues, "createdDate"),
					DateFormat.YYYYMMDDTHHmmss,
					DateFormat.DDMMYYYYHHmmss,
				) +
				")"
			}`,
			updatedDateAndBy: `${
				clonedInitialValues.lastUpdatedBy +
				" (" +
				formatDateString(
					_.get(clonedInitialValues, "lastUpdatedDate"),
					DateFormat.YYYYMMDDTHHmmss,
					DateFormat.DDMMYYYYHHmmss,
				) +
				")"
			}`,
		};
		extraForm.setFieldsValue(value);
	};

	useEffect(() => {
		handleValues(initialValues);
	}, [initialValues]);

	return (
		<BaseForm
			extraForm={extraForm}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			name={name}
			initialValues={initialValues}
			layout={layout}
		>
			<div className="rounded-2xl w-full flex flex-col relative mx-4 pt-8 pb-14 px-5 bg-white">
				<Row>
					<Col
						span={!isShowHeaderSwitch ? 24 : 12}
						className="flex items-center"
					>
						<label className=" text-xl self-left">{textHeader}</label>
					</Col>
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
					</Col>
				</Row>
				<hr className="my-4 px-2"></hr>

				<div className="w-full">
					{inputs}
					{isEdit && (
						<Row gutter={24} className="my-8">
							<Col span={12}>
								<BaseItemInput
									disabled={true}
									label="ผู้ที่ทำการบันทึก :"
									itemName="createdDateAndBy"
									rules={[requiredRule("createdDateAndBy")]}
									value={""}
								/>
							</Col>
							<Col span={12}>
								<BaseItemInput
									disabled={true}
									label="ผู้ที่ทำการแก้ไข :"
									itemName="updatedDateAndBy"
									rules={[requiredRule("updatedDateAndBy")]}
									value={""}
								/>
							</Col>
							{/* <Col span={6}>
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
							</Col> */}
						</Row>
					)}
					{!footer && !outside ? (
						<ButtonComponentLayout
							cancelFunction={cancelFunction}
							disabled={disabled}
							id={id}
							labelButtonSubmit={labelButtonSubmit}
							iconButtonSubmit={iconButtonSubmit}
							labelButtonCancel={labelButtonCancel}
						/>
					) : null}
				</div>
			</div>
			{content}
			{footer && (
				<div className="rounded-2xl w-full flex flex-col relative m-4 mb-0 pt-8 px-5 bg-white">
					{footer}
					{!outside && (
						<div className="w-full flex flex-col relative pt-6 pb-14 px-5 ">
							<ButtonComponentLayout
								cancelFunction={cancelFunction}
								disabled={disabled}
								id={id}
								labelButtonSubmit={labelButtonSubmit}
								iconButtonSubmit={iconButtonSubmit}
								labelButtonCancel={labelButtonCancel}
							/>
						</div>
					)}
				</div>
			)}
			{outside && (
				<div className="w-full flex flex-col relative pt-6 pb-14 px-5 ">
					<ButtonComponentLayout
						cancelFunction={cancelFunction}
						disabled={disabled}
						id={id}
						labelButtonSubmit={labelButtonSubmit}
						iconButtonSubmit={iconButtonSubmit}
						labelButtonCancel={labelButtonCancel}
					/>
				</div>
			)}
		</BaseForm>
	);
};

interface ButtonComponentLayoytProps {
	cancelFunction: () => void;
	disabled?: boolean;
	id?: string;
	labelButtonSubmit: string;
	iconButtonSubmit?: JSX.Element;
	labelButtonCancel: string;
}

const ButtonComponentLayout = (props: ButtonComponentLayoytProps) => {
	const {
		cancelFunction,
		disabled,
		id,
		labelButtonSubmit,
		iconButtonSubmit,
		labelButtonCancel,
	} = props;
	return (
		<Row gutter={24}>
			<Col span={24} className="text-center flex items-center justify-center">
				<BaseSubmitButton
					{...(id && { id: `${id}-cancel` })}
					type="cancel"
					className="text-base font-semibold"
					label={labelButtonCancel}
					onClickFunction={() => {
						cancelFunction();
					}}
					customStyle={{
						width: "220px",
						height: "60px",
						borderRadius: "99px",
					}}
				/>
				{!disabled && (
					<BaseSubmitButton
						{...(id && { id: `${id}-submit` })}
						type="primary"
						className="text-base font-semibold ml-6 text-white"
						label={labelButtonSubmit}
						htmlType="submit"
						customStyle={{
							minWidth: "220px",
							height: "60px",
							borderRadius: "99px",
							maxWidth: "400px",
						}}
						icon={iconButtonSubmit}
					/>
				)}
			</Col>
		</Row>
	);
};

export default FormDataLayout;
