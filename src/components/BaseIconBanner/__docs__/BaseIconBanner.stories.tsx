import type { Meta, StoryObj } from "@storybook/react";
import BaseIconBanner from "../";
import React from "react";
import { HomeFilled } from "@ant-design/icons";

const meta: Meta<typeof BaseIconBanner> = {
	title: "BaseComponent/Layout/BaseIconBanner",
	component: BaseIconBanner,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseIconBanner>;

export const DefaultIconBanner: Story = {
	args: {
		title: "Title",
		textColor: "",
		backgroundColor: "#E7F3F5",
		iconLeft: <span className="text-[#1C4651]">Icon</span>,
		titleWeight: "bold",
	},
	parameters: {
		docs: {
			source: {
				code: `
                import React from 'react';
                import { BaseIconBanner } from 'wcf-component-lib/src/components';
                import { HomeFilled } from '@ant-design/icons';

                const Example = () => (
                    <BaseIconBanner
                        title='BaseIconBanner'
                        textColor=''
                        backgroundColor='#E7F3F5'
                        iconLeft={
                            <span className='text-[#1C4651]'>
                                Icon
                            </span>
                        }
                    />
                );

                export default Example;
                `,
			},
		},
	},
};

export const IconBannerWithCustomClass: Story = {
	render: () => {
		return (
			<BaseIconBanner
				title="BaseIconBanner"
				description="This is the description for the icon banner."
				textColor="#267852"
				backgroundColor="#E7F3F5"
				iconLeft={
					<span className="text-[#1C4651]">
						<HomeFilled />
					</span>
				}
				titleWeight="bold"
			/>
		);
	},
	args: {
		title: "Example title",
		description: "",
	},
	parameters: {
		docs: {
			source: {
				code: `
                import React from 'react';
                import { BaseIconBanner } from 'wcf-component-lib/src/components';
                import { HomeFilled } from '@ant-design/icons';

                const Example = () => (
                    <BaseIconBanner
                        title="Example title"
                        backgroundColor="#E7F3F5"
                        textColor="#267852"
                        fullWidth
                        titleSize='20px'
                        iconSize='18px'
                        titleWeight='bold'
                        iconLeft={
                            <span className='text-[#1C4651]'>
                                <HomeFilled />
                            </span>
                        }
                    />
                );

                export default Example;
                `,
			},
		},
	},
};
