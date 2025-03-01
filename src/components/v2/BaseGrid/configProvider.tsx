import { ConfigProviderProps } from "antd";

export const configProviderBaseGrid: ConfigProviderProps = {
	theme: {
		components: {
			Table: {
				headerBg: "#1C4651",
				headerSortHoverBg: "#2C5762",
				rowExpandedBg: "#1C4651",
				headerBorderRadius: 16,
				headerSortActiveBg: "#003F4F",
				bodySortBg: "transparent",
				headerColor: "#FFFFFF",
				headerSplitColor: "#1C4651",
				rowSelectedBg: "#e6f4ff",
				rowHoverBg: "#fafafa",
				rowSelectedHoverBg: "#bae0ff",
				footerBg: "#fafafa",
			},
			Pagination: {
				itemActiveBg: "#1C4651",
			},
		},
		token: {
			borderRadius: 2,
			colorPrimary: "#1C4651",
			colorPrimaryHover: "#2C5762",
			colorPrimaryActive: "#003F4F",
		},
	},
};
