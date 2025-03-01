import React from "react";
import _ from "lodash";
import th from "antd/es/date-picker/locale/th_TH";
import dayTh from "dayjs/locale/th";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { DatePicker } from "antd";
import BaseFormItemsProvider from "../../provider/BaseFormItemsProvider";
import { BaseFormProviderProps } from "../../provider/BaseFormItemsProvider/model";
import { RangePickerProps } from "antd/es/date-picker";
import { format as dayjsFormat } from "../../constants/dayjsFormat";
import { DateFormat } from "../../constants/date-format.constant";

dayjs.extend(buddhistEra);
dayjs.locale(dayTh);
const { RangePicker } = DatePicker;

const buddhistLocale: typeof th = {
	...th,
	lang: {
		...th.lang,
		fieldDateFormat: dayjsFormat.buddhist.date,
		fieldDateTimeFormat: dayjsFormat.buddhist.dateTime,
		yearFormat: dayjsFormat.buddhist.year,
		cellYearFormat: dayjsFormat.buddhist.year,
	},
};

export interface BaseItemDateRangePickerProps
	extends BaseFormProviderProps,
		RangePickerProps {
	id?: string;
	placeholder?: [string, string];
	showSearch?: boolean;
	className?: string;
	label?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value?: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	disabled?: boolean;
	children?: JSX.Element;
	onChangeRangePicker?: (dateString: string[] | null) => void;
}
export default function BaseItemDateRangePicker(
	props: BaseItemDateRangePickerProps,
): React.ReactElement {
	const {
		id,
		placeholder = ["โปรดระบุ", "โปรดระบุ"],
		rules = [],
		value,
		disabled,
		onChangeRangePicker = () => {},
	} = props;

	return (
		<BaseFormItemsProvider {...props}>
			<RangePicker
				{...(id && { id })}
				disabled={disabled}
				className={`h-12 text-2xl w-full rounded ${_.isEmpty(rules) ? "mb-0" : ""}`}
				placeholder={placeholder}
				value={value}
				locale={buddhistLocale}
				onChange={(e) => {
					if (e) {
						const startDate = dayjs(e[0]).format(DateFormat.YYYYMMDD);
						const endDate = dayjs(e[1]).format(DateFormat.YYYYMMDD);
						onChangeRangePicker([startDate, endDate]);
					} else {
						onChangeRangePicker(null);
					}
				}}
			/>
		</BaseFormItemsProvider>
	);
}
