import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./style.scss";
import StatusIndicator from "../BaseGrid/CustomGridCell/Cell/StatusIndicator";

interface BaseUserInfoCardProps {
	data: {
		citizenId: string;
		name: string;
		status: string;
		rightNode?: React.ReactNode;
	};
}

const BaseUserInfoCard: React.FC<BaseUserInfoCardProps> = ({ data }) => {
	const { citizenId, name, rightNode } = data;
	return (
		<div className="base-user-info-card">
			<div className="flex items-center justify-between">
				<div className="flex">
					<Avatar
						size={64}
						icon={<UserOutlined />}
						style={{ backgroundColor: "#FBC108" }}
					/>
					<div className="grid grid-cols-1 gap-4">
						<p>เลขบัตรประจำตัวประชาชน</p>
						<p>{citizenId}</p>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-2">
					<p>ชื่อ-สกุล</p>
					<p>สถานะ</p>
					<p>{name}</p>
					<div>
						<StatusIndicator
							status="ลูกจ้าง"
							height="20px"
							classNameText="h-table-iac"
						/>
					</div>
				</div>

				{rightNode ? rightNode : null}
			</div>
		</div>
	);
};

export default BaseUserInfoCard;
