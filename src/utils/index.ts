import _ from "lodash";
import { BaseFormItemPosition } from "../constants/form-item-position";
import { ScopesPermissions } from "./model";
import dayjs from "dayjs";
import { UploadFile } from "antd/es/upload/interface";
import { DateFormat } from "../constants/date-format.constant";
import { v4 as uuidv4 } from "uuid";
import localeData from "dayjs/plugin/localeData";
import customParseFormat from "dayjs/plugin/customParseFormat";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { Key } from "../provider/LayoutProvider/type";
dayjs.extend(localeData);
dayjs.extend(buddhistEra);
dayjs.extend(customParseFormat);

export const getCookies = (name: string) => {
	const cookies = document.cookie
		.split("; ")
		.filter((cookie) => cookie.startsWith(`${name}=`));
	return cookies.map((cookie) => cookie.split("=")[1])[0];
};

export function handleOrderBy(orderBy: string) {
	if (orderBy === "descend") {
		return "DESC";
	} else if (orderBy === "ascend") {
		return "ASC";
	} else {
		return undefined;
	}
}

export function findScope(scopes: string[], key: string) {
	return scopes.filter((scope) => scope.startsWith(key));
}

export function getScopesPermissions(scopes: string[]) {
	return scopes.reduce(
		(acc: ScopesPermissions, scope) => {
			const [, resource] = scope.split(":");
			if (resource === "read") acc.read = resource;
			if (resource === "write") acc.write = resource;
			return acc;
		},
		{ read: null, write: null },
	);
}

export const handleLabelTopSpan = (
	labelPosition:
		| BaseFormItemPosition.LEFT
		| BaseFormItemPosition.TOP
		| BaseFormItemPosition.RIGHT,
	labelLeftSpan: number,
) => {
	if (labelPosition === BaseFormItemPosition.TOP) {
		return 24;
	} else if (labelPosition === BaseFormItemPosition.LEFT) {
		return labelLeftSpan;
	}
	return 24;
};

export const handleInputSpan = (
	labelPosition:
		| BaseFormItemPosition.LEFT
		| BaseFormItemPosition.TOP
		| BaseFormItemPosition.RIGHT,
	labelLeftSpan: number,
) => {
	if (labelPosition === BaseFormItemPosition.TOP) {
		return 24;
	} else if (labelPosition === BaseFormItemPosition.LEFT) {
		return 24 - labelLeftSpan;
	}
	return 24;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getValue = (obj: any, key: string, def = null): any => {
	let value = _.get(obj, key, def);
	if (_.isArray(obj)) {
		value = _.get(obj, `[0].${key}`, def);
	}
	if (typeof value === "number") return value;
	if (_.isArray(value) || _.isObject(value)) return value;

	return _.isNull(value) ? null : _.trim(value);
};

export const formatDateString = (
	dateString: string | number | Date | dayjs.Dayjs | null | undefined,
	inputFormat: dayjs.OptionType | undefined,
	outputFormat: string | undefined,
) => {
	if (!_.isEmpty(dateString)) {
		const date = dayjs(dateString, inputFormat, false);
		return date.isValid() ? date.format(outputFormat) : "error";
	}
	return "error";
};

export const handleUploadFiles = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	selectedFiles: UploadFile<any>[],
	subfolder = "",
) => {
	const convertedFile = convertUploadFileAnyToFile(selectedFiles);
	const formData = new FormData();
	for (let i = 0; i < convertedFile.length; i++) {
		formData.append("files", convertedFile[i]);
	}
	formData.append("subfolder", subfolder);

	return formData;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const convertUploadFileAnyToFile = (fileList: UploadFile<any>[]) => {
	const dataTransfer = new DataTransfer();
	for (let i = 0; i < fileList.length; i++) {
		const uploadFile = fileList[i];
		if (uploadFile.originFileObj) {
			dataTransfer.items.add(uploadFile.originFileObj as File);
		}
	}
	const returnFile: FileList = dataTransfer.files;
	return Array.from(returnFile);
};

export function getCurrentDateString() {
	return dayjs().format(DateFormat.DDMMYYYY).toString();
}

export function getCurrentYearString() {
	return dayjs().format(DateFormat.YYYY).toString();
}

export const handleFormatDate = (
	date: string,
	format = DateFormat.YYYYMMDD,
): string => {
	return date ? dayjs(date).format(format) : "";
};

export const changeStringToDate = (
	date: dayjs.ConfigType,
	format: dayjs.OptionType,
): dayjs.Dayjs => {
	const result = dayjs(date, format);
	return result;
};
export const changeStringToDateCheckDate = (
	date: dayjs.ConfigType,
	format: dayjs.OptionType,
): string | dayjs.Dayjs => {
	if (!date) return "";

	const result = dayjs(date, format);
	return result.isValid() ? result : "";
};

export const formatDateToCustom = (
	date: dayjs.Dayjs | string,
	format: string,
): string => {
	return dayjs(date).format(format);
};

export const calculateRowNumber = (
	index: number,
	pageSize?: number,
	pageNumber?: number,
): number => {
	if (
		_.isInteger(pageNumber) &&
		_.isInteger(pageSize) &&
		pageNumber &&
		pageSize
	) {
		return pageNumber * pageSize + index + 1;
	} else {
		return index + 1;
	}
};

export const generateUuid = () => {
	return uuidv4();
};

export const formatToTwoDecimalPlaces = (num: number): string => {
	return num.toFixed(2);
};

export const checkDisabled = <T extends string = never>(params: {
	pageLevel?: Key | T;
	disabled?: boolean;
	permission?: boolean;
}): boolean => {
	const { pageLevel, disabled, permission } = params;
	if (pageLevel) {
		return !permission || !!disabled;
	} else {
		return !!disabled;
	}
};

export const formatNumberToString = (num: number): string => {
	const result = num.toFixed(2).split(".");
	result[0] = result[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return result.join(".");
};

export const formatCompanyAccountNo = (value: string) => {
	const getValue = _.trim(value);
	if (!getValue) return "";
	if (getValue.length !== 10) {
		return value;
	}

	const formattedNumber =
		getValue.substring(0, 2) +
		"-" +
		getValue.substring(2, 9) +
		"-" +
		getValue.substring(9);

	return formattedNumber;
};

export const handleDateDiff = (date1: string, date2: string): number => {
	const startDate = dayjs(date1, "DD/MM/YYYY");
	const endDate = dayjs(date2, "DD/MM/YYYY");

	const diff = endDate.diff(startDate, "day");

	return diff;
};

export const isWithinWorkingHours = (
	time: string,
	workStart: string,
	workEnd: string,
): boolean => {
	const workStartTime = dayjs(workStart, "HH:mm");
	const workEndTime = dayjs(workEnd, "HH:mm");
	const accidentTime = dayjs(time, "HH:mm");

	return (
		accidentTime.isAfter(workStartTime.subtract(1, "minute")) &&
		accidentTime.isBefore(workEndTime.add(1, "minute"))
	);
};
