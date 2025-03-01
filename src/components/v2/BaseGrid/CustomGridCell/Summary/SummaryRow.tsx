"use client";
import { Table } from "antd";
import {
	ComponentPropsWithoutRef,
	ElementRef,
	forwardRef,
	HTMLAttributes,
	TdHTMLAttributes,
} from "react";
import "./style.scss";

const SummaryRow = forwardRef<
	ElementRef<typeof Table.Summary.Row>,
	ComponentPropsWithoutRef<typeof Table.Summary.Row>
>(({ className, ...props }) => (
	<Table.Summary.Row className={` ${className}`} {...props} />
));

SummaryRow.displayName = "SummaryRow";

const TableRow = forwardRef<
	HTMLTableRowElement,
	HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
	<tr ref={ref} className={className} {...props} />
));
TableRow.displayName = "TableRow";

const TableCell = forwardRef<
	HTMLTableCellElement,
	TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<td ref={ref} className={className} {...props} />
));
TableCell.displayName = "TableCell";

export { SummaryRow, TableCell, TableRow };
