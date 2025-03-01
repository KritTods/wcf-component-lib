import { TypeForm } from "./type";
import { SortOrdersModel } from "../components/BasePagination/model";
export interface Pagination {
	pageNumber: number;
	pageSize: number;
	orders?: SortOrdersModel[];
}

export interface Order {
	direction?: string;
	property?: string;
}

export interface FormDefault {
	type: TypeForm;
	loading: boolean;
}

export interface InitialStateDefault {
	loading: boolean;
	loadData: boolean;
}
export interface SelectData {
	value: number | string;
	label: string;
	// disabled?: boolean
}
export interface FieldHistory {
	fieldName: string;
}
export interface SummaryRowItem {
	title: string;
	value?: string | number;
	isForm?: boolean;
	itemName?: string | string[] | undefined;
}
