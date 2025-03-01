import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import BasePagination from "..";

const meta: Meta<typeof BasePagination> = {
	title: "BaseComponent/BasePagination",
	component: BasePagination,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BasePagination>;

export const DefaultPagination: Story = {
	render: (args) => {
		const [page, setPage] = useState({
			pageNumber: 0,
			pageSize: 10,
			totalData: 100,
		});

		return (
			<div className="w-[800px]">
				<BasePagination {...args} page={page} setPagination={setPage} />
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import React, { useState } from 'react';
import { BasePagination } from 'wcf-component-lib/src/components';

const PaginationExample = () => {
  const [page, setPage] = useState({
    pageNumber: 0,
    pageSize: 10,
    totalData: 100,
  });

  return (
    <div className="w-[800px]">
      <BasePagination
        page={page}
        setPagination={setPage}
      />
    </div>
  );
};

export default PaginationExample;
        `,
			},
		},
	},
};
