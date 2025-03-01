import BaseColumn from "../../components/BaseColumn";
import { FormReportLayoutProps } from ".";

export default function Detail(props: FormReportLayoutProps) {
	const { reportData } = props;
	const label = "text-label text-primaryBright";
	return (
		<div className="w-full rounded-xl p-6 grid grid-cols-4 gap-x-6 gap-y-5 bg-white">
			<p className="tablnact col-span-4">รายละเอียด</p>
			<BaseColumn className="space-y-2">
				<div className={`${label}`}>ระบบงาน</div>
				<div className="text-display">{reportData.systemName}</div>
			</BaseColumn>
			<BaseColumn className="space-y-2">
				<div className={`${label}`}>รหัสรายงาน</div>
				<div className="text-display">{reportData.reportCode}</div>
			</BaseColumn>
			<BaseColumn className="space-y-2">
				<div className={`${label}`}>ประเภทรายงาน</div>
				<div className="text-display">{reportData.reportType}</div>
			</BaseColumn>
			<div></div>
			<BaseColumn className="space-y-2 col-span-4">
				<div className={`${label}`}>ชื่อรายงาน</div>
				<div className="text-display">{reportData.reportName}</div>
			</BaseColumn>
			<BaseColumn className="space-y-2 col-span-4">
				<div className={`${label}`}>รายละเอียด</div>
				<div className="text-display">{reportData.reportDescription}</div>
			</BaseColumn>
		</div>
	);
}
