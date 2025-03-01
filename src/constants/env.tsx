export const env = {
	isDev: process.env.NEXT_PUBLIC_DEV,
	basePath: process.env.NEXT_PUBLIC_BASE_PATH,
	webUrl: process.env.NEXT_PUBLIC_WEB_URL,
	middlewarePath: process.env.NEXT_PUBLIC_MIDDLEWARE_PATH,
} as const;

export type env = typeof env;
