import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/th";

import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.locale("th");
dayjs.extend(buddhistEra);

import DatePicker, { DatePickerProps } from "antd/es/date-picker";
import _ from "lodash";
import { DateFormat } from "../../constants/date-format.constant";

import BaseFormItemsProvider from "../../provider/BaseFormItemsProvider";
import "./style.scss";
import { BaseFormProviderProps } from "../../provider/BaseFormItemsProvider/model";
import usePermission from "../../hook/usePermission";
import { checkDisabled } from "../../utils";
export interface Props<T extends string = never>
	extends BaseFormProviderProps<T> {
	onChangeDateFunction?: (date: string) => void;
}

export default function BaseDatePicker<T extends string = never>(
	props: Props<T>,
) {
	const {
		onChangeDateFunction,
		rules = [],
		value,
		disabled = false,
		pageLevel,
		isStorybook = false,
	} = props;

	const onDatePickerChange: DatePickerProps["onChange"] = (
		date,
		dateString,
	) => {
		console.log(date, dateString);
		if (onChangeDateFunction) onChangeDateFunction(`${dateString}`);
	};

	const permission = usePermission(pageLevel ?? "edit", isStorybook);

	return (
		<>
			<BaseFormItemsProvider<T> {...props}>
				<DatePicker
					className={`h-[48px] text-2xl w-full rounded ${_.isEmpty(rules) ? "mb-0" : ""}`}
					// onChange={onDatePickerChange}
					onChange={(date, dateString) =>
						onDatePickerChange(date as Dayjs, dateString)
					}
					style={{ fontSize: "14px" }}
					placeholder="โปรดระบุ"
					value={
						dayjs(value, DateFormat.YYYYMMDD).isValid()
							? dayjs(value, DateFormat.YYYYMMDD)
							: undefined
					}
					disabled={checkDisabled<T>({ pageLevel, disabled, permission })}
				/>
			</BaseFormItemsProvider>
		</>
	);
}
