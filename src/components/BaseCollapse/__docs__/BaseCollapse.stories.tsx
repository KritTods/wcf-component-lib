import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import BaseButton from "../../BaseButton";
import { CollapseProps } from "antd/es/collapse/Collapse";
import BaseCollapse from "..";

const meta: Meta<typeof BaseCollapse> = {
	title: "BaseComponent/Layout/BaseCollapse",
	component: BaseCollapse,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseCollapse>;

export const DefaultCollapse: Story = {
	render: () => {
		const Content1 = () => (
			<div className="flex space-x-4 items-center">
				<BaseButton
					label="Tab Pane 1"
					onClick={() => console.log("Button is clicked")}
				/>
				<p>Content of Tab Pane 1</p>
			</div>
		);

		const Content2 = () => (
			<div className="flex space-x-4 items-center">
				<BaseButton
					label="Tab Pane 2"
					onClick={() => console.log("Button is clicked")}
				/>
				<p>Content of Tab Pane 2</p>
			</div>
		);

		const Content3 = () => (
			<div className="flex space-x-4 items-center">
				<BaseButton
					label="Tab Pane 3"
					onClick={() => console.log("Button is clicked")}
				/>
				<p>Content of Tab Pane 3</p>
			</div>
		);

		const items: CollapseProps["items"] = [
			{
				key: "1",
				label: (
					<div className="w-full flex flex-col">
						<p>Tab 1</p>
						<p>Tab 2</p>
					</div>
				),
				children: <Content1 />,
			},
			{
				key: "2",
				label: "Tab 2",
				children: <Content2 />,
			},
			{
				key: "3",
				label: "Tab 3",
				children: <Content3 />,
			},
		];

		return <BaseCollapse defaultActiveKey={"1"} items={items} />;
	},
	parameters: {
		docs: {
			source: {
				code: `
import React from 'react';
import { BaseCollapse , BaseButton} from 'wcf-component-lib/src/components';

const Example = () => {
  const Content1 = () => (
    <div className="flex space-x-4 items-center">
      <BaseButton
        label="Tab Pane 1"
        onClick={() => console.log("Button is clicked")}
      />
      <p>Content of Tab Pane 1</p>
    </div>
  );

  const Content2 = () => (
    <div className="flex space-x-4 items-center">
      <BaseButton
        label="Tab Pane 2"
        onClick={() => console.log("Button is clicked")}
      />
      <p>Content of Tab Pane 2</p>
    </div>
  );

  const Content3 = () => (
    <div className="flex space-x-4 items-center">
      <BaseButton
        label="Tab Pane 3"
        onClick={() => console.log("Button is clicked")}
      />
      <p>Content of Tab Pane 3</p>
    </div>
  );

  const items = [
    {
      key: "1",
      label: (
        <div className="w-full flex flex-col">
          <p>Tab 1</p>
          <p>Tab 2</p>
        </div>
      ),
      children: <Content1 />,
    },
    {
      key: "2",
      label: "Tab 2",
      children: <Content2 />,
    },
    {
      key: "3",
      label: "Tab 3",
      children: <Content3 />,
    },
  ];

  return <BaseCollapse defaultActiveKey={"1"} items={items} />;
};

export default Example;
        `,
			},
		},
	},
};
