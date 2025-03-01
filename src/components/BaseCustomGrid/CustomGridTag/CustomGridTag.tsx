"use client";
import { Tag } from "antd";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export type CustomGridTagProps = ComponentPropsWithoutRef<typeof Tag> & {
	colSpan?: number;
};

const CustomGridTag = forwardRef<
	ElementRef<typeof Tag>,
	ComponentPropsWithoutRef<typeof Tag>
>(({ className, ...props }) => <Tag className={className} {...props} />);

CustomGridTag.displayName = "CustomGridTag";

export { CustomGridTag };
