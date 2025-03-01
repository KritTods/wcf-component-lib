import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import _ from "lodash";
import { DateFormatBuddhist } from "../constants/date-format.constant";
import dayTh from "dayjs/locale/th";

dayjs.extend(buddhistEra);
dayjs.locale(dayTh);

export const convertDateFormatBuddhist = (
	date: string | null,
	format: DateFormatBuddhist,
): string => {
	if (_.isNil(date) || _.isEmpty(date)) return "";

	const parsedDate = dayjs(date);

	// Check if the date is valid
	if (!parsedDate.isValid()) {
		return "Invalid date"; // Return a specific message if the date is invalid
	}

	const formattedDate = parsedDate.format(format.toString());
	return formattedDate;
};
