import type { Meta, StoryObj } from "@storybook/react";
import BaseGrid from "..";
import { clinicColumns } from "./column";
import { useState } from "react";
import React from "react";
import { SortOrdersModel } from "../../BasePagination/model";
import { TableProps } from "antd";
import StatusIndicator from "../CustomGridCell/Cell/StatusIndicator";
import { ColumnTitleProps } from "antd/es/table/interface";
import CustomHeaderSort from "../CustomGridCell/Header/CustomHeaderSort";
import { SummaryRow } from "../CustomGridCell/Summary/SummaryRow";
import { SummaryCell } from "../CustomGridCell/Summary/SummaryCell";

const meta: Meta<typeof BaseGrid> = {
	title: "BaseComponent/BaseGrid",
	component: BaseGrid,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseGrid>;

const data = [
	{
		createdDate: "2010-01-20T11:55:09.828",
		createdBy: "ADMIN",
		updatedDate: "2010-01-20T11:55:09.828",
		updatedBy: "ADMIN",
		isActive: "Y",
		uuid: "151f79a9-3e9b-4614-8f9e-401cdfe727d0",
		clinicCode: "0100",
		clinicName: "ด้านแพทย์ศาสตร์บัณฑิต <พบ.>",
	},
	{
		createdDate: "2010-01-20T11:55:09.484",
		createdBy: "ADMIN",
		updatedDate: "2010-01-20T11:55:09.484",
		updatedBy: "ADMIN",
		isActive: "Y",
		uuid: "0315b7b4-1afe-43ea-acd7-21761ff2eacc",
		clinicCode: "0200",
		clinicName: "แพทย์ผู้เชี่ยวชาญด้านกุมารเวชศาสตร์",
	},
	{
		createdDate: "2010-01-20T11:55:06.406",
		createdBy: "ADMIN",
		updatedDate: "2010-01-20T11:55:06.406",
		updatedBy: "ADMIN",
		isActive: "Y",
		uuid: "99a771f7-9ff1-47e5-9405-037523a5898b",
		clinicCode: "0201",
		clinicName: "อนุสาขากุรเวชศาสตร์โรคหัวใจ",
	},
	{
		createdDate: "2010-01-20T11:55:06.468",
		createdBy: "ADMIN",
		updatedDate: "2010-01-20T11:55:06.468",
		updatedBy: "ADMIN",
		isActive: "Y",
		uuid: "da494cc8-875c-4494-86d2-75d04c0e9d3e",
		clinicCode: "0202",
		clinicName: "อนุสาขากุมารเวชศาสตร์โรคระบบการหายใจ",
	},
	{
		createdDate: "2010-01-20T11:55:06.5",
		createdBy: "ADMIN",
		updatedDate: "2010-01-20T11:55:06.5",
		updatedBy: "ADMIN",
		isActive: "Y",
		uuid: "34f6001d-c34f-442d-b48d-2886fb69acf7",
		clinicCode: "0203",
		clinicName: "อนุสาขากุมารเวชศาสตร์โรคต่อมไร้ท่อและเมตาบอลิสม",
	},
	{
		createdDate: "2010-01-20T11:55:06.531",
		createdBy: "ADMIN",
		updatedDate: "2010-01-20T11:55:06.531",
		updatedBy: "ADMIN",
		isActive: "Y",
		uuid: "71ab9f47-1377-441d-879d-84a1ef98648e",
		clinicCode: "0204",
		clinicName: "อนุสาขากุมารเวชศาสตร์พัฒนาการและพฤติกรรม",
	},
	{
		createdDate: "2010-01-20T11:55:06.562",
		createdBy: "ADMIN",
		updatedDate: "2010-01-20T11:55:06.562",
		updatedBy: "ADMIN",
		isActive: "Y",
		uuid: "3645cd50-3f0b-409c-9a63-6e8cba88ddff",
		clinicCode: "0205",
		clinicName: "อนุสาขากุมารเวชศาสตร์โรคไต",
	},
	{
		createdDate: "2010-01-20T11:55:06.5",
		createdBy: "ADMIN",
		updatedDate: "2010-01-20T11:55:06.5",
		updatedBy: "ADMIN",
		isActive: "Y",
		uuid: "34f6001d-c34f-442d-b48d-2886fb69acf7",
		clinicCode: "0203",
		clinicName: "อนุสาขากุมารเวชศาสตร์โรคต่อมไร้ท่อและเมตาบอลิสม",
	},
	{
		createdDate: "2010-01-20T11:55:06.5",
		createdBy: "ADMIN",
		updatedDate: "2010-01-20T11:55:06.5",
		updatedBy: "ADMIN",
		isActive: "Y",
		uuid: "34f6001d-c34f-442d-b48d-2886fb69acf7",
		clinicCode: "0203",
		clinicName: "อนุสาขากุมารเวชศาสตร์โรคต่อมไร้ท่อและเมตาบอลิสม",
	},
	{
		createdDate: "2010-01-20T11:55:06.5",
		createdBy: "ADMIN",
		updatedDate: "2010-01-20T11:55:06.5",
		updatedBy: "ADMIN",
		isActive: "Y",
		uuid: "34f6001d-c34f-442d-b48d-2886fb69acf7",
		clinicCode: "0203",
		clinicName: "อนุสาขากุมารเวชศาสตร์โรคต่อมไร้ท่อและเมตาบอลิสม",
	},
	{
		createdDate: "2010-01-20T11:55:06.5",
		createdBy: "ADMIN",
		updatedDate: "2010-01-20T11:55:06.5",
		updatedBy: "ADMIN",
		isActive: "Y",
		uuid: "34f6001d-c34f-442d-b48d-2886fb69acf7",
		clinicCode: "0203",
		clinicName: "อนุสาขากุมารเวชศาสตร์โรคต่อมไร้ท่อและเมตาบอลิสม",
	},
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rows = data.map((data: any, index: number) => {
	return {
		id: index,
		clinicCode: data.clinicCode,
		clinicName: data.clinicName,
		uuid: data.uuid,
		isActive: data.isActive,
	};
});

export const DefaultGrid: Story = {
	render: (args) => {
		const [page, setPage] = useState({
			pageNumber: 0,
			pageSize: 10,
			totalData: 100,
		});

		return (
			<BaseGrid
				{...args}
				rows={rows}
				columns={clinicColumns}
				page={page}
				setPagination={setPage}
				setOrder={(order: SortOrdersModel[]) => {
					console.log("setOrder", order);
				}}
			/>
		);
	},
};
export const Light: Story = {
	render: (args) => {
		const [page, setPage] = useState({
			pageNumber: 0,
			pageSize: 10,
			totalData: 100,
		});

		return (
			<BaseGrid
				{...args}
				type={"light"}
				rows={rows}
				columns={clinicColumns}
				page={page}
				setPagination={setPage}
				setOrder={(order: SortOrdersModel[]) => {
					console.log("setOrder", order);
				}}
			/>
		);
	},
};

export const TwoToneGrid: Story = {
	render: (args) => {
		const [page, setPage] = useState({
			pageNumber: 0,
			pageSize: 10,
			totalData: 100,
		});

		return (
			<BaseGrid
				{...args}
				rows={rows}
				columns={clinicColumns}
				page={page}
				setPagination={setPage}
				setOrder={(order: SortOrdersModel[]) => {
					console.log("setOrder", order);
				}}
				twoToneColor={true}
			/>
		);
	},
};

export const EmptyGrid: Story = {
	render: (args) => {
		const [page, setPage] = useState({
			pageNumber: 0,
			pageSize: 10,
			totalData: 100,
		});

		return (
			<BaseGrid
				{...args}
				rows={[]}
				columns={clinicColumns}
				page={page}
				setPagination={setPage}
				setOrder={(order: SortOrdersModel[]) => {
					console.log("setOrder", order);
				}}
				twoToneColor={true}
			/>
		);
	},
};

export const AlignmentGrid: Story = {
	render: (args) => {
		const [page, setPage] = useState({
			pageNumber: 0,
			pageSize: 10,
			totalData: 100,
		});

		const clinicColumns1: TableProps["columns"] = [
			{
				dataIndex: "isActive",
				key: "isActive",
				width: 150,
				render: (_, { isActive }) => <StatusIndicator status={isActive} />,
				title: (_columns: ColumnTitleProps<unknown>): JSX.Element => (
					<CustomHeaderSort
						headerKey={"isActive"}
						label={"สถานะ"}
						alignment={"center"}
						showSorter={true}
						sort={_columns?.sortColumns}
						columnKey={_columns?.sortColumns?.[0]?.column.dataIndex}
					/>
				),
				align: "center",
			},
			{
				dataIndex: "clinicCode",
				key: "clinicCode",
				sorter: true,
				title: (_columns: ColumnTitleProps<unknown>): JSX.Element => (
					<CustomHeaderSort
						headerKey={"clinicCode"}
						label={"% รหัสคลินิค"}
						alignment={"center"}
						showSorter={true}
						sort={_columns?.sortColumns}
						columnKey={_columns?.sortColumns?.[0]?.column.dataIndex}
					/>
				),
				align: "center",
			},
			{
				dataIndex: "clinicName",
				key: "clinicName",
				sorter: true,
				title: (_columns: ColumnTitleProps<unknown>): JSX.Element => (
					<CustomHeaderSort
						headerKey={"clinicName"}
						label={"ชื่อคลินิค"}
						alignment={"right"}
						showSorter={true}
						sort={_columns?.sortColumns}
						columnKey={_columns?.sortColumns?.[0]?.column.dataIndex}
					/>
				),
				align: "right",
			},
			{
				dataIndex: "uuid",
				key: "uuid",
				title: (_columns: ColumnTitleProps<unknown>): JSX.Element => (
					<CustomHeaderSort
						headerKey={"uuid"}
						label={"คำสั่ง"}
						alignment={"left"}
						showSorter={true}
						sort={_columns?.sortColumns}
						columnKey={_columns?.sortColumns?.[0]?.column.dataIndex}
					/>
				),
				align: "left",
			},
		];

		return (
			<BaseGrid
				{...args}
				rows={rows}
				columns={clinicColumns1}
				page={page}
				setPagination={setPage}
				setOrder={(order: SortOrdersModel[]) => {
					console.log("setOrder", order);
				}}
				twoToneColor={true}
			/>
		);
	},
};

export const SummaryGrid: Story = {
	render: (args) => {
		const [page, setPage] = useState({
			pageNumber: 0,
			pageSize: 10,
			totalData: 100,
		});

		const clinicColumns1: TableProps["columns"] = [
			{
				dataIndex: "isActive",
				key: "isActive",
				width: 150,
				render: (_, { isActive }) => <StatusIndicator status={isActive} />,
				title: (_columns: ColumnTitleProps<unknown>): JSX.Element => (
					<CustomHeaderSort
						headerKey={"isActive"}
						label={"สถานะ"}
						alignment={"center"}
						showSorter={true}
						sort={_columns?.sortColumns}
						columnKey={_columns?.sortColumns?.[0]?.column.dataIndex}
					/>
				),
				align: "center",
			},
			{
				dataIndex: "clinicCode",
				key: "clinicCode",
				sorter: true,
				title: (_columns: ColumnTitleProps<unknown>): JSX.Element => (
					<CustomHeaderSort
						headerKey={"clinicCode"}
						label={"% รหัสคลินิค"}
						alignment={"center"}
						showSorter={true}
						sort={_columns?.sortColumns}
						columnKey={_columns?.sortColumns?.[0]?.column.dataIndex}
					/>
				),
				align: "center",
			},
			{
				dataIndex: "clinicName",
				key: "clinicName",
				sorter: true,
				title: (_columns: ColumnTitleProps<unknown>): JSX.Element => (
					<CustomHeaderSort
						headerKey={"clinicName"}
						label={"ชื่อคลินิค"}
						alignment={"right"}
						showSorter={true}
						sort={_columns?.sortColumns}
						columnKey={_columns?.sortColumns?.[0]?.column.dataIndex}
					/>
				),
				align: "right",
			},
			{
				dataIndex: "uuid",
				key: "uuid",
				title: (_columns: ColumnTitleProps<unknown>): JSX.Element => (
					<CustomHeaderSort
						headerKey={"uuid"}
						label={"คำสั่ง"}
						alignment={"left"}
						showSorter={true}
						sort={_columns?.sortColumns}
						columnKey={_columns?.sortColumns?.[0]?.column.dataIndex}
					/>
				),
				align: "left",
			},
		];

		return (
			<BaseGrid
				{...args}
				rows={rows}
				columns={clinicColumns1}
				page={page}
				setPagination={setPage}
				setOrder={(order: SortOrdersModel[]) => {
					console.log("setOrder", order);
				}}
				twoToneColor={true}
				summary={(data) => {
					console.log(data);

					return (
						<SummaryRow className="bg-[#DBD8D8]/90">
							<SummaryCell index={0} className="text-center"></SummaryCell>
							<SummaryCell
								index={0}
								colSpan={2}
								rowSpan={2}
								className="flex flex-row justify-start items-center gap-3"
							>
								Total
							</SummaryCell>
							{/* <SummaryCell index={0} className="text-center">
								100
							</SummaryCell> */}
							<SummaryCell index={0} className="text-center">
								100
							</SummaryCell>
							<SummaryCell index={0} className="text-center">
								100
							</SummaryCell>
						</SummaryRow>
					);
				}}
			/>
		);
	},
};
