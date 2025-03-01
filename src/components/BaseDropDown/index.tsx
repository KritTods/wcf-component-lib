import React from "react";
import Select from "antd/es/select";
import { Option } from "./model";
import BaseFormItemsProvider from "../../provider/BaseFormItemsProvider";
import { BaseFormProviderProps } from "../../provider/BaseFormItemsProvider/model";
import "./style.scss";
import { SelectMode } from "../../constants/constants";
import Dropdown from "antd/es/dropdown";
import { MenuProps } from "antd/es/menu";
import { handleDropdown } from "./service";
import usePermission from "../../hook/usePermission";
import { checkDisabled } from "../../utils";
type RawValueType = string | number;

interface LabelInValueType {
	label: React.ReactNode;
	value: RawValueType;
	/** @deprecated `key` is useless since it should always same as `value` */
	key?: React.Key;
}

export interface BaseDropDownProps<T extends string = never>
	extends BaseFormProviderProps<T> {
	id?: string;
	option?: Option[];
	placeholder?: string;
	value?: string | number | null;
	showSearch?: boolean;
	className?: string;
	isSelect?: boolean;
	// Select Props
	label?: string;
	labelRender?: (props: LabelInValueType) => React.ReactNode;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getValue?: (value: any) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onClear?: () => void;
	mode?: SelectMode;
	defaultValue?: string | number | null;
	// End Select Props

	// DropDown Props
	menu?: MenuProps["items"];
	trigger?: ("contextMenu" | "click" | "hover")[] | undefined;
	dropdownParent?: JSX.Element | undefined;
	onDropdownClick?: MenuProps["onClick"];
	// End DropDown Props
	size?: "large" | "middle" | "small";
}

const BaseDropDown = <T extends string = never>(
	props: BaseDropDownProps<T>,
) => {
	const {
		option = [],
		placeholder = "โปรดระบุ",
		className,
		labelRender,
		getValue = () => {},
		onClear = () => {},
		value,
		disabled,
		mode,
		defaultValue,
		menu,
		trigger,
		dropdownParent,
		isSelect = true,
		onDropdownClick,
		size,
		pageLevel,
		isStorybook = false,
	} = props;

	const permission = usePermission(pageLevel ?? "edit", isStorybook);

	return (
		<BaseFormItemsProvider<T> {...props}>
			{isSelect ? (
				<Select
					defaultValue={defaultValue}
					className={`rounded ${className}`}
					placeholder={placeholder}
					showSearch
					disabled={checkDisabled<T>({ pageLevel, disabled, permission })}
					allowClear
					value={value}
					onChange={(e) => getValue(e)}
					options={option}
					optionFilterProp="label"
					labelRender={labelRender}
					onClear={onClear}
					mode={mode}
					size={size}
				/>
			) : (
				<Dropdown
					menu={handleDropdown(menu, onDropdownClick)}
					trigger={trigger}
				>
					<a onClick={(e) => e.preventDefault()}>{dropdownParent}</a>
				</Dropdown>
			)}
		</BaseFormItemsProvider>
	);
};

export default BaseDropDown;
