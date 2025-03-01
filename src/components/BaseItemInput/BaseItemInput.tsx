import React from "react";
import _ from "lodash";
import Input from "antd/es/input";
import BaseFormItemsProvider from "../../provider/BaseFormItemsProvider";
import { BaseFormProviderProps } from "../../provider/BaseFormItemsProvider/model";
import usePermission from "../../hook/usePermission";
import { checkDisabled } from "../../utils";
export interface BaseItemInputProps<T extends string = never>
	extends BaseFormProviderProps<T> {
	id?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	rules?: Array<{ [key: string]: any }>;
	disabled?: boolean;
	onChangeFunction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	addonBefore?: React.ReactNode;
	type?: string;
	onPressEnter?: () => void;
	className?: string;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
}

export default function BaseItemInput<T extends string = never>(
	props: BaseItemInputProps<T>,
) {
	const {
		id,
		rules = [],
		value,
		onChangeFunction = () => {},
		disabled = false,
		className,
		placeholder,
		addonBefore,
		type,
		children,
		onPressEnter,
		pageLevel,
		isStorybook = false,
		prefix = null,
		suffix = null,
	} = props;

	let maxLength = undefined;

	const findMax = _.find(rules, (obj) => obj?.max !== undefined);
	if (findMax) {
		maxLength = findMax.max;
	}

	const permission = usePermission<T>(pageLevel ?? "edit", isStorybook);

	return (
		<BaseFormItemsProvider<T> {...props}>
			<>
				<Input
					id={id}
					className={`h-[48px] text-base rounded px-3 py-2 ${className}`}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						onChangeFunction(e)
					}
					placeholder={placeholder ? placeholder : "โปรดระบุ"}
					value={value ?? ""}
					maxLength={maxLength}
					disabled={checkDisabled<T>({ pageLevel, disabled, permission })}
					addonBefore={addonBefore}
					type={type ? type : "text"}
					onPressEnter={onPressEnter}
					prefix={prefix}
					suffix={suffix}
				/>
				{children}
			</>
		</BaseFormItemsProvider>
	);
}
