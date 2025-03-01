/* eslint-disable @typescript-eslint/no-explicit-any */
import Table, { ColumnsType } from "antd/es/table";
import type {
	ExpandableConfig,
	GetComponentProps,
	PanelRender,
	TableComponents,
} from "rc-table/lib/interface";
import { ConfigProvider } from "antd";
import _ from "lodash";
import { handleOrderBy } from "../../utils";
import { PaginationOptions, SortOrdersModel } from "../BasePagination/model";
import "./style.scss";
import { AnyObject } from "antd/es/_util/type";

export interface BaseCustomGridProps {
	rowKey?: string;
	rows: any;
	columns: ColumnsType<AnyObject> | undefined | any;
	summary?: ((data: readonly AnyObject[]) => JSX.Element) | undefined;
	onRow?: GetComponentProps<AnyObject> | undefined;
	page?: PaginationOptions;
	loading?: boolean;
	twoToneColor?: boolean;
	setOrder?: (order: SortOrdersModel[]) => void;
	setPagination?: (page: PaginationOptions) => void;
	scroll?: {
		x?: number | true | string;
		y?: number | string;
	};
	useScroll?: boolean;
	rowSelection?: object;
	type?:
		| "default"
		| "drugsAndPareenteralNutrition"
		| "medicalSupplies"
		| "diagnosticRadiologyAndRadiotherapy"
		| "medicalEquipments"
		| "packagedMedicalCharges"
		| "physicianEvaluationAndManagementServices"
		| "otherHealthProfessionalFees"
		| "standardInpatientAccommodation"
		| "foods"
		| "other"
		| "totalInformation";
	isShowPagination?: boolean;
	hideHeader?: boolean;
	colorSelectedBg?: string;
	bordered?: boolean;
	isHaveBorderBottomLeftRight?: boolean;
	title?: () => JSX.Element;
	isContentSmallFont?: boolean;
	components?: TableComponents<AnyObject> | undefined;
	footer?: PanelRender<AnyObject> | undefined;
	rowClassName?: (record: any, index: number) => string;
	expandable?: ExpandableConfig<AnyObject> | undefined;
	footerBg?: string;
}

const BaseCustomGrid = (props: BaseCustomGridProps) => {
	const {
		rowKey,
		rows,
		columns,
		page,
		loading,
		twoToneColor = false,
		setOrder = () => {},
		setPagination = () => {},
		scroll = { y: 400 },
		useScroll,
		rowSelection,
		type = "default",
		hideHeader = false,
		colorSelectedBg,
		bordered = true,
		isHaveBorderBottomLeftRight = false,
		title,
		summary,
		onRow,
		isContentSmallFont = false,
		components,
		footer,
		rowClassName,
		expandable,
		footerBg = "#DEDEDE",
	} = props;

	const handleTableChange = (sorter: any) => {
		let orders: SortOrdersModel[] = [];
		const isFieldArray = Array.isArray(sorter.field);
		if (!_.isEmpty(sorter.order)) {
			orders = [
				{
					direction: handleOrderBy(sorter.order),
					property: isFieldArray
						? sorter.field[sorter.field.length - 1]
						: sorter.field,
				},
			];
		}
		setOrder(orders);
		if (!_.isEmpty(page)) setPagination({ ...page, pageNumber: 0, orders });
	};

	let primary = "#1C4651";
	let hoverPrimary = "#2C5762";
	let activePrimary = "#003F4F";
	let whiteColor = "#FFFFFF";

	switch (type) {
		case "drugsAndPareenteralNutrition":
			primary = "#6666B3";
			hoverPrimary = "#E7F3F5";
			activePrimary = "#E7F3F5";
			whiteColor = "#FFFFFF";
			break;
		case "medicalSupplies":
			primary = "#176197";
			hoverPrimary = "#E7F3F5";
			activePrimary = "#E7F3F5";
			whiteColor = "#FFFFFF";
			break;
		case "diagnosticRadiologyAndRadiotherapy":
			primary = "#000080";
			hoverPrimary = "#E7F3F5";
			activePrimary = "#E7F3F5";
			whiteColor = "#FFFFFF";
			break;
		case "medicalEquipments":
			primary = "#779097";
			hoverPrimary = "#E7F3F5";
			activePrimary = "#E7F3F5";
			whiteColor = "#FFFFFF";
			break;
		case "packagedMedicalCharges":
			primary = "#DC7E7E";
			hoverPrimary = "#E7F3F5";
			activePrimary = "#E7F3F5";
			whiteColor = "#FFFFFF";
			break;
		case "physicianEvaluationAndManagementServices":
			primary = "#669DC5";
			hoverPrimary = "#E7F3F5";
			activePrimary = "#E7F3F5";
			whiteColor = "#FFFFFF";
			break;
		case "otherHealthProfessionalFees":
			primary = "#C99A06";
			hoverPrimary = "#E7F3F5";
			activePrimary = "#E7F3F5";
			whiteColor = "#FFFFFF";
			break;
		case "standardInpatientAccommodation":
			primary = "#1A6CA8";
			hoverPrimary = "#E7F3F5";
			activePrimary = "#E7F3F5";
			whiteColor = "#FFFFFF";
			break;
		case "foods":
			primary = "#09AA6A";
			hoverPrimary = "#E7F3F5";
			activePrimary = "#E7F3F5";
			whiteColor = "#FFFFFF";
			break;
		case "other":
			primary = "#4B5760";
			hoverPrimary = "#E7F3F5";
			activePrimary = "#E7F3F5";
			whiteColor = "#FFFFFF";
			break;
		case "totalInformation":
			primary = "#ffffff";
			hoverPrimary = "#E7F3F5";
			activePrimary = "#E7F3F5";
			whiteColor = "#000000";
			break;
		default:
			break;
	}

	return (
		<ConfigProvider
			theme={{
				components: {
					Table: {
						headerBg: primary,
						headerSortHoverBg: hoverPrimary,
						rowExpandedBg: primary,
						headerBorderRadius: 16,
						headerSortActiveBg: activePrimary,
						bodySortBg: "transparent",
						headerColor: whiteColor,
						headerSplitColor: primary,
						rowSelectedBg: colorSelectedBg ? colorSelectedBg : "#e6f4ff",
						rowHoverBg: colorSelectedBg ? colorSelectedBg : "#fafafa",
						rowSelectedHoverBg: colorSelectedBg ? colorSelectedBg : "#bae0ff",
						footerBg: footerBg ? footerBg : "#ffffff",
					},
					Pagination: {
						itemActiveBg: primary,
					},
				},
				token: {
					borderRadius: 2,
					colorPrimary: primary,
					colorPrimaryHover: hoverPrimary,
					colorPrimaryActive: activePrimary,
				},
			}}
		>
			<div
				className={`base-grid w-full flex flex-col items-center ${hideHeader && "hide-header-base-grid"} ${bordered && "bordered"} ${isHaveBorderBottomLeftRight && "is-have-border-bottom-left-right"} ${isContentSmallFont && "is-content-small-font"}`}
			>
				<Table
					components={components}
					bordered={bordered}
					className="w-full vertical-borders-only"
					{...(rowKey && { rowKey: (record) => record[rowKey] })}
					{...(rowSelection && { rowSelection: rowSelection })}
					dataSource={rows}
					loading={loading}
					columns={columns}
					title={title}
					onRow={onRow}
					pagination={false}
					scroll={useScroll ? scroll : undefined}
					onChange={(_a, _b, c) => handleTableChange(c)}
					rowClassName={(record, index) => {
						if (rowClassName) {
							return rowClassName(record, index);
						} else {
							if (twoToneColor) return index % 2 === 0 ? "even-row" : "odd-row";
							return "";
						}
					}}
					locale={{
						emptyText: <></>,
					}}
					footer={footer}
					summary={summary}
					expandable={expandable}
				/>
			</div>
		</ConfigProvider>
	);
};

export default BaseCustomGrid;
