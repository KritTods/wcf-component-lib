import type { Meta, StoryObj } from "@storybook/react";
import BaseDragger from "..";
import React from "react";

const meta: Meta<typeof BaseDragger> = {
	title: "BaseComponent/BaseDragger",
	component: BaseDragger,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseDragger>;

export const Default: Story = {
	render: (args) => <BaseDragger {...args} />,
};
