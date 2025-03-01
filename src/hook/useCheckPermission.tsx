import { useEffect } from "react";
import {
	usePathname,
	useRouter,
	useSearchParams,
	useParams,
} from "next/navigation";
import { useLayout, type LayoutContextType } from "../provider/LayoutProvider";
import {
	Page,
	DataStructureURL,
	PageBreadcrumb,
	Key,
} from "../provider/LayoutProvider/type";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export function useCheckPermission(): void {
	const searchParams = useSearchParams();
	const router = useRouter();
	const url = usePathname();
	const params = useParams();

	const {
		stateLayout: { basePath, pagesList, configPage },
		dispatchLayout,
	}: LayoutContextType = useLayout();

	useEffect(() => {
		if (Array.isArray(pagesList) && pagesList.length > 0) {
			const permissionPage = findPermissionPage({ basePath, url, pagesList });
			const breadcrumb = findBreadcrumb(url, searchParams, params, configPage);

			if (permissionPage && breadcrumb.page) {
				const pageLevel = checkPermission({
					permissionPage,
					page: breadcrumb.page,
				});

				dispatchLayout({
					type: "setPermission",
					payload: {
						permissionPage,
						breadcrumb: breadcrumb.breadcrumb,
						pageLevel,
					},
				});
			} else {
				dispatchLayout({
					type: "resetPermission",
				});
			}

			// if (!permissionPage) router.push(window.location.origin);
		}
	}, [pagesList, url, dispatchLayout, router, searchParams]);
}

interface FindPageOnApi {
	basePath?: string;
	url: string;
	pagesList: Page[];
}

function findPermissionPage({
	basePath = "",
	url,
	pagesList,
}: FindPageOnApi): Page | null {
	const basePathWeb = process?.env?.NEXT_PUBLIC_BASE_PATH || basePath;
	const urlPath = basePathWeb ? `${basePathWeb}${url}` : url;

	for (const page of pagesList) {
		if (
			urlPath.startsWith(page.path) &&
			(urlPath === page.path || urlPath.startsWith(page.path + "/"))
		) {
			return page;
		} else if (page?.subMenu) {
			for (const subPage of page.subMenu) {
				if (
					urlPath.startsWith(subPage.path) &&
					(urlPath === subPage.path || urlPath.startsWith(subPage.path + "/"))
				) {
					return subPage;
				}
			}
		}
	}

	return null;
}

const replaceValuesInUrl = (
	url: string,
	searchParams: URLSearchParams,
): string => {
	let setUrl = url;

	const matches = url.match(/{([^}]+)}/g);

	if (matches) {
		matches.forEach((match) => {
			const paramName = match.replace(/[{}]/g, "");
			const paramValue = searchParams.get(paramName);
			if (paramValue !== null) {
				setUrl = setUrl.replace(match, paramValue);
			}
		});
	}

	return setUrl;
};
const replaceUrlByParam = (url: string, params: Params): string => {
	let setUrl = url;

	for (const param in params) {
		setUrl = setUrl.replace(`[${param}]`, params[param]);
	}

	return setUrl;
};

interface FindBreadcrumb {
	breadcrumb: PageBreadcrumb[] | null;
	page: PageBreadcrumb | null;
}

function findBreadcrumb(
	url: string,
	searchParams: URLSearchParams,
	params: Params,
	configPage: DataStructureURL,
): FindBreadcrumb {
	const newUrlAll: DataStructureURL = JSON.parse(
		JSON.stringify(configPage),
	) as DataStructureURL;

	for (const key in newUrlAll) {
		const section = newUrlAll[key];
		for (const subKey in section) {
			const page = section[subKey];

			if (page.url.split("?")[0] === url) {
				const breadcrumbList = page.breadcrumb.map((d: string) => {
					const breadcrumb = section[d];
					breadcrumb.url = replaceValuesInUrl(breadcrumb.url, searchParams);

					return breadcrumb;
				});

				return { breadcrumb: breadcrumbList, page };
			} else {
				const checkUrl = replaceUrlByParam(page.url, params);

				if (url === checkUrl) {
					const breadcrumbList = page.breadcrumb.map((d: string) => {
						const breadcrumb = section[d];
						breadcrumb.url = replaceUrlByParam(breadcrumb.url, params);

						return breadcrumb;
					});

					return { breadcrumb: breadcrumbList, page };
				}
			}
		}
	}

	return { breadcrumb: null, page: null };
}

interface CheckPermission {
	permissionPage: Page;
	page: PageBreadcrumb;
}

function checkPermission({
	permissionPage,
	page,
}: CheckPermission): Record<Key, boolean> {
	const { pageLevel } = page;
	const level: number | number[] = permissionPage.pageLevel;
	const levelArray = Array.isArray(level) ? level : [level];
	const result: Record<Key, boolean> = {} as Record<Key, boolean>;

	for (const k in pageLevel) {
		if (Object.prototype.hasOwnProperty.call(pageLevel, k)) {
			const section: number[] | undefined = pageLevel[k as Key];
			if (section) {
				result[k as Key] = levelArray.some((l) => section.includes(l));
			} else {
				result[k as Key] = false;
			}
		}
	}

	return result;
}
