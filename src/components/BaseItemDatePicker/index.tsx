import th from "antd/es/date-picker/locale/th_TH";
import dayTh from "dayjs/locale/th";
import dayjs, { Dayjs } from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { DatePicker, FormInstance, type DatePickerProps } from "antd";
import { format as dayjsFormat } from "../../constants/dayjsFormat";
import BaseFormItemsProvider from "../../provider/BaseFormItemsProvider";
import { BaseFormProviderProps } from "../../provider/BaseFormItemsProvider/model";
import { useEffect, useRef } from "react";
import { christianYearFormat } from "../../utils/dayjs";
import usePermission from "../../hook/usePermission";
import { checkDisabled } from "../../utils";

dayjs.extend(buddhistEra);
dayjs.locale(dayTh);

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

export interface BaseItemDatePickerProps<T extends string = never>
	extends BaseFormProviderProps<T>,
		DatePickerProps {
	id?: string;
	placeholder?: string;
	showSearch?: boolean;
	className?: string;
	label?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value?: any;
	disabled?: boolean;
	children?: JSX.Element;
	itemForm?: FormInstance;
	format?: string;
	maxDate?: Dayjs;
	minDate?: Dayjs;
	onChangeDateFunction?: (date: Dayjs, dateString: string) => void;
}

export default function BaseItemDatePicker<T extends string = never>(
	props: BaseItemDatePickerProps<T>,
) {
	const {
		id,
		placeholder = "โปรดระบุ",
		className = "",
		value,
		disabled,
		picker,
		format = dayjsFormat.buddhist.date,
		itemForm,
		pageLevel,
		isStorybook = false,
		minDate,
		maxDate,
		onChangeDateFunction,
	} = props;

	const onDatePickerChange: DatePickerProps["onChange"] = (
		date,
		dateString,
	) => {
		console.log(date, dateString);
		if (onChangeDateFunction) onChangeDateFunction(date, `${dateString}`);
	};

	const datePickerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const inputElement = datePickerRef.current?.querySelector("input");
		if (inputElement) {
			inputElement.addEventListener("input", handleTyping);
		}
		return () => {
			if (inputElement) {
				inputElement.removeEventListener("input", handleTyping);
			}
		};
	}, [datePickerRef]);

	const handleTyping = (event: Event) => {
		const target = event.target as HTMLInputElement;

		const christianYear = christianYearFormat(target.value, format);

		if (christianYear.isValid() && props?.itemName && itemForm) {
			const day = String(christianYear.date()).padStart(2, "0");
			const month = String(christianYear.month() + 1).padStart(2, "0");
			const year = christianYear.year() - 543;

			const date = `${day}/${month}/${year}`;

			itemForm?.setFieldsValue({
				[props?.itemName as string]: dayjs(
					date,
					format.replace("BBBB", "YYYY"),
				),
			});
		}
	};

	const permission = usePermission(pageLevel ?? "edit", isStorybook);

	return (
		<div ref={datePickerRef}>
			<BaseFormItemsProvider<T> {...props}>
				<DatePicker
					{...(id && { id: id })}
					disabled={checkDisabled<T>({ pageLevel, disabled, permission })}
					className={`h-[48px] w-full rounded ${className}`}
					placeholder={placeholder}
					value={value}
					locale={buddhistLocale}
					picker={picker}
					format={format}
					minDate={minDate}
					maxDate={maxDate}
					onChange={(date, dateString) =>
						onDatePickerChange(date as Dayjs, dateString)
					}
				/>
			</BaseFormItemsProvider>
		</div>
	);
}
