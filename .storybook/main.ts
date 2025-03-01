import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook-addon", // Correct addon name
		"@storybook/addon-interactions",
		"@storybook/addon-styling", // Use the appropriate addon for styling with Vite
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	viteFinal: (config) => {
		config.resolve = {
			...config.resolve,
			alias: {
				...(config.resolve?.alias || {}),
				"next/link": path.resolve(__dirname, "../__mocks__/next/link.tsx"),
			},
		};
		return config;
	},
};

export default config;
