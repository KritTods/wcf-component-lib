import React from "react";
import BaseButton from "../../components/BaseButton";
import BaseColumn from "../../components/BaseColumn";
import BaseRow from "../../components/BaseRow";
import DivPermission from "../../components/BaseDivPermission";
import { Key } from "../../provider/LayoutProvider/type";
import CustomEmpty, {
	CustomEmptyProps,
} from "../../components/BaseGrid/CustomEmpty";
import { Plus } from "iconoir-react";
export interface TableListLayoutProps
	extends Omit<CustomEmptyProps, "children"> {
	Grid: React.ReactNode;
	addRow?: () => void;
	addLabel?: string;
	totalItems?: number;
	pageLevel?: Key;
	textHeader?: string;
	type?: "default" | "form" | "tabs";
	ButtonFooter?: React.ReactNode;
	firstLoading?: boolean;
	headTableContent?: React.ReactNode;
	showTotalItems?: boolean;
}

const style = {
	default: {
		baseColumnClassName: "m-4 space-y-4",
		divClassName: "bg-white flex flex-col p-6 rounded-2xl",
	},
	tabs: {
		baseColumnClassName: "space-y-4",
		divClassName: "bg-white flex flex-col p-6 rounded-2xl",
	},
	form: {
		baseColumnClassName: "space-y-4",
		divClassName: "bg-white flex flex-col rounded-2xl",
	},
};
const TableListLayout = (props: TableListLayoutProps) => {
	const {
		textHeader,
		Grid,
		addRow,
		addLabel,
		totalItems,
		pageLevel = "add",
		type = "default",
		ButtonFooter,
		firstLoading = false,
		showTotalItems = true,
		headTableContent = undefined,
	} = props;

	const className = style[type];

	return (
		<BaseColumn className={className?.baseColumnClassName}>
			<div className={className?.divClassName}>
				<BaseRow className="justify-between items-end pb-5">
					<div className="flex flex-col" style={{ gap: "4px" }}>
						<p className="font-bold text-xl leading-[48px]">
							{textHeader || "รายการ"}
						</p>
						{showTotalItems && (
							<p className="text-label text-[#B7BEC5]">
								ทั้งหมด {totalItems} รายการ
							</p>
						)}
					</div>

					<div className="flex gap-4 justify-center">
						{addRow && (
							<DivPermission pageLevel={pageLevel}>
								<BaseButton
									type="primary"
									onClick={addRow}
									label={addLabel ?? "สร้าง"}
									icon={<Plus className="text-white" width={24} height={24} />}
								/>
							</DivPermission>
						)}
						{headTableContent}
					</div>
				</BaseRow>
				{firstLoading ? <CustomEmpty {...props} /> : Grid}
				{ButtonFooter ? (
					<div className="mt-6 flex justify-center">
						{/* <DivPermission pageLevel={pageLevel}> */}
						{ButtonFooter}
						{/* </DivPermission> */}
					</div>
				) : null}
			</div>
		</BaseColumn>
	);
};

export default TableListLayout;
