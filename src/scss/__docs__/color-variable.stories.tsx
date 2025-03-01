import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta = {
	title: "Foundation/colorVariable",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj;

interface ColorProps {
	variable: string;
	label: string;
	hex: string;
}

const ColorBox = ({ variable, label, hex }: ColorProps) => (
	<div
		style={{
			display: "flex",
			alignItems: "center",
			marginBottom: "1rem",
			backgroundColor: "white",
			padding: "1rem",
			borderRadius: "8px",
			boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
		}}
	>
		<div
			style={{
				width: "100px",
				height: "48px",
				backgroundColor: `var(--${variable})`,
				borderRadius: "4px",
				marginRight: "1rem",
				border: "1px solid #dedede",
			}}
		/>
		<div>
			<div style={{ fontWeight: "bold", marginBottom: "4px" }}>{label}</div>
			<div style={{ fontSize: "14px", color: "#666" }}>
				<div>Variable: --{variable}</div>
				<div>HEX: {hex}</div>
			</div>
		</div>
	</div>
);

const ColorSection = ({
	title,
	colors,
}: {
	title: string;
	colors: ColorProps[];
}) => (
	<div style={{ marginBottom: "2rem" }}>
		<h3 style={{ marginBottom: "1rem" }}>{title}</h3>
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
				gap: "1rem",
			}}
		>
			{colors.map((color) => (
				<ColorBox key={color.variable} {...color} />
			))}
		</div>
	</div>
);

export const Colors: Story = {
	render: () => {
		const primaryColors: ColorProps[] = [
			{ variable: "text-primary", label: "Primary", hex: "#1c4651" },
			{ variable: "text-primary-dark", label: "Primary Dark", hex: "#163841" },
			{
				variable: "text-primary-bright",
				label: "Primary Bright",
				hex: "#779097",
			},
			{
				variable: "text-primary-very-bright",
				label: "Primary Very Bright",
				hex: "#e7f3f5",
			},
		];

		const secondaryColors: ColorProps[] = [
			{ variable: "text-secondary", label: "Secondary", hex: "#fbc108" },
			{
				variable: "text-secondary-yellow",
				label: "Secondary Yellow",
				hex: "#c99a06",
			},
			{
				variable: "text-secondary-very-bright",
				label: "Secondary Very Bright",
				hex: "#fff9e5",
			},
		];

		const baseColors: ColorProps[] = [
			{
				variable: "text-title-content",
				label: "Title Content",
				hex: "#212121",
			},
			{
				variable: "text-description-icon-form-divider",
				label: "Description/Icon/Form/Divider",
				hex: "#4b5760",
			},
			{
				variable: "text-placeholder-text",
				label: "Placeholder Text",
				hex: "#bababa",
			},
			{ variable: "text-disable", label: "Disable", hex: "#ededed" },
			{ variable: "text-border", label: "Border", hex: "#dedede" },
			{ variable: "text-background", label: "Background", hex: "#f1f4f7" },
			{ variable: "text-white", label: "White Text", hex: "#ffffff" },
			{ variable: "text-link", label: "Link", hex: "#1a6ca8" },
			{
				variable: "text-button-cancel",
				label: "Button Cancel",
				hex: "#dedede",
			},
		];

		const statusColors: ColorProps[] = [
			{ variable: "text-success", label: "Success", hex: "#09aa6a" },
			{
				variable: "text-success-vbright",
				label: "Success Very Bright",
				hex: "#e7faf2",
			},
			{ variable: "text-waiting", label: "Waiting", hex: "#fbc108" },
			{
				variable: "text-waiting-vbright",
				label: "Waiting Very Bright",
				hex: "#fff9e5",
			},
			{ variable: "text-error", label: "Error", hex: "#c42828" },
			{
				variable: "text-error-vbright",
				label: "Error Very Bright",
				hex: "#f9eaea",
			},
			{ variable: "text-alert", label: "Alert", hex: "#fde69c" },
			{ variable: "text-pending", label: "Pending", hex: "#6666b3" },
			{
				variable: "text-pending-vbright",
				label: "Pending Very Bright",
				hex: "#e6e6f2",
			},
			{
				variable: "text-pending-vdark",
				label: "Pending Very Dark",
				hex: "#000080",
			},
			{ variable: "text-wainting", label: "Waiting", hex: "#f89862" },
			{
				variable: "text-wainting-vbright",
				label: "Waiting Very Bright",
				hex: "#fef0e9",
			},
			{ variable: "text-wainting-dark", label: "Waiting Dark", hex: "#f56c1f" },
			{ variable: "text-new", label: "New", hex: "#176197" },
			{
				variable: "text-new-vbright",
				label: "New Very Bright",
				hex: "#e6eff5",
			},
			{ variable: "text-inactive", label: "Inactive", hex: "#121212" },
			{
				variable: "text-inactive-vbright",
				label: "Inactive Very Bright",
				hex: "#ededed",
			},
		];

		const additionalColors: ColorProps[] = [
			{ variable: "text-red-400", label: "Red 400", hex: "#e29494" },
		];

		const gradients = [
			{
				variable: "gradient-primary",
				label: "Primary Gradient",
				value: "linear-gradient(to bottom right, #1c4651, #163841)",
			},
			{
				variable: "gradient-secondary",
				label: "Secondary Gradient",
				value: "linear-gradient(to bottom right, #fbc108, #c99a06)",
			},
			{
				variable: "gradient-collapse-header-primary",
				label: "Collapse Header Primary",
				value: "linear-gradient(180deg, #496F77 0%, #1c4651 63%)",
			},
		];

		return (
			<div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
				<h2 style={{ marginBottom: "2rem" }}>Color Variables</h2>

				<ColorSection title="Primary Colors" colors={primaryColors} />
				<ColorSection title="Secondary Colors" colors={secondaryColors} />
				<ColorSection title="Base Colors" colors={baseColors} />
				<ColorSection title="Status Colors" colors={statusColors} />
				<ColorSection title="Additional Colors" colors={additionalColors} />

				<div style={{ marginBottom: "2rem" }}>
					<h3 style={{ marginBottom: "1rem" }}>Gradients</h3>
					<div style={{ display: "grid", gap: "1rem" }}>
						{gradients.map((gradient) => (
							<div
								key={gradient.variable}
								style={{
									padding: "1rem",
									backgroundColor: "white",
									borderRadius: "8px",
									boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
								}}
							>
								<div
									style={{
										height: "48px",
										background: gradient.value,
										borderRadius: "4px",
										marginBottom: "1rem",
									}}
								/>
								<div style={{ fontWeight: "bold", marginBottom: "4px" }}>
									{gradient.label}
								</div>
								<div style={{ fontSize: "14px", color: "#666" }}>
									<div>Variable: --{gradient.variable}</div>
									<div>Value: {gradient.value}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	},
};
