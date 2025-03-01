import { type JWTPayload } from "jose";

// * -------------  Page Breadcrumb

export type DataStructureURL<T extends string = never> = Record<
	string,
	ModulePage<T>
>;

type ModulePage<T extends string = never> = Record<string, PageBreadcrumb<T>>;

export interface PageBreadcrumb<T extends string = never> {
	breadcrumb: string[] | [];
	url: string;
	text: string;
	textHeader?: string;
	pageLevel: Partial<PageLevel<T>>;
}

export type PageLevel<T extends string = never> = {
	[key in Key | T]: number[];
};

export type Key =
	| "view"
	| "list"
	| "add"
	| "edit"
	| "delete"
	| "form"
	| "history"
	| "admin"
	| "superAdmin";

// * -------------  Page Accesses Provider

//! ---- initialValue ----

export const initialValue: LayoutState = {
	basePath: "",
	originUrl: "",
	loading: false,
	position: "",
	branch: "",
	user: null,
	token: null,
	permissionPage: {
		pageCode: "",
		pageName: "",
		pageLevel: 0,
		path: "",
		order: 0,
	},
	menu: [],
	pagesList: [],
	pageLevel: {},
	breadcrumb: [],
	configPage: {},
	childrenHeader: null,
	childrenHeaderRight: null,
	displayScrollButton: false,
	notification: {
		all: 0,
		details: [],
	},
};

export interface LayoutState {
	basePath?: string;
	originUrl: string;
	loading: boolean;
	position: string;
	branch: string;
	user: User | null;
	token: string | null;
	permissionPage: Page;
	menu: Module[];
	pagesList: Page[];
	pageLevel: Record<string, boolean[]> | object;
	breadcrumb: PageBreadcrumb[];
	configPage: DataStructureURL;
	childrenHeader: React.ReactElement | null;
	childrenHeaderRight: React.ReactElement | null;
	displayScrollButton: boolean;
	notification: NotificationList | null;
}

export interface User {
	login: string;
	firstName: string;
	lastName: string;
	email: string;
	ssoBranchCode: string;
	title: string;
	active: string;
}
export interface DecodedUser extends JWTPayload {
	userInfo?: User;
}

export interface Module {
	moduleCode: string;
	moduleName: string;
	moduleFirstPage: string;
	subModules: SubModule[];
}

export interface SubModule {
	code: string;
	name: string;
	pages: Page[];
	order: number;
}

export interface Page {
	pageCode: string;
	pageName: string;
	pageLevel: number | number[];
	path: string;
	permission?: boolean;
	subMenu?: SubMenu[] | [];
	order: number;
}
export interface SubMenu {
	pageCode: string;
	pageName: string;
	pageLevel: number | number[];
	path: string;
	permission?: boolean;
	order: number;
}

export interface NotificationList {
	// image: React.ReactElement;
	// id: string;
	// label: string;
	// count?: string;
	all: number;
	details: NotificationItem[] | [];
}

export interface NotificationItem {
	categoryId: number;
	categoryCode: string;
	categoryName: string;
	cnt: number;
	image?: React.ReactElement;
}

export interface NotificationItemByCategoryCode {
	notificationId: number;
	subject: string;
	categoryName: string;
	subCategoryName: string;
	createdBy: string;
	createdDate: string;
	status: string;
}
