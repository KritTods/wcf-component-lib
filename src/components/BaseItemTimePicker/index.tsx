import React from "react";
import _ from "lodash";
import { TimePicker } from "antd";
import BaseFormItemsProvider from "../../provider/BaseFormItemsProvider";
import { BaseFormProviderProps } from "../../provider/BaseFormItemsProvider/model";
import { format } from "../../constants/dayjsFormat";

export interface BaseItemTimePickerProps extends BaseFormProviderProps {
	id?: string;
	placeholder?: string;
	showSearch?: boolean;
	className?: string;
	label?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value?: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	disabled?: boolean;
	children?: JSX.Element;
}

export default function BaseItemTimePicker(
	props: BaseItemTimePickerProps,
): React.ReactElement {
	const {
		id,
		placeholder = "เวลาเริ่มต้น",
		rules = [],
		value,
		disabled,
	} = props;

	return (
		<BaseFormItemsProvider {...props}>
			<TimePicker
				{...(id && { id: id })}
				disabled={disabled}
				className={`h-[48px] text-2xl w-full rounded ${_.isEmpty(rules) ? "mb-0" : ""}`}
				placeholder={placeholder}
				value={value}
				format={format.time}
			/>
		</BaseFormItemsProvider>
	);
}
