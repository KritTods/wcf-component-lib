import React from "react";
import type { RuleObject } from "rc-field-form/lib/interface";
import dayjs from "./dayjs-config-th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { DatePicker, Form, ConfigProvider, type DatePickerProps } from "antd";
import locale from "antd/es/date-picker/locale/th_TH";
import thTH from "antd/locale/th_TH";
import th from "dayjs/locale/th";

dayjs.extend(buddhistEra);
dayjs.locale(th);

interface DatePickerType extends DatePickerProps {
	id: string;
	label?: string;
	rules?: RuleObject[];
	itemName?: string | string[];
	isRequired?: boolean;
}

const datePickerTh = {
	...locale,
	lang: {
		...locale.lang,
		yearFormat: "BBBB",
		dateFormat: "M/D/BBBB",
		dateTimeFormat: "M/D/BBBB HH:mm:ss",
	},
	dateFormat: "DD/MM/BBBB",
	dateTimeFormat: "DD/MM/BBBB HH:mm:ss",
	weekFormat: "BBBB-wo",
	monthFormat: "BBBB-MM",
};

const BaseItemDatePicker = (props: DatePickerType): React.ReactElement => {
	return (
		<div className="flex flex-col w-full">
			{props.label && (
				<div className="text-label mb-2">
					{props.isRequired && props.label && (
						<span className="text-red-500">* </span>
					)}
					{props.label && props.label}
				</div>
			)}
			<ConfigProvider locale={thTH}>
				{props.itemName !== undefined ? (
					<Form.Item rules={props.rules} name={props.itemName}>
						<DatePicker
							{...props}
							locale={props.locale || datePickerTh}
							format={props.format || "DD/MM/BBBB"}
							className={`h-[48px] w-full rounded ${props.className}`}
						/>
					</Form.Item>
				) : (
					<DatePicker
						{...props}
						locale={datePickerTh}
						format={props.format || "DD/MM/BBBB"}
						className={`h-[48px] w-full rounded ${props.className}`}
					/>
				)}
			</ConfigProvider>
		</div>
	);
};

export default BaseItemDatePicker;
