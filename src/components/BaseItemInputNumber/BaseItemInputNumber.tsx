import React from "react";
import BaseFormItemsProvider from "../../provider/BaseFormItemsProvider";
import { BaseFormProviderProps } from "../../provider/BaseFormItemsProvider/model";
import { InputNumber } from "antd";
import "./style.scss";

export interface Props extends BaseFormProviderProps {
	id?: string;
	rules?: Array<{ [key: string]: unknown }>;
	hideFieldControl?: boolean;
	decimalDigit?: number;
	disabled?: boolean;
	onChangeFunction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	addonBefore?: React.ReactNode;
	onPressEnter?: () => void;
	value?: number;
	step?: number;
	sizes?: "small" | "middle" | "large";
	maxLength?: number;
	textAlign?: "left" | "center" | "right";
}

export default function BaseItemInputNumber(props: Props) {
	const {
		id,
		hideFieldControl = false,
		decimalDigit = 2,
		disabled = false,
		className,
		placeholder,
		addonBefore,
		children,
		step = 1,
		onChangeFunction,
		sizes = "large",
		value = 0,
		maxLength,
		textAlign = "right",
		itemName,
	} = props;

	const getInputNumberClassName = () => {
		return `h-[48px] w-[130px] text-base rounded ${
			hideFieldControl && "hide-arrow"
		}  base-item-input-number p-1 text-${textAlign} ${className}`;
	};

	//for BaseFormItemsProvider
	if (itemName) {
		return (
			<>
				<BaseFormItemsProvider {...props}>
					<InputNumber
						onChange={(value) => {
							if (onChangeFunction) {
								onChangeFunction({
									target: { value: value?.toString() || "0.00" },
								} as React.ChangeEvent<HTMLInputElement>);
							}
						}}
						id={id}
						size={sizes}
						className={getInputNumberClassName()}
						placeholder={placeholder ? placeholder : "โปรดระบุ"}
						step={step}
						addonBefore={addonBefore}
						disabled={disabled}
						precision={decimalDigit}
						formatter={(value) => {
							const [integerPart, decimalPart] = Number(value)
								.toFixed(decimalDigit)
								.split(".");

							return `${integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${decimalPart}`;
						}}
						parser={(value) =>
							value?.replace(/\$\s?|(,*)/g, "") as unknown as number
						}
						value={value}
						stringMode
						maxLength={maxLength}
					/>
				</BaseFormItemsProvider>
				{children}
			</>
		);
	}

	//for state value
	return (
		<>
			<InputNumber
				onChange={(value) => {
					if (onChangeFunction) {
						onChangeFunction({
							target: { value: value?.toString() || "0.00" },
						} as React.ChangeEvent<HTMLInputElement>);
					}
				}}
				id={id}
				size={sizes}
				className={getInputNumberClassName()}
				placeholder={placeholder ? placeholder : "โปรดระบุ"}
				step={step}
				addonBefore={addonBefore}
				disabled={disabled}
				precision={decimalDigit}
				formatter={(value) => {
					const [integerPart, decimalPart] = Number(value)
						.toFixed(decimalDigit)
						.split(".");

					return `${integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${decimalPart}`;
				}}
				parser={(value) =>
					value?.replace(/\$\s?|(,*)/g, "") as unknown as number
				}
				value={value}
				stringMode
			/>
			{children}
		</>
	);
}
