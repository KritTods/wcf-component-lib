import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import BaseStatusFilter, { StatusFilterItem } from "..";

const meta: Meta<typeof BaseStatusFilter> = {
	title: "BaseComponent/Filter/BaseStatusFilter",
	component: BaseStatusFilter,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseStatusFilter>;

const sampleStatusFilterItems: StatusFilterItem[] = [
	{ label: "Active Item", value: 1, count: 10, state: "active" },
	{ label: "Hidden Item", value: 2, count: 5, state: "hidden" },
	{
		label: "Disabled Item",
		value: 3,
		count: 0,
		state: "disabled",
	},
	{
		label: "Demo Item",
		value: 4,
		count: 1000,
		state: "hidden",
	},
];

export const DefaultBaseStatusFilter: Story = {
	render: () => (
		<BaseStatusFilter
			statusFilterItem={sampleStatusFilterItems}
			onStatusChange={(updatedStatus) =>
				console.log("Active Items:", updatedStatus)
			}
		/>
	),
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseStatusFilter  } from 'wcf-component-lib/src/components';

const sampleStatusFilterItems = [
  { label: "Active Item", value: 1, count: 10,  state: "active" },
  { label: "Hidden Item", value: 2, count: 5,  state: "hidden" },
  { label: "Disabled Item", value: 3, count: 0,  state: "disabled" },
];

const Example = () => (
  <BaseStatusFilter
    statusFilterItem={sampleStatusFilterItems}
    onStatusChange={(updatedStatus) => console.log("Active Items:", updatedStatus)}
  />
);

export default Example;
        `,
			},
		},
	},
};

export const OnlyActiveStatus: Story = {
	render: () => (
		<BaseStatusFilter
			statusFilterItem={[
				{
					label: "Active Only",
					value: 4,
					count: 12,

					state: "active",
				},
			]}
			onStatusChange={(updatedStatus) =>
				console.log("Active Items:", updatedStatus)
			}
		/>
	),
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseStatusFilter  } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseStatusFilter
    statusFilterItem={[
      { label: "Active Only", value: 4, count: 12,  state: "active" },
    ]}
    onStatusChange={(updatedStatus) => console.log("Active Items:", updatedStatus)}
  />
);

export default Example;
        `,
			},
		},
	},
};

export const MixedStatus: Story = {
	render: () => (
		<BaseStatusFilter
			statusFilterItem={[
				{
					label: "Active Item",
					value: 1,
					count: 10,

					state: "active",
				},
				{
					label: "Hidden Item",
					value: 2,
					count: 5,

					state: "hidden",
				},
			]}
			onStatusChange={(updatedStatus) =>
				console.log("Active Items:", updatedStatus)
			}
		/>
	),
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseStatusFilter  } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseStatusFilter
    statusFilterItem={[
      { label: "Active Item", value: 1, count: 10,  state: "active" },
      { label: "Hidden Item", value: 2, count: 5,  state: "hidden" },
    ]}
    onStatusChange={(updatedStatus) => console.log("Active Items:", updatedStatus)}
  />
);

export default Example;
        `,
			},
		},
	},
};
