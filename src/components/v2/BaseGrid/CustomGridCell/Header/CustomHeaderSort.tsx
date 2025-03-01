"use client";

import {
	ArrowDownOutlined,
	ArrowUpOutlined,
} from "@ant-design/icons/lib/icons";
import { ColumnType, SortOrder } from "antd/es/table/interface";
import { handleOrderBy } from "../../../../../utils";
import { toggleTitleColor, toggleSortColor } from "./service";

// import "wcf-component-lib/src/scss/variable.scss";

interface Props {
	label: string;
	headerKey: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	columnKey: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	sort: { column: ColumnType<any>; order: SortOrder }[] | undefined;
	alignment?: "center" | "left" | "right";
	showSorter?: boolean;
}

function getAlignment(align: string) {
	switch (align) {
		case "center":
			return "justify-center";
		case "left":
			return "justify-start";
		case "right":
			return "justify-end";
		default:
			return "";
	}
}

const CustomHeaderSort = (props: Props) => {
	const {
		label,
		headerKey,
		columnKey,
		sort,
		alignment,
		showSorter = true,
	} = props;

	return (
		<div
			key={headerKey}
			className={`flex space-x-2 ${alignment != undefined ? getAlignment(alignment) : ""}`}
		>
			<p
				className={`${toggleTitleColor(
					handleOrderBy(sort?.[0]?.order ?? ""),
					headerKey,
					columnKey,
				)}`}
			>
				{label}
			</p>
			{showSorter && (
				<div className="flex space-x-2">
					<ArrowUpOutlined
						className={`${toggleSortColor(
							handleOrderBy(sort?.[0]?.order ?? ""),
							headerKey,
							columnKey,
							"ASC",
						)}`}
					/>
					<ArrowDownOutlined
						className={`${toggleSortColor(
							handleOrderBy(sort?.[0]?.order ?? ""),
							headerKey,
							columnKey,
							"DESC",
						)}`}
					/>
				</div>
			)}
		</div>
	);
};

export default CustomHeaderSort;
