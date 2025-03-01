import React from "react";
import BaseButton from "../../components/BaseButton";
import BaseColumn from "../../components/BaseColumn";
import BaseRow from "../../components/BaseRow";

export interface MasterDataLayoutProps {
	Grid: React.ReactNode;
	Drawer?: React.ReactNode;
	AddButton?: React.ReactNode;
	AddFunction: () => void;
	AddLabel: string;
	TotalItems: number;
	FilterLayout?: React.ReactNode;
	isShowTotalItems?: boolean;
	isShowGrid?: boolean;
	customButton?: React.ReactNode;
}

const MasterDataLayout = (props: MasterDataLayoutProps) => {
	const {
		Grid,
		Drawer,
		AddButton,
		AddFunction,
		AddLabel,
		TotalItems,
		FilterLayout,
		isShowTotalItems = true,
		isShowGrid = true,
		customButton,
	} = props;
	return (
		<BaseColumn className="space-y-4 h-full">
			<div className="mb-2 h-full">{FilterLayout}</div>
			{isShowGrid && (
				<div className="bg-white flex flex-col p-6 rounded-2xl">
					<BaseRow
						className={`justify-between items-center ${isShowTotalItems && "pb-6"}`}
					>
						{isShowTotalItems && (
							<div className="flex flex-col">
								<p className="font-bold text-xl leading-[48px]">รายการ</p>
								<p className="text-lg text-gray-400 text-[15px] leading-[18.75px]">
									ทั้งหมด {TotalItems} รายการ
								</p>
							</div>
						)}
						<div className="flex space-x-2">
							<>{customButton}</>
							{AddButton ?? (
								<BaseButton
									size="large"
									onClick={AddFunction}
									label={AddLabel ?? "สร้าง"}
									iconType="plus"
								/>
							)}
						</div>
					</BaseRow>
					{Grid}
				</div>
			)}
			{Drawer}
		</BaseColumn>
	);
};

export default MasterDataLayout;
