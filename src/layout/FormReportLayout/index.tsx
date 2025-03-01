import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "../../scss/variable.scss";
import Detail from "./Detail";
import Download from "./Download";
import PreviewReport from "./PreviewReport";
import BaseButton from "../../components/BaseButton";
dayjs.extend(customParseFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);

export interface ReportData {
	systemName: string;
	reportCode: string;
	reportName: string;
	reportDescription: string;
	reportType: string;
}

export interface FormReportLayoutProps {
	reportData: ReportData;
	downloadContent?: JSX.Element;
	children?: JSX.Element | null;
	TotalItems?: number;
	handleSubmitButton?: () => void;
	handleDownloadButton?: () => void;
	handleBackButton?: () => void;
}

export default function FormReportLayout(props: FormReportLayoutProps) {
	const { handleDownloadButton, handleBackButton } = props;
	return (
		<div className="space-y-4">
			<Detail {...props} />
			<Download {...props} />
			<PreviewReport {...props} />
			<div className="flex justify-between pt-3.5">
				<BaseButton
					label="กลับ"
					onClick={handleBackButton}
					className="w-[176px]"
				/>
				<BaseButton
					label="แสดงตัวอย่าง"
					onClick={handleDownloadButton}
					className="w-[176px]"
				/>
			</div>
		</div>
	);
}

{
	/* <div className="w-1/2 flex flex-col space-y-4"></div>
			<div className="w-1/2">{children}</div> */
}
