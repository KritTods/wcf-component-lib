import Radio, { RadioChangeEvent } from "antd/es/radio";
import BaseFormItemsProvider from "../../provider/BaseFormItemsProvider";
import { BaseFormProviderProps } from "../../provider/BaseFormItemsProvider/model";
import "./style.scss";
import React from "react";
import { RadioItems } from "../BaseRadio";

interface BaseRadioButtonProp extends BaseFormProviderProps {
	setValue?: (e: string | number | null) => void;
	items?: RadioItems[];
	isVertical?: boolean;
	fullWidth?: boolean;
	isColorful?: boolean;
	onChange?: (value: unknown) => void;
	checked?: string | number;
	customWidthSize?: string;
	groupDirection?: "horizental" | "vertical";
	alignContent?: "start" | "center" | "end";
}

const BaseRadioButton = (props: BaseRadioButtonProp) => {
	const {
		value,
		setValue,
		items = [],
		onChange,
		checked,
		className,
		disabled = false,
		customWidthSize = "w-[200px]",
		groupDirection = "horizental",
		alignContent = "center",
	} = props;

	const handleOnChange = (e: RadioChangeEvent) => {
		if (setValue) setValue(e.target.value);
		onChange && onChange(e.target.value);
	};

	let alignmentContent = "justify-center";

	switch (alignContent) {
		case "start":
			alignmentContent = "justify-start";
			break;
		case "center":
			alignmentContent = "justify-center";
			break;
		case "end":
			alignmentContent = "justify-end";
			break;
		default:
			break;
	}

	const getDirectionGroup = (val: string): string => {
		if (val === "horizental") {
			return "flex-row";
		} else {
			return "flex-col";
		}
	};

	return (
		<BaseFormItemsProvider {...props}>
			<Radio.Group
				onChange={handleOnChange}
				value={value}
				className={`${className} radio-button flex ${getDirectionGroup(groupDirection)} gap-4`}
			>
				{items &&
					items.map((item: RadioItems) => (
						<React.Fragment key={item.value}>
							<Radio
								className={`${customWidthSize} h-[48px] flex ${alignmentContent} items-center`}
								value={item.value}
								key={item.value}
								checked={checked === item.value}
								disabled={disabled}
							>
								{item.label}
							</Radio>
						</React.Fragment>
					))}
			</Radio.Group>
		</BaseFormItemsProvider>
	);
};
export default BaseRadioButton;
