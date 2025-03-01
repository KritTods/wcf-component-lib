import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import StatusIndicator, { StatusIndicatorType } from "..";

const meta: Meta<typeof StatusIndicator> = {
	title: "BaseComponent/BaseGrid/StatusIndicator",
	component: StatusIndicator,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof StatusIndicator>;

const statusList: StatusIndicatorType[] = [
	"Y",
	"N",
	"SUCCESS",
	"INACTIVE",
	"ใช้งาน",
	"ไม่ใช้งาน",
	"อนุมัติ",
	"รออนุมัติ",
	"แบบร่าง",
	"รอเอกสารเพิ่มเติม",
	"ลูกจ้าง",
	"รอยืนยัน",
	"ยืนยันแล้ว",
	"ไม่อนุมัติ",
	"รอการตัดจ่าย",
	"รอวินิจฉัย",
];

export const AllStatuses: Story = {
	render: () => (
		<div>
			{statusList.map((status) => (
				<div key={status} style={{ marginBottom: "10px" }}>
					<StatusIndicator status={status} classNameText="status-text" />
				</div>
			))}
		</div>
	),
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import StatusIndicator from 'wcf-component-lib/src/components/BaseGrid/CustomGridCell/Cell/StatusIndicator';

const statusList = [
  "Y", "N", "SUCCESS", "INACTIVE", "ใช้งาน", "ไม่ใช้งาน", "อนุมัติ", 
  "รออนุมัติ", "แบบร่าง", "รอเอกสารเพิ่มเติม", "ลูกจ้าง", "รอยืนยัน", 
  "ยืนยันแล้ว", "ไม่อนุมัติ", "รอการตัดจ่าย", "รอวินิจฉัย"
];

const Example = () => (
  <div>
    {statusList.map((status) => (
      <StatusIndicator key={status} status={status}  classNameText="status-text" />
    ))}
  </div>
);

export default Example;
        `,
			},
		},
	},
};

export const AllStatusesHexagon: Story = {
	render: () => (
		<div>
			{statusList.map((status) => (
				<div key={status} style={{ marginBottom: "10px" }}>
					<StatusIndicator
						status={status}
						iconShape="hexagon"
						classNameText="status-text"
					/>
				</div>
			))}
		</div>
	),
};

export const AllStatusesSquare: Story = {
	render: () => (
		<div>
			{statusList.map((status) => (
				<div key={status} style={{ marginBottom: "10px" }}>
					<StatusIndicator
						status={status}
						iconShape="square"
						classNameText="status-text"
					/>
				</div>
			))}
		</div>
	),
};

export const AllStatusesStar: Story = {
	render: () => (
		<div>
			{statusList.map((status) => (
				<div key={status} style={{ marginBottom: "10px" }}>
					<StatusIndicator
						status={status}
						iconShape="star"
						classNameText="status-text"
					/>
				</div>
			))}
		</div>
	),
};

export const AllStatusesRoundedSquare: Story = {
	render: () => (
		<div>
			{statusList.map((status) => (
				<div key={status} style={{ marginBottom: "10px" }}>
					<StatusIndicator
						status={status}
						iconShape="rounded-square"
						classNameText="status-text"
					/>
				</div>
			))}
		</div>
	),
};

export const AllStatusesDiamond: Story = {
	render: () => (
		<div>
			{statusList.map((status) => (
				<div key={status} style={{ marginBottom: "10px" }}>
					<StatusIndicator
						status={status}
						iconShape="diamond"
						classNameText="status-text"
					/>
				</div>
			))}
		</div>
	),
};

export const AllStatusesStar1: Story = {
	render: () => (
		<div>
			{statusList.map((status) => (
				<div key={status} style={{ marginBottom: "10px" }}>
					<StatusIndicator
						status={status}
						iconShape="star1"
						classNameText="status-text"
					/>
				</div>
			))}
		</div>
	),
};

export const AllStatusesStar2: Story = {
	render: () => (
		<div>
			{statusList.map((status) => (
				<div key={status} style={{ marginBottom: "10px" }}>
					<StatusIndicator
						status={status}
						iconShape="star2"
						classNameText="status-text"
					/>
				</div>
			))}
		</div>
	),
};

export const AllStatusesTriangle: Story = {
	render: () => (
		<div>
			{statusList.map((status) => (
				<div key={status} style={{ marginBottom: "10px" }}>
					<StatusIndicator
						status={status}
						iconShape="triangle"
						classNameText="status-text"
					/>
				</div>
			))}
		</div>
	),
};

export const AllStatusesLeftArrow: Story = {
	render: () => (
		<div>
			{statusList.map((status) => (
				<div key={status} style={{ marginBottom: "10px" }}>
					<StatusIndicator
						status={status}
						iconShape="left-arrow"
						classNameText="status-text"
					/>
				</div>
			))}
		</div>
	),
};

export const AllStatusesPlus: Story = {
	render: () => (
		<div>
			{statusList.map((status) => (
				<div key={status} style={{ marginBottom: "10px" }}>
					<StatusIndicator
						status={status}
						iconShape="plus"
						classNameText="status-text"
					/>
				</div>
			))}
		</div>
	),
};
