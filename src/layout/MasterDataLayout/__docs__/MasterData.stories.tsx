import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { clinicColumns } from "../../../components/BaseGrid/__docs__/column";
import BaseGrid from "../../../components/BaseGrid";
import BaseDrawer from "../../../components/BaseDrawer";
import Input from "antd/es/input/Input";
import MasterDataLayout from "..";

const meta: Meta<typeof MasterDataLayout> = {
	title: "Layouts/MasterData",
	component: MasterDataLayout,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MasterDataLayout>;

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

export const Default: Story = {
	render: () => {
		const [isDrawerOpen, setDrawerOpen] = useState(false);
		const [page, setPage] = useState({
			pageNumber: 0,
			pageSize: 10,
			totalData: 100,
		});

		return (
			<div>
				<MasterDataLayout
					Grid={
						<BaseGrid
							rows={rows}
							loading={false}
							columns={clinicColumns}
							page={page}
							setPagination={setPage}
						/>
					}
					Drawer={
						<BaseDrawer
							isOpen={isDrawerOpen}
							setIsOpen={setDrawerOpen}
							content={<div>Content</div>}
						/>
					}
					FilterTextField={<Input className="w-[300px]" />}
					FilterButtonFunction={() => console.log("Filter")}
					AddFunction={() => console.log("Add")}
					AddLabel="สร้าง"
					Header="Clinic"
					TotalItems={page.totalData}
					SearchButtonFunction={() => console.log("Search")}
				/>
			</div>
		);
	},
};
