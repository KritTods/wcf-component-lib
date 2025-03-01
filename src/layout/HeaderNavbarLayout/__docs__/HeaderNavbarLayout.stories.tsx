import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const Structure = () => {
	return (
		<>
			<h1>Header Navbar Layout</h1>

			<h2>setup file .ENV</h2>
			<pre className="text-white bg-black">
				<code>{` 
NEXT_PUBLIC_BASE_PATH=/ums
NEXT_PUBLIC_API_URL_UMS=[URL API]
    `}</code>
			</pre>

			<h2>structure UMS </h2>
			<pre className="text-white bg-black">
				<code>
					{`
app
├── (home)
│   └── template.tsx //2️⃣ Add HeaderNavbarLayout 🟠
├── layout.tsx //1️⃣ Add LayoutProvider 🔴
└── ums
    ├── template.tsx //3️⃣ Add HeaderNavbarLayout 🟠
`}
				</code>
			</pre>

			<h2>structure MDM </h2>
			<pre className="text-white bg-black">
				<code>
					{`
app
├── layout.tsx  //1️⃣ Add LayoutProvider 🔴
├── template.tsx //2️⃣ Add HeaderNavbarLayout 🟠
`}
				</code>
			</pre>
		</>
	);
};
const AddLayoutProvider = () => {
	return (
		<div>
			<h3>1️⃣ Add LayoutProvider</h3>
		</div>
	);
};

const ShowHeaderFalse = () => {
	return (
		<div>
			<h3>2️⃣ Add HeaderNavbarLayout showHeader = false</h3>
			<img src="/images-doc/NavbarLayout.png" alt="Navbar Layout" />
		</div>
	);
};

const ShowHeaderTrue = () => {
	return (
		<div>
			<h3>3️⃣ Add HeaderNavbarLayout showHeader = true</h3>
			<img
				src="/images-doc/HeaderNavbarLayout.png"
				alt="Header Navbar Layout"
			/>
		</div>
	);
};

const AddElementToHeader = () => {
	return (
		<div>
			<h3>Adding Elements to the Header</h3>

			<img
				src="/images-doc/NewHeaderNavbarLayoutAddForm.png"
				alt="Header Layout with Form"
			/>
		</div>
	);
};

const ShowScrollButton = () => {
	return (
		<div>
			<h3>Show Scroll Button</h3>
			<p>Default is hide Scroll Button</p>
			<img src="/images-doc/HideScrollButton.png" alt="Hide Scroll Button" />
			<p>After show the Scroll Buttton</p>
			<img src="/images-doc/ScrollButton.png" alt="Scroll Button" />
		</div>
	);
};

const HeaderNavbarLayout = () => {
	return (
		<div>
			<h1>Header Navbar Layout</h1>
		</div>
	);
};

const PermissionDisabledForm = () => {
	return (
		<div>
			<h3>Permission disabled Form</h3>
			<pre className="text-white bg-black">
				<code>
					{`configPage

{
	"url": "user/form/edit?userId={userId}",
	"text": "Form",
	"breadcrumb": ["root", "formEdit"],
	"pageLevel": { "form": [2], "history": [2] }
}
`}
				</code>
			</pre>
		</div>
	);
};

const PermissionHideElement = () => {
	return (
		<div>
			<h3>Permission Hide Element</h3>
			<pre className="text-white bg-black">
				<code>
					{`configPage

{
	"url": "/user/form/edit?userId={userId}",
	"text": "Form",
	"breadcrumb": ["root", "formEdit"],
	"pageLevel": { "form": [2], "history": [1, 2] }
}
`}
				</code>
			</pre>
		</div>
	);
};
const meta: Meta = {
	title: "Header-Navbar-Layout-And-Permission/HeaderNavbarLayout",
	component: HeaderNavbarLayout,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeaderNavbarLayout>;

export const StructureStory: Story = {
	render: () => <Structure />,
	parameters: {
		docs: {
			source: {
				code: `...`,
			},
		},
	},
};
export const AddLayoutProviderStory: Story = {
	render: () => <AddLayoutProvider />,
	parameters: {
		docs: {
			source: {
				code: `
import type { Metadata } from 'next';
import ReduxProvider from '@/redux/reduxProvider';
import { Suspense } from 'react';
import { LayoutProvider } from 'wcf-component-lib/src/provider/LayoutProvider';
import { AntdProvider } from 'wcf-component-lib/src/provider/AntdProvider';
import BaseLoading from 'wcf-component-lib/src/components/BaseLoading';
import { DataStructureURL } from 'wcf-component-lib/src/provider/LayoutProvider/type';

export const metadata: Metadata = {
  title: 'MDM',
  description: 'MDM',
};

const configPage: DataStructureURL = {
  demo: {
    root: {
      url: 'demo/[id]',// "/ums/demo/202"
      text: 'demo',
      breadcrumb: ['root'],
      pageLevel: { add: [2] },
    },
    subMenu: {
      url: 'demo/[id]/subMenu/[subMenuId]', // "/ums/demo/202/subMenu/201"
      text: 'Sub Menu',
      breadcrumb: ['root', 'subMenu'],
      pageLevel: { add: [2] },
    },
  },
  userGroup: {
    root: {
      url: 'userGroup',
      text: 'userGroup',
      breadcrumb: ['root'],
      pageLevel: { add: [2] },
    },
    form: {
      url: 'userGroup/form',
      text: 'Form',
      breadcrumb: ['root', 'form'],
      pageLevel: { form: [2] },
    },
    formEdit: {
      url: 'userGroup/form/edit?userGroupId={userGroupId}',// "/ums/userGroup/form/edit?userGroupId=200"
      text: 'Form',
      breadcrumb: ['root', 'formEdit'],
      pageLevel: { form: [2] },
    },
    fromPrivilege: {
      url: 'userGroup/formPrivilege?userGroupId={userGroupId}',// "/ums/userGroup/formPrivilege?userGroupId=200"
      text: 'Form Privilege',
      breadcrumb: ['root', 'formEdit', 'fromPrivilege'],
      pageLevel: { form: [2] },
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang='en'>
      <AntdProvider>
        <LayoutProvider configPage={configPage} urlApi={\`\${process.env.NEXT_PUBLIC_API_URL_UMS}users/page-accesses\`}>
          <ReduxProvider>
            <body>
              <Suspense fallback={<BaseLoading size='large' />}>{children}</Suspense>
            </body>
          </ReduxProvider>
        </LayoutProvider>
      </AntdProvider>
    </html>
  );
}

`,
			},
		},
	},
};

export const ShowHeaderFalseStory: Story = {
	render: () => <ShowHeaderFalse />,
	parameters: {
		docs: {
			source: {
				code: `
'use client';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'wcf-component-lib/node_modules/antd';
import HeaderNavbarLayout from 'wcf-component-lib/src/layout/HeaderNavbarLayout';
import useLayout from 'wcf-component-lib/src/provider/LayoutProvider/useLayout';
export default function Template({ children }: { children: React.ReactNode }): React.ReactElement {
  const {
    stateLayout: { loading },
  } = useLayout();

  return (
    <Spin spinning={loading} indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}>
      <HeaderNavbarLayout showHeader={false}>{children}</HeaderNavbarLayout>
    </Spin>
  );
}

`,
			},
		},
	},
};

export const ShowHeaderTrueStory: Story = {
	render: () => <ShowHeaderTrue />,
	parameters: {
		docs: {
			source: {
				code: `
'use client';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'wcf-component-lib/node_modules/antd';
import HeaderNavbarLayout from 'wcf-component-lib/src/layout/HeaderNavbarLayout';
import useLayout from 'wcf-component-lib/src/provider/LayoutProvider/useLayout';
export default function Template({ children }: { children: React.ReactNode }): React.ReactElement {
  const {
    stateLayout: { loading },
  } = useLayout();

  return (
    <Spin spinning={loading} indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}>
      <HeaderNavbarLayout>{children}</HeaderNavbarLayout>
    </Spin>
  );
}

`,
			},
		},
	},
};

export const AddElementToHeaderStory: Story = {
	render: () => <AddElementToHeader />,
	parameters: {
		docs: {
			source: {
				code: `
import { useLayout } from "wcf-component-lib/src/provider/LayoutProvider";

const Example = () => {
  const { dispatchLayout } = useLayout();

  useEffect(() => {
    dispatchLayout({
      type: "setChildrenHeader",
      payload: <FormSearchUser />,
    });
  }, [dispatchLayout]);

  return <div>Demo</div>;
};
export default Example;
`,
			},
		},
	},
};

export const ShowScrollButtonStory: Story = {
	render: () => <ShowScrollButton />,
	parameters: {
		docs: {
			source: {
				code: `
import { useLayout } from "wcf-component-lib/src/provider/LayoutProvider";

const Example = () => {
  const { dispatchLayout } = useLayout();

  useEffect(() => {
    dispatchLayout({ type: 'setDisplayScrollButton', payload: true });
  }, [dispatchLayout]);

  return <div>Demo</div>;
};
export default Example;
`,
			},
		},
	},
};

export const PermissionDisabledFormStory: Story = {
	render: () => <PermissionDisabledForm />,
	parameters: {
		docs: {
			source: {
				code: `
import usePermission from "wcf-component-lib/src/hook/usePermission";

const Example = () => {

  const permission = usePermission("form");

  return <Input disabled={permission} />;
};

export default Example;
`,
			},
		},
	},
};

export const PermissionHideElementStory: Story = {
	render: () => <PermissionHideElement />,
	parameters: {
		docs: {
			source: {
				code: `
                
import DivPermission from "wcf-component-lib/src/components/BaseDivPermission";

const Example = () => {

  return (
    <>
      {/* user pageLevel 2 show Button */}
      <DivPermission pageLevel={"form"}>
        <Button>บันทึก</Button>
      </DivPermission>;

      {/* user pageLevel 1 or 2 show Button */}
      <DivPermission pageLevel={"history"}>
        <Button>ประวัติการแก้ไข</Button>
      </DivPermission>;
    </>
  );
};

export default Example;
`,
			},
		},
	},
};
