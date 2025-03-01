import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import BaseDrawer from "../index";
import Button from "antd/es/button";

const meta: Meta<typeof BaseDrawer> = {
	title: "BaseComponent/Layout/BaseDrawer",
	component: BaseDrawer,
	tags: ["autodocs"],
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseDrawer } from 'wcf-component-lib/src/components';
import { Button } from 'wcf-component-lib/node_modules/antd';


const DrawerExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <BaseDrawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content={<div>Content goes here</div>}
        isFilter={false}
      />
    </div>
  );
};
        `,
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof BaseDrawer>;

export const DefaultDrawer: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div className="w-full flex justify-center">
				<Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
				<BaseDrawer
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					content={<div>Content goes here</div>}
					isFilter={false}
				/>
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseDrawer } from 'wcf-component-lib/src/components';
import { Button } from 'wcf-component-lib/node_modules/antd';

const DrawerExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <BaseDrawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content={<div>Content goes here</div>}
        isFilter={false}
      />
    </div>
  );
};
        `,
			},
		},
	},
};

export const FilterDrawer: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div className="w-full flex justify-center">
				<Button onClick={() => setIsOpen(true)}>Open Filter Drawer</Button>
				<BaseDrawer
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					content={<div>Content Filter goes here</div>}
					isFilter={true}
				/>
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BaseDrawer } from 'wcf-component-lib/src/components';
import { Button } from 'wcf-component-lib/node_modules/antd';

const FilterDrawerExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <Button onClick={() => setIsOpen(true)}>Open Filter Drawer</Button>
      <BaseDrawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content={<div>Content Filter goes here</div>}
        isFilter={true} 
      />
    </div>
  );
};


        `,
			},
		},
	},
};
