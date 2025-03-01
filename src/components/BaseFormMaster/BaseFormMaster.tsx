import React from "react";
import Row from "antd/es/row";
import BaseForm, { BaseFormProps } from "../BaseForm";
import BaseHeaderNameAndSwitch, {
	BaseHeaderNameAndSwitchProps,
} from "../BaseHeaderNameAndSwitch/BaseHeaderNameAndSwitch";
import { FormInstance } from "antd/es/form";
import { Key } from "../../provider/LayoutProvider/type";

export interface BaseFormMasterProps
	extends BaseFormProps,
		BaseHeaderNameAndSwitchProps {
	child: React.ReactNode;
	onChangeSwitchFunction: (e: boolean) => void;
	switchCheckValue: boolean;
	onClickHistoryButtonFunction?: () => void;
	textHeader?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	extraForm?: FormInstance<any>;
	disabledHistoryButton?: boolean;
	pageLevel?: Key;
}

export default function BaseFormMaster(props: BaseFormMasterProps) {
	const {
		child,
		name,
		autoComplete = "off",
		size = "large",
		onFinish,
		onFinishFailed,
		initialValues = undefined,
		onChangeSwitchFunction,
		switchCheckValue,
		// disabled = false,
		onClickHistoryButtonFunction = () => {},
		textHeader = "",
		isShowHeaderSwitch = true,
		extraForm,
		disabledHistoryButton,
		layout,
		pageLevel,
	} = props;

	return (
		<>
			<Row>
				<BaseForm
					extraForm={extraForm}
					name={name}
					initialValues={{
						...initialValues,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete={autoComplete}
					size={size}
					layout={layout}
					{...props}
				>
					<>
						<BaseHeaderNameAndSwitch
							onChangeSwitchFunction={onChangeSwitchFunction}
							switchCheckValue={switchCheckValue}
							onClickHistoryButtonFunction={onClickHistoryButtonFunction}
							disabledHistoryButton={disabledHistoryButton}
							textHeader={textHeader}
							isShowHeaderSwitch={isShowHeaderSwitch}
							pageLevel={pageLevel}
						/>
						<div className="px-2">
							<hr className="my-4 px-2"></hr>
							{child}
						</div>
					</>
				</BaseForm>
			</Row>
		</>
	);
}
