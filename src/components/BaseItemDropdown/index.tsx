import Select from "antd/es/select";
import BaseFormItemsProvider from "../../provider/BaseFormItemsProvider";
import { BaseFormProviderProps } from "../../provider/BaseFormItemsProvider/model";
import _ from "lodash";
import { DownOutlined } from "@ant-design/icons";
import "./style.scss";

export interface Option {
	value: number | string;
	label: string;
	disabled?: boolean;
}

export interface BaseItemDropdownProps extends BaseFormProviderProps {
	id?: string;
	option?: Option[];
	placeholder?: string;
	// value?: string;
	// setValue?: (value: string) => void;
	showSearch?: boolean;
	className?: string;
	label?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value?: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChange?: (val: number, opt: any) => void;
	disabled?: boolean;
	virtual?: boolean;
	loading?: boolean;
	dropdownRender?: (menu: JSX.Element) => JSX.Element;
	mode?: "multiple" | "tags";
	style?: React.CSSProperties;
	fixedHeight?: boolean;
	open?: boolean;
	allowClearIcon?: JSX.Element;
	hideSuffixIcon?: boolean;
	onClear?: () => void;
}

const BaseItemDropdown = (props: BaseItemDropdownProps) => {
	const {
		id,
		option = [],
		placeholder = "โปรดระบุ",
		className = "",
		value,
		onChange,
		disabled,
		children = null,
		virtual = true,
		loading = false,
		dropdownRender,
		mode,
		style,
		open,
		allowClearIcon,
		hideSuffixIcon = false,
		onClear,
	} = props;

	return (
		<BaseFormItemsProvider {...props}>
			<Select
				{...(id && { id: id })}
				style={
					style
						? { ...style, minWidth: "250px", height: "48px" }
						: { height: "48px" }
				}
				onChange={onChange}
				disabled={disabled}
				className={`h-[48px] text-2xl w-full ${className}`}
				placeholder={placeholder}
				showSearch
				allowClear={allowClearIcon ? { clearIcon: allowClearIcon } : true}
				value={value}
				optionFilterProp="children"
				filterOption={(input, option) => {
					let childrenContent = Array.isArray(option.children)
						? _.join(option.children, "")
						: option.children;

					const label = option.label;

					if (
						_.isString(label) &&
						_.toLower(label).includes(_.toLower(input))
					) {
						return true;
					}

					if (
						_.isString(childrenContent) &&
						_.toLower(childrenContent).includes(_.toLower(input))
					) {
						return true;
					}

					return false;
				}}
				virtual={virtual}
				loading={loading}
				dropdownRender={dropdownRender}
				mode={mode}
				open={open}
				suffixIcon={hideSuffixIcon ? <></> : <DownOutlined />}
				onClear={onClear}
			>
				{option.length > 0
					? option.map((opt) => (
							<Select.Option
								key={opt.value}
								value={opt.value}
								label={opt.label}
								disabled={opt.disabled}
							>
								{opt.label}
							</Select.Option>
						))
					: children}
			</Select>
		</BaseFormItemsProvider>
	);
};

export default BaseItemDropdown;
