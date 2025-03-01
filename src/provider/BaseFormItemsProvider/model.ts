import { BaseFormItemPosition } from "../../constants/form-item-position";
import { Key } from "../../provider/LayoutProvider/type";

export interface BaseFormProviderProps<T extends string = never> {
	itemName?: string | string[];
	id?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	rules?: Array<{ [key: string]: any }>;
	value?: string | number | null;
	disabled?: boolean;
	label?: string;
	onChangeFunction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	labelPosition?:
		| BaseFormItemPosition.LEFT
		| BaseFormItemPosition.TOP
		| BaseFormItemPosition.RIGHT;
	labelLeftSpan?: number;
	children?: JSX.Element;
	notForm?: boolean;
	className?: string;
	notFormClassName?: string;
	noMarginItemsProvider?: boolean;
	pageLevel?: Key | T;
	isStorybook?: boolean;
	labelClassName?: string;
	labelWarning?: string;
}
