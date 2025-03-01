// src/provider/AntdProvider.tsx
import React from "react";
import { ConfigProvider } from "antd";
import "../scss/global.scss";
interface AntdProviderProps {
	children: React.ReactNode;
}

export const AntdProvider: React.FC<AntdProviderProps> = ({ children }) => {
	const primary = "#1C4651";
	const hoverPrimary = "#2C5762";
	const activePrimary = "#003F4F";
	const whiteColor = "#FFFFFF";

	return (
		<ConfigProvider
			theme={{
				components: {
					Alert: {
						colorText: primary,
						colorBgContainer: whiteColor,
					},
					Badge: {
						colorPrimary: primary,
					},
					Breadcrumb: {
						colorText: primary,
					},
					DatePicker: {
						activeBorderColor: primary,
						colorPrimaryHover: hoverPrimary,
					},
					Dropdown: {
						colorPrimary: primary,
					},
					Form: {
						colorPrimary: primary,
					},
					Input: {
						colorPrimary: primary,
						colorPrimaryHover: hoverPrimary,
					},
					Menu: {
						colorPrimary: primary,
						colorItemText: primary,
						colorItemTextHover: hoverPrimary,
					},
					Modal: {
						colorPrimary: primary,
						headerBg: primary,
					},
					Notification: {
						colorPrimary: primary,
					},
					Radio: {
						colorPrimary: primary,
						colorPrimaryHover: hoverPrimary,
					},
					Select: {
						colorPrimary: primary,
						colorPrimaryHover: hoverPrimary,
					},
					Slider: {
						colorPrimary: primary,
					},
					Spin: {
						colorPrimary: primary,
					},
					Button: {
						colorPrimary: primary,
						colorPrimaryHover: hoverPrimary,
						colorPrimaryActive: activePrimary,
					},
					Tabs: {
						colorPrimary: primary,
						colorPrimaryHover: hoverPrimary,
					},
					Card: {
						colorBorder: primary,
						colorBgContainer: whiteColor,
					},
					Checkbox: {
						colorPrimary: primary,
						colorPrimaryHover: hoverPrimary,
					},
					Collapse: {
						headerBg: primary,
						colorText: whiteColor,
					},
					Switch: {
						colorPrimary: primary,
						colorPrimaryHover: hoverPrimary,
					},
					Tag: {
						colorPrimary: primary,
						colorPrimaryHover: hoverPrimary,
					},
					Tooltip: {
						colorPrimary: primary,
						colorText: whiteColor,
					},
				},
				token: {
					// Seed Token
					colorPrimary: primary,
					colorPrimaryHover: hoverPrimary,
					colorPrimaryActive: activePrimary,
					borderRadius: 2,
				},
			}}
		>
			{children}
		</ConfigProvider>
	);
};
