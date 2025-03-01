import dayjs from "dayjs";
import { DateFormat } from "../../../constants/date-format.constant";
import _ from "lodash";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleFormItemValue = (value: any) => {
	if (_.isNil(value)) {
		return { value: null };
	} else if (dayjs(value, DateFormat.YYYYMMDD, true).isValid()) {
		return { value: dayjs(value, DateFormat.YYYYMMDD) };
	} else if (dayjs(value, DateFormat.YYYYMMDDTHHmmss, true).isValid()) {
		return { value: dayjs(value, DateFormat.YYYYMMDDTHHmmss) };
	} else return { value };
};
