import React, { Dispatch, SetStateAction } from "react";
import { Button } from "antd";

export interface Option {
	value: string | number;
	label: string;
	disabled?: boolean;
}

interface BaseButtonGroupProps {
	options: Option[];
	buttonClassName?: string;
	rowColumns?: number;
	selectedValues: string[];
	setSelectedValues: Dispatch<SetStateAction<string[]>>;
}
export default function BaseButtonGroup(
	props: BaseButtonGroupProps,
): React.ReactElement {
	const {
		options,
		buttonClassName,
		rowColumns,
		selectedValues,
		setSelectedValues,
	} = props;

	const toggleSelection = (value: string) => {
		setSelectedValues(
			(prevSelected: string[]) =>
				prevSelected.includes(value)
					? prevSelected.filter((item) => item !== value) // Deselect if already selected
					: [...prevSelected, value], // Select otherwise
		);
	};

	return (
		<div
			className={`w-full grid ${rowColumns ? "grid-cols-" + rowColumns : "grid-cols-4"} gap-4`}
		>
			{options.map((option) => {
				return (
					<Button
						key={option.value}
						type={
							selectedValues.includes(option.value.toString())
								? "primary"
								: "default"
						}
						disabled={option.disabled}
						onClick={() => toggleSelection(option.value.toString())}
						className={`py-2 w-full rounded ${buttonClassName}`}
						size="large"
					>
						{option.label}
					</Button>
				);
			})}
		</div>
	);
}
