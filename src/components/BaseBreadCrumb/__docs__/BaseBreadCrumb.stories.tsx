import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import BaseBreadCrumb from "../index"; // นำเข้าจากตำแหน่งของ component ที่คุณใช้งาน

const meta: Meta<typeof BaseBreadCrumb> = {
	title: "BaseComponent/Layout/BaseBreadCrumb",
	component: BaseBreadCrumb,
	tags: ["autodocs"],
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseBreadCrumb } from 'wcf-component-lib/src/components';

const BreadcrumbExample = () => {
  const breadcrumb = [
    { url: "/ums/home", text: "Home" },
    { url: "/ums/dashboard", text: "Dashboard" },
    { url: "/ums/user", text: "User Management" }
  ];
  
  return (
    <BaseBreadCrumb breadcrumb={breadcrumb} pageCode="UMS003002" />
  );
};

export default BreadcrumbExample;
        `,
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof BaseBreadCrumb>;

export const DefaultBreadCrumb: Story = {
	render: () => {
		const breadcrumb = [
			{ url: "/ums/home", text: "Home" },
			{ url: "/ums/dashboard", text: "Dashboard" },
			{ url: "/ums/user", text: "User Management" },
		];

		return <BaseBreadCrumb breadcrumb={breadcrumb} pageCode="UMS003002" />;
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseBreadCrumb } from 'wcf-component-lib/src/components';

const BreadcrumbExample = () => {
  const breadcrumb = [
    { url: "/ums/home", text: "Home" },
    { url: "/ums/dashboard", text: "Dashboard" },
    { url: "/ums/user", text: "User Management" }
  ];

  return (
    <BaseBreadCrumb breadcrumb={breadcrumb} pageCode="UMS003002" />
  );
};

export default BreadcrumbExample;
        `,
			},
		},
	},
};

export const BreadCrumb1level: Story = {
	render: () => {
		const breadcrumb = [{ url: "/ums/user", text: "User" }];
		const pageCode = "UMS003001";

		return <BaseBreadCrumb breadcrumb={breadcrumb} pageCode={pageCode} />;
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseBreadCrumb } from 'wcf-component-lib/src/components';

const BreadcrumbExample1 = () => {
  const breadcrumb = [{ url: "/ums/user", text: "User" }];
  const pageCode = "UMS003001";

  return (
    <BaseBreadCrumb breadcrumb={breadcrumb} pageCode={pageCode} />
  );
};

export default BreadcrumbExample1;
        `,
			},
		},
	},
};

export const BreadCrumb3level: Story = {
	render: () => {
		const breadcrumb = [
			{ url: "/ums/user", text: "User" },
			{ url: "/ums/user/form", text: "Form" },
			{ url: "/ums/user/history", text: "History" },
		];
		const pageCode = "UMS003002";

		return <BaseBreadCrumb breadcrumb={breadcrumb} pageCode={pageCode} />;
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseBreadCrumb } from 'wcf-component-lib/src/components';

const BreadcrumbExample3 = () => {
  const breadcrumb = [
    { url: "/ums/user", text: "User" },
    { url: "/ums/user/form", text: "Form" },
    { url: "/ums/user/history", text: "History" }
  ];
  const pageCode = "UMS003002";

  return (
    <BaseBreadCrumb breadcrumb={breadcrumb} pageCode={pageCode} />
  );
};

export default BreadcrumbExample3;
        `,
			},
		},
	},
};
