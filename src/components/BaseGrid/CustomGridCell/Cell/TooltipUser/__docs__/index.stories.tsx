import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TooltipUser, ItemByUserLogin } from "..";

const mockItem: ItemByUserLogin = {
	uid: "user1",
	displayName: "John Doe",
	employeeType: "Full-Time",
	ssoBranchCode: "123",
	workingDeptDescription: "IT Department",
};

const mockListByUserLogin: ItemByUserLogin[] = [
	{
		uid: "user1",
		displayName: "John Doe",
		employeeType: "Full-Time",
		ssoBranchCode: "123",
		workingDeptDescription: "IT Department",
	},
	{
		uid: "user2",
		displayName: "Jane Doe",
		employeeType: "Part-Time",
		ssoBranchCode: "456",
		workingDeptDescription: "HR Department",
	},
];

const meta: Meta<typeof TooltipUser> = {
	title: "BaseComponent/BaseGrid/TooltipUser",
	component: TooltipUser,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof TooltipUser>;

export const DefaultTooltipUser: Story = {
	args: {
		name: "user1",
		listByUserLogin: mockListByUserLogin,
		item: mockItem,
		getSsoOfficerById: async (userLogin: string) => {
			console.log(`Fetching data for userLogin: ${userLogin}`);
			return new Promise((resolve) => setTimeout(resolve, 1000));
		},
		setItemByUserLogin: (item: ItemByUserLogin) => {
			console.log("Setting item:", item);
		},
	},
	render: (args) => (
		<div>
			<div className="text-center">
				<TooltipUser {...args} />
			</div>
			<hr />
			<br />
			<img src="/images-doc/TooltipUser.png" alt="TooltipUser" />
		</div>
	),
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { ItemByUserLogin } from 'wcf-component-lib/src/components';

const mockItem = {
  uid: "user1",
  displayName: 'John Doe',
  employeeType: 'Full-Time',
  ssoBranchCode: '123',
  workingDeptDescription: 'IT Department',
};

const mockListByUserLogin = [
  {
    uid: 'user1',
    displayName: 'John Doe',
    employeeType: 'Full-Time',
    ssoBranchCode: '123',
    workingDeptDescription: 'IT Department',
  },
  {
    uid: 'user2',
    displayName: 'Jane Doe',
    employeeType: 'Part-Time',
    ssoBranchCode: '456',
    workingDeptDescription: 'HR Department',
  },
];

const Example = () => (
  <div>
    <h2>Custom Rendered TooltipUser Component</h2>
    <TooltipUser
      name="user1"
      listByUserLogin={mockListByUserLogin}
      item={mockItem}
      getSsoOfficerById={async (userLogin: string) => {
        console.log(\`Fetching data for userLogin: \${userLogin}\`);
      }}
      setItemByUserLogin={(item) => {
        console.log('Setting item:', item);
      }}
    />
  </div>
);

export default Example;
        `,
			},
		},
	},
};
