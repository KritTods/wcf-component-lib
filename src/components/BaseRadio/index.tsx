import Radio, { RadioChangeEvent } from "antd/es/radio";
import BaseFormItemsProvider from "../../provider/BaseFormItemsProvider";
import { BaseFormProviderProps } from "../../provider/BaseFormItemsProvider/model";
import "./style.scss";
import React from "react";

export interface RadioItems {
	value: string | number;
	label: string | React.ReactElement;
	desc?: string | React.ReactElement;
	content?: React.ReactNode;
	expandNode?: React.ReactNode;
	className?: string;
	disabled?: boolean;
}

interface BaseRadioProp extends BaseFormProviderProps {
	setValue?: (e: string | number | null) => void;
	items?: RadioItems[];
	isVertical?: boolean;
	fullWidth?: boolean;
	isColorful?: boolean;
	onChange?: (value: unknown) => void;
	checked?: string | number;
	customRadio?: React.ReactNode;
	type?: "default" | "primary";
}

const BaseRadio = (props: BaseRadioProp) => {
	const {
		value,
		setValue,
		items = [],
		isVertical,
		fullWidth = false,
		isColorful = false,
		onChange,
		checked,
		customRadio,
		className,
		disabled = false,
		type = "default",
	} = props;
	const handleOnChange = (e: RadioChangeEvent) => {
		if (setValue) setValue(e.target.value);
		onChange && onChange(e.target.value);
	};

	let classNameText = "";

	switch (type) {
		case "default":
			classNameText = "colorful-radio-group";
			break;
		case "primary":
			classNameText = "colorful-radio-group-primary";
			break;
		default:
			break;
	}

	return (
		<BaseFormItemsProvider {...props}>
			<Radio.Group
				onChange={handleOnChange}
				value={value}
				className={`${fullWidth && "w-full"} ${isColorful ? classNameText : ""}`}
			>
				<div
					className={`flex ${isVertical ? "flex-col space-y-2" : "flex-row"} ${fullWidth && "w-full"} ${className}`}
				>
					{items &&
						items.map((item: RadioItems) => (
							<React.Fragment key={item.value}>
								{item.expandNode ? (
									<div className="bg-[#E7F3F5]">
										<Radio
											className={`${fullWidth && "w-full"}`}
											value={item.value}
											disabled={disabled}
										>
											<div className="flex flex-col">
												<div>{item.label}</div>
												<div className="text-xs font-light">{item.desc}</div>
											</div>
										</Radio>
										{item.expandNode}
									</div>
								) : (
									<Radio
										className={`${fullWidth && "w-full"}`}
										value={item.value}
										key={item.value}
										checked={checked === item.value}
										disabled={disabled}
									>
										<div className="flex flex-col">
											<div>{item.label}</div>
											<div className="text-xs font-light">{item.desc}</div>
										</div>
									</Radio>
								)}
							</React.Fragment>
						))}
					{customRadio && customRadio}
				</div>
			</Radio.Group>
		</BaseFormItemsProvider>
	);
};
export default BaseRadio;
