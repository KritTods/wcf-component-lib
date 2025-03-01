export interface SortOrdersModel {
	direction: string | undefined;
	property: string;
}

export const modelSortOrdersOptions: SortOrdersModel = {
	direction: "DESC",
	property: "updatedDate",
};
export interface PaginationOptions {
	totalData: number;
	pageNumber: number;
	pageSize: number;
	orders?: SortOrdersModel[];
}

export interface PaginationModel {
	page: PaginationOptions;
}

export const modelPaginationOptions: PaginationOptions = {
	totalData: 0,
	pageNumber: 0,
	pageSize: 20,
	orders: [modelSortOrdersOptions],
};

export const modelPagination: PaginationModel = {
	page: {
		...modelPaginationOptions,
	},
};
