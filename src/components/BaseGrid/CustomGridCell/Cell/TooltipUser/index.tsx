"use client";

import React, { useState } from "react";
import { Tooltip } from "antd";

export interface ItemByUserLogin {
	cn: string;
	sn: string;
	uid: string;
	accountActive: string;
	displayName: string;
	employeeType: string;
	givenName: string;
	initials: string;
	mail: string;
	mailDrop: string;
	quota: string;
	ssoBranchCode: string;
	ssoFirstName: string;
	ssoPersonBirthDate: string;
	ssoPersonCitizenId: string;
	ssoPersonClass: string;
	ssoPersonEmpDate: string;
	ssoPersonPosition: string;
	ssoSurName: string;
	title: string;
	workingDeptDescription: string;
	workingDeptNo: string;
}

interface TooltipUserProps {
	name: string;
	listByUserLogin: ItemByUserLogin[];
	item: {
		displayName: string;
		employeeType: string;
		ssoBranchCode: string;
		workingDeptDescription: string;
	};
	getSsoOfficerById: (userLogin: string) => Promise<void>;
	setItemByUserLogin: (item: ItemByUserLogin) => void;
}

export function TooltipUser(props: TooltipUserProps): React.ReactElement {
	const { name, listByUserLogin, item, getSsoOfficerById, setItemByUserLogin } =
		props;
	const [visible, setVisible] = useState(false);
	const { displayName, employeeType, ssoBranchCode, workingDeptDescription } =
		item;

	const handleClick = async (): Promise<void> => {
		const data = listByUserLogin.find((item) => item.uid === name);
		if (data) {
			setItemByUserLogin(data);
		} else {
			await getSsoOfficerById(name);
			setVisible(true);
		}
	};

	const handleVisibleChange = (newVisible: boolean): void => {
		setVisible(newVisible);
	};

	return (
		<Tooltip
			color={"#FFFFFF"}
			title={
				<div className="text-[#212121]" style={{ padding: 0 }}>
					<p className="header-card mb-1">รายละเอียดผู้ใช้งาน</p>
					<hr className="my-1" />
					<div className="mt-2">
						<ul className="list-disc pl-6">
							<li className="text-help">{displayName}</li>
							<li className="text-help">{employeeType}</li>
							<li className="text-help">
								{ssoBranchCode} - {workingDeptDescription}
							</li>
						</ul>
					</div>
				</div>
			}
			trigger="click"
			open={visible}
			onOpenChange={handleVisibleChange}
			overlayStyle={{ maxWidth: "max-content" }}
		>
			<p
				className="text-[#1A6CA8] underline hover:text-[#1A6CA8] cursor-pointer"
				onClick={() => void handleClick()}
			>
				{name}
			</p>
		</Tooltip>
	);
}
