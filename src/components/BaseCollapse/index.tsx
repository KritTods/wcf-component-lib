import Collapse, {
	CollapseProps,
	ExpandIconPosition,
} from "antd/es/collapse/Collapse";
import "./style.scss";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";
import { Collapsible } from "./model";
import { ReactNode } from "react";

interface BaseCollapseProps {
	defaultActiveKey: string | string[] | number | number[];
	items: CollapseProps["items"];
	expandIconPosition?: ExpandIconPosition;
	className?: string;
	noPadding?: boolean;
	noPaddingAll?: boolean;
	collapsible?: Collapsible;
	accordion?: boolean;
	genBtnExpand?: (isActive: boolean | undefined) => ReactNode; //for custom btn expand
	noMarginBottom?: boolean;
	haveBorder?: boolean;
}

const BaseCollapse = (props: BaseCollapseProps) => {
	const {
		defaultActiveKey,
		items,
		expandIconPosition = "end",
		className,
		noPadding = false,
		noPaddingAll = false,
		noMarginBottom = false,
		collapsible = "header",
		accordion = false,
		genBtnExpand,
		haveBorder = false,
	} = props;

	const genBtnExpandDefault = (isActive: boolean | undefined) => {
		if (genBtnExpand) {
			return genBtnExpand(isActive);
		} else {
			return (
				<RightOutlined
					className="font-medium text-2xl"
					rotate={isActive ? 90 : 0}
				/>
			);
		}
	};

	return (
		<Collapse
			accordion={accordion}
			collapsible={collapsible}
			className={`base-collapse w-full rounded-2xl ${className} ${noPadding && "no-padding"} ${noPaddingAll && "no-padding-all"} ${!noMarginBottom && "mb-6"} ${haveBorder ? "have-border" : "border-0"}`}
			items={items}
			defaultActiveKey={defaultActiveKey ?? ""}
			expandIconPosition={expandIconPosition}
			expandIcon={({ isActive }) => genBtnExpandDefault(isActive)}
		/>
	);
};

export default BaseCollapse;
