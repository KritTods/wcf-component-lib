import React from "react";
import _ from "lodash";
import TextArea from "antd/es/input/TextArea";
import "./style.css";
import BaseFormItemsProvider from "../../provider/BaseFormItemsProvider";
import { BaseFormProviderProps } from "../../provider/BaseFormItemsProvider/model";
import { BaseFormItemPosition } from "../../constants/form-item-position";
import usePermission from "../../hook/usePermission";
import { checkDisabled } from "../../utils";
export interface Props<T extends string = never>
	extends BaseFormProviderProps<T> {
	id?: string;
	itemName: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChangeFunction?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	disabled?: boolean;
	placeholder?: string;
	// onChangeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
	labelPosition?: BaseFormItemPosition.LEFT | BaseFormItemPosition.TOP;
	labelLeftSpan?: number;
	rows?: number;
}

export default function BaseItemTextArea<T extends string = never>(
	props: Props<T>,
) {
	const {
		id,
		rules = [],
		value,
		onChangeFunction = () => {},
		disabled = false,
		rows,
		placeholder,
		pageLevel,
		isStorybook = false,
	} = props;

	let maxLength = undefined;

	const findMax = _.find(rules, (obj) => obj?.max !== undefined);
	if (findMax) {
		maxLength = findMax.max;
	}

	const permission = usePermission(pageLevel ?? "edit", isStorybook);

	return (
		<BaseFormItemsProvider<T> {...props}>
			<TextArea
				{...(id && { id })}
				className="text-base rounded mb-2"
				placeholder={placeholder ?? "โปรดระบุ"}
				value={value ?? ""}
				showCount
				maxLength={maxLength}
				onChange={(
					e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
				) => onChangeFunction(e)}
				style={{ resize: rows ? "block" : "none" }}
				autoSize={!rows ? true : false}
				disabled={checkDisabled<T>({ pageLevel, disabled, permission })}
				rows={rows}
			/>
		</BaseFormItemsProvider>
	);
}
