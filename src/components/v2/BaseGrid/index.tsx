/* eslint-disable @typescript-eslint/no-explicit-any */
import Table, { ColumnsType } from "antd/es/table";
import type {
	ExpandableConfig,
	PanelRender,
	TableComponents,
} from "rc-table/lib/interface";
import BasePagination from "../../BasePagination";
import { ConfigProvider, ConfigProviderProps } from "antd";
import _, { isArray } from "lodash";
import { PaginationOptions, SortOrdersModel } from "../../BasePagination/model";
import CustomEmpty, { CustomEmptyProps } from "./CustomEmpty";
import "./style.scss";
import { AnyObject } from "antd/es/_util/type";
import { SorterResult } from "antd/es/table/interface";
import { useMemo } from "react";
import BaseIcon from "../../BaseIcon";
import { configProviderBaseGrid } from "./configProvider";

export interface ColumnsTypeCustom extends ColumnsType<AnyObject> {
	title?: React.ReactNode;
	key?: React.Key;
	dataIndex?: string | number | (string | number)[];
	render?: (value: any, record: any, index: number) => React.ReactNode;
	align?: "left" | "right" | "center";
	sorter?: boolean;
}

export interface GridProps extends Omit<CustomEmptyProps, "children"> {
	rowKey?: string;
	rows: any;
	columns?: ColumnsTypeCustom;
	summary?: ((data: readonly AnyObject[]) => JSX.Element) | undefined;
	page?: PaginationOptions;
	loading?: boolean;
	twoToneColor?: boolean;
	orderActive?: SortOrdersModel[];
	setOrder?: (order: SortOrdersModel[]) => void;
	setPagination?: (page: PaginationOptions) => void;
	scroll?: {
		x?: number | true | string;
		y?: number | string;
	};
	useScroll?: boolean;
	rowSelection?: object;
	type?: "default" | "light";
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
	themeProvider?: ConfigProviderProps;
}

const BaseGrid = (props: GridProps) => {
	const {
		rowKey,
		rows,
		columns,
		page,
		loading,
		twoToneColor = false,
		setOrder = () => {},
		orderActive,
		setPagination = () => {},
		scroll = { y: 400 },
		useScroll,
		rowSelection,
		type = "default",
		isShowPagination = true,
		hideHeader = false,
		bordered = false,
		isHaveBorderBottomLeftRight = false,
		title,
		summary,
		isContentSmallFont = false,
		components,
		footer,
		rowClassName,
		expandable,
		themeProvider = configProviderBaseGrid,
	} = props;

	const handleTableChange = (
		_pagination: unknown,
		_filters: unknown,
		sorter: SorterResult<AnyObject> | SorterResult<AnyObject>[],
		extra: { action: string },
	) => {
		switch (extra.action) {
			case "sort":
				//check if sorter is array
				if (!isArray(sorter)) {
					let orders: SortOrdersModel[] = [];

					//when orderActive is not empty for first orderby
					if (orderActive) {
						orders = orderActive.map((item) => {
							return {
								direction:
									String(sorter.columnKey) === item.property &&
									item.direction === "ASC"
										? "DESC"
										: "ASC",
								property: String(sorter.columnKey),
							};
						});
					} else {
						orders = [
							{
								//default sort by ASC
								direction: "ASC",
								property: String(sorter.columnKey),
							},
						];
					}

					setOrder(orders);
				}

				//for multiple sorter you can make code more than this

				break;
			case "paginate":
				console.log("paginate, do something");
				break;
			case "filter":
				console.log("filter, do something");
				break;
			default:
				break;
		}
	};

	//make function loop column to add sorter Custom title when sorter is true
	const newColumns = useMemo(() => {
		return (
			columns &&
			columns.map((column: any, index) => {
				//find orderActive by column.dataIndex
				const sorter = orderActive?.find(
					(order) => order.property === column.dataIndex,
				);

				if (column.sorter) {
					return {
						...column,
						title: (
							<div
								key={index}
								className="flex items-center gap-2 justify-center"
							>
								<p className={`${sorter && "text-[#FBC108]"} text-label`}>
									{typeof column.title === "function"
										? column.title({})
										: column.title}
								</p>
								<div className="flex justify-center">
									<BaseIcon
										name={
											sorter && sorter.direction === "DESC"
												? "sortUp"
												: "sortDown"
										}
										size="24px"
										classNameColor={{
											base: "text-white",
											active: "text-secondary",
										}}
										disabled={false}
										active={sorter ? true : false}
									/>
								</div>
							</div>
						),
					};
				} else {
					return {
						...column,
						title: (
							<div
								key={index}
								className="flex items-center justify-center gap-2"
							>
								<p className="text-label">
									{typeof column.title === "function"
										? column.title({})
										: column.title}
								</p>
							</div>
						),
					};
				}
				return column;
			})
		);
	}, [columns]);

	return (
		<ConfigProvider {...themeProvider}>
			<div
				className={`base-grid w-full flex flex-col items-center ${hideHeader && "hide-header-base-grid"} ${bordered && "bordered"} ${isHaveBorderBottomLeftRight && "is-have-border-bottom-left-right"} ${isContentSmallFont && "is-content-small-font"}`}
			>
				<Table
					components={components}
					bordered={bordered}
					className="w-full"
					{...(rowKey && { rowKey: (record) => record[rowKey] })}
					{...(rowSelection && { rowSelection: rowSelection })}
					dataSource={rows}
					loading={loading}
					columns={newColumns}
					title={title}
					scroll={useScroll ? scroll : undefined}
					pagination={false}
					showSorterTooltip={false}
					onChange={(_pagination, _filters, sorter, extra) =>
						handleTableChange(_pagination, _filters, sorter, extra)
					}
					locale={{
						emptyText: <CustomEmpty {...props} />,
					}}
					rowClassName={(record, index) => {
						if (rowClassName) {
							return rowClassName(record, index);
						} else {
							if (twoToneColor) return index % 2 === 0 ? "even-row" : "odd-row";
							return "";
						}
					}}
					footer={footer}
					summary={summary}
					expandable={expandable}
				/>
				{isShowPagination && !_.isEmpty(page) && page.totalData > 10 && (
					<BasePagination
						page={page}
						type={type}
						setPagination={setPagination}
					/>
				)}
			</div>
		</ConfigProvider>
	);
};

export default BaseGrid;
