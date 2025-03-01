import type { Meta, StoryObj } from "@storybook/react";
import "../scss/variable.scss";

const meta: Meta = {
	title: "Typography/FontStyles",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `ตัวอย่างการใช้งาน Font ถ้าใช้งาน component HeaderNavbarLayout สามารถเรียกใช้ className ได้เลย
                    `,
			},
		},
	},
};

export default meta;
type Story = StoryObj;

// Very Big Title
export const VeryBigTitle: Story = {
	render: () => (
		<div className="very-big-title">
			<p>ทดสอบภาษาไทย กขคงจ สระอะ อิ อี อึ อื อุ อู</p>
			<p>The quick brown fox jumps over the lazy dog</p>
			<p>0123456789 !@#$%^&*()</p>
		</div>
	),
};

// Big Title
export const BigTitle: Story = {
	render: () => (
		<div className="big-title">
			<p>ทดสอบภาษาไทย กขคงจ สระอะ อิ อี อึ อื อุ อู</p>
			<p>The quick brown fox jumps over the lazy dog</p>
			<p>0123456789 !@#$%^&*()</p>
		</div>
	),
};

// Page Title
export const PageTitle: Story = {
	render: () => (
		<div className="page-title">
			<p>ทดสอบภาษาไทย กขคงจ สระอะ อิ อี อึ อื อุ อู</p>
			<p>The quick brown fox jumps over the lazy dog</p>
			<p>0123456789 !@#$%^&*()</p>
		</div>
	),
};

// Second Title
export const SecondTitle: Story = {
	render: () => (
		<div className="second-title">
			<p>ทดสอบภาษาไทย กขคงจ สระอะ อิ อี อึ อื อุ อู</p>
			<p>The quick brown fox jumps over the lazy dog</p>
			<p>0123456789 !@#$%^&*()</p>
		</div>
	),
};

// Header Card
export const HeaderCard: Story = {
	render: () => (
		<div className="header-card">
			<p>ทดสอบภาษาไทย กขคงจ สระอะ อิ อี อึ อื อุ อู</p>
			<p>The quick brown fox jumps over the lazy dog</p>
			<p>0123456789 !@#$%^&*()</p>
		</div>
	),
};

// Tab Label
export const TabLabel: Story = {
	render: () => (
		<div className="tablnact">
			<p>ทดสอบภาษาไทย กขคงจ สระอะ อิ อี อึ อื อุ อู</p>
			<p>The quick brown fox jumps over the lazy dog</p>
			<p>0123456789 !@#$%^&*()</p>
		</div>
	),
};

// Text Display
export const TextDisplay: Story = {
	render: () => (
		<div className="text-display">
			<p>ทดสอบภาษาไทย กขคงจ สระอะ อิ อี อึ อื อุ อู</p>
			<p>The quick brown fox jumps over the lazy dog</p>
			<p>0123456789 !@#$%^&*()</p>
		</div>
	),
};

// Buttons
export const Buttons: Story = {
	render: () => (
		<div className="buttons">
			<p>ทดสอบภาษาไทย กขคงจ สระอะ อิ อี อึ อื อุ อู</p>
			<p>The quick brown fox jumps over the lazy dog</p>
			<p>0123456789 !@#$%^&*()</p>
		</div>
	),
};

// Status
export const Status: Story = {
	render: () => (
		<div className="status">
			<p>ทดสอบภาษาไทย กขคงจ สระอะ อิ อี อึ อื อุ อู</p>
			<p>The quick brown fox jumps over the lazy dog</p>
			<p>0123456789 !@#$%^&*()</p>
		</div>
	),
};

// Deception
export const Deception: Story = {
	render: () => (
		<div className="deception">
			<p>ทดสอบภาษาไทย กขคงจ สระอะ อิ อี อึ อื อุ อู</p>
			<p>The quick brown fox jumps over the lazy dog</p>
			<p>0123456789 !@#$%^&*()</p>
		</div>
	),
};

// Input
export const Input: Story = {
	render: () => (
		<div className="input">
			<p>ทดสอบภาษาไทย กขคงจ สระอะ อิ อี อึ อื อุ อู</p>
			<p>The quick brown fox jumps over the lazy dog</p>
			<p>0123456789 !@#$%^&*()</p>
		</div>
	),
};

// Text Label
export const TextLabel: Story = {
	render: () => (
		<div className="text-label">
			<p>ทดสอบภาษาไทย กขคงจ สระอะ อิ อี อึ อื อุ อู</p>
			<p>The quick brown fox jumps over the lazy dog</p>
			<p>0123456789 !@#$%^&*()</p>
		</div>
	),
};

// Text Label Info
export const TextLabelInfo: Story = {
	render: () => (
		<div className="text-label-info">
			<p>ทดสอบภาษาไทย กขคงจ สระอะ อิ อี อึ อื อุ อู</p>
			<p>The quick brown fox jumps over the lazy dog</p>
			<p>0123456789 !@#$%^&*()</p>
		</div>
	),
};

// Text Help
export const TextHelp: Story = {
	render: () => (
		<div className="text-help">
			<p>ทดสอบภาษาไทย กขคงจ สระอะ อิ อี อึ อื อุ อู</p>
			<p>The quick brown fox jumps over the lazy dog</p>
			<p>0123456789 !@#$%^&*()</p>
		</div>
	),
};

// Text Label Semibold
export const TextLabelSemibold: Story = {
	render: () => (
		<div className="text-label-sem">
			<p>ทดสอบภาษาไทย กขคงจ สระอะ อิ อี อึ อื อุ อู</p>
			<p>The quick brown fox jumps over the lazy dog</p>
			<p>0123456789 !@#$%^&*()</p>
		</div>
	),
};

// Table Header Active
export const TableHeaderActive: Story = {
	render: () => (
		<div className="h-table-act">
			<p>ทดสอบภาษาไทย กขคงจ สระอะ อิ อี อึ อื อุ อู</p>
			<p>The quick brown fox jumps over the lazy dog</p>
			<p>0123456789 !@#$%^&*()</p>
		</div>
	),
};

// Table Header Inactive
export const TableHeaderInactive: Story = {
	render: () => (
		<div className="h-table-iac">
			<p>ทดสอบภาษาไทย กขคงจ สระอะ อิ อี อึ อื อุ อู</p>
			<p>The quick brown fox jumps over the lazy dog</p>
			<p>0123456789 !@#$%^&*()</p>
		</div>
	),
};

// Text Link
export const TextLink: Story = {
	render: () => (
		<div className="text-link">
			<p>ทดสอบภาษาไทย กขคงจ สระอะ อิ อี อึ อื อุ อู</p>
			<p>The quick brown fox jumps over the lazy dog</p>
			<p>0123456789 !@#$%^&*()</p>
		</div>
	),
};

// Browser Support Info
export const BrowserSupportInfo: Story = {
	render: () => {
		const checkFontLoading = async () => {
			try {
				await document.fonts.ready;
				const fonts = Array.from(document.fonts).filter((font) =>
					font.family.includes("Sarabun"),
				);

				const weights = Array.from(
					new Set(fonts.map((font) => font.weight)),
				).sort();
				const styles = Array.from(new Set(fonts.map((font) => font.style)));

				return {
					totalFonts: fonts.length,
					loadedFonts: fonts.filter((font) => font.status === "loaded").length,
					weights,
					styles,
				};
			} catch (error) {
				return { error: "Font loading check failed" };
			}
		};

		setTimeout(async () => {
			const fontInfo = await checkFontLoading();
			const statusElement = document.getElementById("fontStatus");
			if (statusElement) {
				statusElement.textContent = JSON.stringify(fontInfo, null, 2);
			}
		}, 1000);

		return (
			<div
				style={{
					padding: "20px",
					backgroundColor: "#f5f5f5",
					borderRadius: "8px",
					maxWidth: "800px",
				}}
			>
				<h3>Browser & Font Information</h3>
				<div>
					<strong>User Agent: </strong>
					<code>{navigator.userAgent}</code>
				</div>
				<div>
					<strong>Current Font Family: </strong>
					<code>{getComputedStyle(document.body).fontFamily}</code>
				</div>
				<div>
					<strong>Font Loading Status: </strong>
					<pre
						id="fontStatus"
						style={{
							whiteSpace: "pre-wrap",
							background: "#fff",
							padding: "10px",
							borderRadius: "4px",
						}}
					>
						Checking font loading status...
					</pre>
				</div>
			</div>
		);
	},
};
