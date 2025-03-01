import { format } from "../constants/dayjsFormat";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";

dayjs.extend(buddhistEra);

export function formatToDateTime(date: string, format: string): string {
	return dayjs(date).format(format);
}

interface ObjectToDate {
	date: string;
	month: string;
	year: string;
}

export function formatObjectToString({
	date,
	month,
	year,
}: ObjectToDate): string {
	const paddedDate = String(date).padStart(2, "0");
	const paddedMonth = String(month).padStart(2, "0");
	const formattedDate = `${paddedDate}-${paddedMonth}-${dayjs(year).format(format.year)}`;

	return formattedDate;
}

export const christianYearFormat = (value: string, format: string) =>
	dayjs(value, format.replace("BBBB", "YYYY"), true);
