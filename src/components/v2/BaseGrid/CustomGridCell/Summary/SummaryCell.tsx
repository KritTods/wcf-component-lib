"use client";
import { Table } from "antd";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export type SummaryCellProps = ComponentPropsWithoutRef<
	typeof Table.Summary.Cell
> & {
	colSpan?: number;
};

const SummaryCell = forwardRef<
	ElementRef<typeof Table.Summary.Cell>,
	ComponentPropsWithoutRef<typeof Table.Summary.Cell>
>(({ className, ...props }) => (
	<Table.Summary.Cell className={className} {...props} />
));

SummaryCell.displayName = "SummaryCell";

export { SummaryCell };
