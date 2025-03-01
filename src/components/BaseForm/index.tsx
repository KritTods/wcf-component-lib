import React, { useEffect, useState } from "react";
import Form, { FormInstance } from "antd/es/form";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Store } from "antd/es/form/interface";
import _ from "lodash";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { FormLayout } from "antd/es/form/Form";
dayjs.extend(customParseFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);

export interface BaseFormProps {
	children?: React.ReactNode;
	name?: string;
	autoComplete?: string;
	size?: SizeType;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onFinish?: (values: any) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onFinishFailed?: (values: any) => void;
	initialValues?: Store;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onValuesChange?: (values: any) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onValuesBlur?: (values: any) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	extraForm?: FormInstance<any>;
	layout?: FormLayout;
}

export default function BaseForm(props: BaseFormProps) {
	const [form] = Form.useForm();
	const {
		children,
		name,
		autoComplete = "off",
		layout,
		size = "large",
		onFinish,
		onFinishFailed,
		onValuesChange,
		onValuesBlur,
		initialValues = undefined,
		extraForm = form,
	} = props;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleValues = (initialValues: any) => {
		const clonedInitialValues = _.cloneDeep(initialValues);
		for (const key in clonedInitialValues) {
			if (_.isString(clonedInitialValues[key])) {
				clonedInitialValues[key] = _.trim(clonedInitialValues[key]);
			}
		}
		extraForm.setFieldsValue(clonedInitialValues);
	};

	const [temp, setTemp] = useState<Store | undefined>();

	useEffect(() => {
		if (initialValues && _.isEmpty(temp)) {
			setTemp(initialValues);
			handleValues(initialValues);
		}
		if (!_.isEmpty(temp)) {
			const isEqual = _.isEqual(temp, extraForm.getFieldsValue());
			if (isEqual) handleValues(initialValues);
			else extraForm.setFieldsValue(initialValues);
		}
	}, [initialValues]);

	return (
		<Form
			name={name}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete={autoComplete}
			size={size}
			form={extraForm}
			className="w-full"
			onBlur={(e) => {
				if (onValuesBlur) onValuesBlur({ [e.target.id]: e.target.value });
			}}
			onValuesChange={(e) => {
				if (onValuesChange) onValuesChange(e);
			}}
			layout={layout}
		>
			{children}
		</Form>
	);
}
