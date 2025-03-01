"use client";
import { SsoUser } from "../model";
interface UserProps {
	userItem?: SsoUser;
}

export default function UserContent(props: UserProps) {
	const { userItem } = props;
	return (
		<div className="text-[#212121]" style={{ padding: 0 }}>
			<p className="header-card mb-1">รายละเอียดผู้ใช้งาน</p>
			<hr className="my-1" />
			<div className="mt-2">
				<ul className="list-disc pl-6">
					<li className="text-help">
						{userItem?.title}
						{userItem?.firstName} {userItem?.lastName}
					</li>
					<li className="text-help">{userItem?.employeeType}</li>
					<li className="text-help">
						{userItem?.ssoBranchCode} - {userItem?.workingDeptDescription}
					</li>
				</ul>
			</div>
		</div>
	);
}
