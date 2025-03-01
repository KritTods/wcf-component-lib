import React from "react";
import type { Preview } from "@storybook/react";
import "../src/tailwind.css";
import "../src/scss/variable.scss";
import { AntdProvider } from "../src/provider/AntdProvider";
// import { LayoutProvider } from "../src/provider/LayoutProvider";

const configPage = {
	demo: {
		root: {
			url: "/ums/demo/[id]",
			text: "demo",
			breadcrumb: ["root"],
			pageLevel: { add: [2] },
		},
		subMenu: {
			url: "/ums/demo/[id]/subMenu/[subMenuId]",
			text: "Sub Menu",
			breadcrumb: ["root", "subMenu"],
			pageLevel: { add: [2] },
		},
	},
};

export const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export const decorators = [
	(Story: any) => {
		return (
			// <LayoutProvider configPage={configPage} urlApi="">
			<AntdProvider>
				<Story />
			</AntdProvider>
			// </LayoutProvider>
		);
	},
];
