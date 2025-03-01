import { FormReportLayoutProps } from ".";
import BaseButton from "../../components/BaseButton";

export default function Download(props: FormReportLayoutProps) {
	const { downloadContent, handleSubmitButton } = props;
	return (
		<div className="w-full rounded-xl p-6 grid grid-cols-4 gap-y-5 bg-white">
			<p className="tablnact col-span-4">ดาวน์โหลดรายงาน</p>
			<div className="col-span-4">{downloadContent}</div>
			<div className="col-span-4 flex justify-end">
				{handleSubmitButton && (
					<BaseButton
						label="แสดงตัวอย่าง"
						onClick={handleSubmitButton}
						className="w-[176px]"
					/>
				)}
			</div>
		</div>
	);
}
