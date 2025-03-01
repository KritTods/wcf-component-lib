import { FormReportLayoutProps } from ".";
import { BaseColumn } from "../../components";

export default function PreviewReport(props: FormReportLayoutProps) {
	const { TotalItems, children, reportData } = props;
	return (
		<>
			{children && (
				<BaseColumn className="space-y-4">
					<div className="bg-white flex flex-col p-6 rounded-2xl">
						<p className="font-bold text-xl leading-[48px]">ตัวอย่างรายงาน</p>
						<div className="flex flex-col">
							<div className="p-6">
								<p className="font-bold text-xl leading-[48px]">
									{reportData.reportCode}
								</p>
								<p className="text-lg text-gray-400 text-[15px] leading-[18.75px]">
									ทั้งหมด {TotalItems} รายการ
								</p>
							</div>
							<p className="px-6">{children}</p>
						</div>
					</div>
				</BaseColumn>
			)}
		</>
	);
}
