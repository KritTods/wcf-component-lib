import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import BaseTimeline from "../";

const meta: Meta<typeof BaseTimeline> = {
	title: "BaseComponent/Layout/BaseTimeline",
	component: BaseTimeline,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseTimeline>;

export const DefaultTimeline: Story = {
	args: {
		items: [
			{
				children: "วันที่รับแจ้ง",
			},
			{
				children: "วันที่ประสบอันตราย",
			},
		],
		mode: "left",
	},
	parameters: {
		docs: {
			source: {
				code: `
                import React from 'react';
                import { BaseTimeline } from 'wcf-component-lib/src/components';

                const Example = () => (
                    <BaseTimeline
                    items={[
      {
        children: 'วันที่รับแจ้ง',
      },
      {
        children: 'วันที่ประสบอันตราย',
      },
    ]}
                    mode='left'
            />
                );

                export default Example;
                `,
			},
		},
	},
};

export const TimelineWithCustomClass: Story = {
	render: () => {
		const timelineItems = [
			{
				children: (
					<div className="w-[180px]">
						<div className="text-[#000000D9] text-[12px]">วันที่รับแจ้ง</div>
						<div className="text-[#C6940B] text-[20px]">วันที่ 05/06/2567</div>
					</div>
				),
			},
			{
				children: (
					<div className="w-[180px]">
						<div className="text-[#000000D9] text-[12px]">
							วันที่ประสบอันตราย
						</div>
						<div className="text-[#C6940B] text-[20px]">วันที่ 18/03/2567</div>
					</div>
				),
			},
		];

		return (
			<BaseTimeline
				items={timelineItems}
				mode="left"
				daysDifference={155}
				extend
			/>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
        import React from 'react';
        import { BaseTimeline } from 'wcf-component-lib/src/components';

        const Example = () => {
                
        const timelineItems = [
            {
                children: (
                    <div className='w-[180px]'>
                        <div className='text-[#000000D9] text-[12px]'>วันที่รับแจ้ง</div>
                        <div className='text-[#C6940B] text-[20px]'>วันที่ 05/06/2567</div>
                    </div>
                )
            },
            {
                children: (
                    <div className='w-[180px]'>
                        <div className='text-[#000000D9] text-[12px]'>วันที่ประสบอันตราย</div>
                        <div className='text-[#C6940B] text-[20px]'>วันที่ 18/03/2567</div>
                    </div>
                )
            }
        ];

                return (
                <BaseTimeline
                items={timelineItems}
                mode="left"
                extend={true}
                daysDifference={155}
            />
                )
                }

                export default Example;
                `,
			},
		},
	},
};
