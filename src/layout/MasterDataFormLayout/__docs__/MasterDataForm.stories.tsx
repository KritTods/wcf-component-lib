import type { Meta, StoryObj } from "@storybook/react";
import MasterDataForm from "..";

const meta: Meta<typeof MasterDataForm> = {
	title: "Layouts/MasterDataForm",
	component: MasterDataForm,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MasterDataForm>;

export const Default: Story = {
	args: {},
};
