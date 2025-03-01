const padding = [
	{
		pattern: /^p[xtylrb]?-\d+(\.[05])?$/, // Regex pattern สำหรับ padding classes แบบตัวเลข
	},
	{
		pattern: /^p[xtylrb]?-\[\d+px\]$/, // Regex pattern สำหรับ padding classes แบบ px
	},
];

const rounded = [
	{
		pattern: /^rounded$/,
	},

	{
		pattern: /^rounded-\[\d+px\]$/, // rounded-[10px], rounded-[20px], ...
	},
	{
		pattern: /^rounded-[trbl]{1,2}-\[\d+px\]$/, // rounded-t-[10px], rounded-r-[20px], ...
	},
	{
		pattern: /^rounded-(full|lg|md|sm|none|xl|2xl|3xl)$/, // rounded-full, rounded-lg, rounded-md, rounded-sm, rounded-none, rounded-xl
	},
	{
		pattern: /^rounded-[trbl]{1,2}-(full|lg|md|sm|none|xl|2xl|3xl)$/, // rounded-t-full, rounded-b-2xl, ...
	},
	{
		pattern: /^rounded-(t|r|b|l|tl|tr|br|bl)-(full|lg|md|sm|none|xl)$/, // rounded-full, rounded-lg, rounded-md, rounded-sm, rounded-none, rounded-xl
	},
];

const margin = [
	{
		pattern: /^m[xtylrb]?-\d+(\.[05])?$/, // Regex pattern สำหรับ margin classes แบบตัวเลข
	},
	{
		pattern: /^m[xtylrb]?-\[\d+px\]$/, // Regex pattern สำหรับ margin classes แบบ px
	},
];

const background = [
	{
		pattern:
			/^bg-(red|green|blue|yellow|purple|pink|gray|indigo|black|white)-\d{1,3}$/, // Regex pattern สำหรับสีพื้นฐานและระดับสี
	},
	{
		pattern: /^bg-\[#([0-9A-Fa-f]{6})\]$/, // Regex pattern สำหรับ custom hex color codes
	},
];

const text = [
	{
		pattern:
			/^text-(red|green|blue|yellow|purple|pink|gray|indigo|black|white)-\d{1,3}$/, // Regex pattern สำหรับสีพื้นฐานและระดับสี
	},
	{
		pattern: /^text-\[#[0-9A-Fa-f]{6}\]$/, // Regex pattern สำหรับ custom hex color codes
	},
	{
		pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/, // Regex pattern สำหรับขนาดตัวอักษร
	},
	{
		pattern: /^text-(left|center|right|justify)$/, // Regex pattern สำหรับการจัดแนวตัวอักษร
	},
	{
		pattern:
			/^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)\/\[\d+(px|em|rem|%)\]$/, // Regex pattern for size with custom line height, e.g., text-sm/[32px]
	},
];

const fontWeight = [
	{
		pattern:
			/^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/, // Regex pattern สำหรับระดับความหนาของฟอนต์
	},
	{
		pattern: /^font-\d{1,3}$/, // Regex pattern สำหรับ custom font weight values (ตัวเลข 1-999)
	},
];

const lineHeight = [
	{
		pattern: /^leading-(none|tight|snug|normal|relaxed|loose)$/, // Regex pattern สำหรับ named line height values
	},
	{
		pattern: /^leading-\d+$/, // Regex pattern สำหรับ numeric line height values
	},
	{
		pattern: /^leading-\[\d+(\.\d+)?(rem|em|px|%)\]$/, // Regex pattern สำหรับ custom line height values with units
	},
];

const textAlign = [
	{
		pattern: /^text-(left|center|right|justify)$/, // Regex pattern สำหรับการจัดแนวตัวอักษร
	},
];

const spaceBetween = [
	{
		pattern: /^space-[xy]-(start|end|center|between|around|\d+|\[\d+px\])$/,
	},
];

const heightClasses = [
	{
		pattern: /^h-(\d{1,3}|\d+\/\d+|auto|fit|full|screen|\[\d+px\])$/,
	},
];

const widthClasses = [
	{
		pattern: /^w-(\d{1,3}|\d+\/\d+|auto|full|screen|\[\d+px\])$/,
	},
	{
		pattern: /max-w-\[\d+px\]$/, // gap-[38px], gap-x-[10px], gap-y-[20px]
	},
];

const justifyContent = [
	{
		pattern: /^justify-(start|end|center|between|around|evenly)$/, // Regex pattern สำหรับการจัดวาง items ภายใน flex container
	},
];

const alignItems = [
	{
		pattern: /^items-(start|end|center|baseline|stretch)$/,
	},
];

const rotate = [
	{
		pattern: /^rotate-\d+$/, // rotate-0, rotate-1, rotate-2, ..., rotate-180, rotate-360, etc.
	},
	{
		pattern: /^rotate-\[\d+deg\]$/, // rotate-[10deg], rotate-[45deg], rotate-[90deg], etc.
	},
	{
		pattern: /^rotate-(90|180|270|360)$/, // rotate-90, rotate-180, rotate-270, rotate-360
	},
];

const self = [
	{
		pattern: /^self-(auto|start|end|center|stretch|baseline)$/, // rotate-0, rotate-1, rotate-2, ..., rotate-180, rotate-360, etc.
	},
];

const cursor = [
	{
		pattern: /cursor-\w+$/, // rotate-0, rotate-1, rotate-2, ..., rotate-180, rotate-360, etc.
	},
	{
		pattern: /cursor-\w+-\w+$/, // rotate-0, rotate-1, rotate-2, ..., rotate-180, rotate-360, etc.
	},
];

const grid = [
	{
		pattern: /grid$/, // สำหรับคลาส grid
	},
	{
		pattern: /gap-(x|y)?-\d+$/, // gap-x-1, gap-y-2, gap-4, gap-x-4, gap-y-8
	},
	{
		pattern: /gap-(x|y)?-\[\d+px\]$/, // gap-[38px], gap-x-[10px], gap-y-[20px]
	},
	{
		pattern: /grid-cols-\d+$/, // grid-cols-1, grid-cols-2, grid-cols-3, ...
	},
];

const overflow = [
	{
		pattern: /overflow-\w+$/, // rotate-0, rotate-1, rotate-2, ..., rotate-180, rotate-360, etc.
	},
	{
		pattern: /overflow-\w+-\w+$/, // rotate-0, rotate-1, rotate-2, ..., rotate-180, rotate-360, etc.
	},
];

const border = [
	{
		pattern: /border-\w+$/, // rotate-0, rotate-1, rotate-2, ..., rotate-180, rotate-360, etc.
	},
	{
		pattern: /border-\w+-\w+$/, // rotate-0, rotate-1, rotate-2, ..., rotate-180, rotate-360, etc.
	},
];

const dropShadow = [
	{
		pattern: /^drop-shadow$/, // drop-shadow
	},
	{
		pattern: /^drop-shadow-(sm|md|lg|xl|2xl|none)$/, // drop-shadow-sm, drop-shadow-md, drop-shadow-lg, drop-shadow-xl, drop-shadow-2xl, drop-shadow-none
	},
	{
		pattern:
			/^drop-shadow-\[\d+px\s\d+px\s\d+px\s(?:rgba?\(\d+,\d+,\d+,\d+\)|#[0-9A-Fa-f]{3,6})\]$/, // drop-shadow-[2px 2px 2px rgba(0, 0, 0, 0.5)], drop-shadow-[4px 4px 10px #000]
	},
];

const positionClasses = [
	{
		pattern: /^(static|relative|absolute|fixed|sticky)$/,
	},
	{
		pattern:
			/^(-?top|-?left|-?right|-?bottom)-(\d{1,3}|\d+\/\d+|auto|full|screen|\[\d+px\])$/,
	},
];

const display = [
	{
		pattern: /^block$/,
	},
	{
		pattern: /^inline-block$/,
	},
	{
		pattern: /^inline$/,
	},
	{
		pattern: /^flex$/,
	},
	{
		pattern: /^inline-flex$/,
	},
	{
		pattern: /^table$/,
	},
	{
		pattern: /^inline-table$/,
	},
	{
		pattern: /^table-caption$/,
	},
	{
		pattern: /^table-cell$/,
	},
	{
		pattern: /^table-column$/,
	},
	{
		pattern: /^table-column-group$/,
	},
	{
		pattern: /^table-footer-group$/,
	},
	{
		pattern: /^table-header-group$/,
	},
	{
		pattern: /^table-row-group$/,
	},
	{
		pattern: /^table-row$/,
	},
	{
		pattern: /^flow-root$/,
	},
	{
		pattern: /^grid$/,
	},
	{
		pattern: /^inline-grid$/,
	},
	{
		pattern: /^contents$/,
	},
	{
		pattern: /^list-item$/,
	},
	{
		pattern: /^hidden$/,
	},
];

const generateSafelist = () => {
	const classes: string[] = [];
	const dynamicClasses = ["w", "h", "space", "gap"]; // Add other prefixes as needed

	dynamicClasses.forEach((prefix) => {
		classes.push(
			`${prefix}-y-[32px]`,
			`${prefix}-[38px]`,
			`${prefix}-[40px]`,
			`${prefix}-[50px]`,
			`${prefix}-[104px]`,
			`${prefix}-[186px]`,
			`${prefix}-[316px]`,
			// Add other dynamic values as needed
		);
	});

	return classes.join(" ");
};
const textColors = [
	"text-white",
	"text-[#4B5760]",
	"text-[#1C4651]",
	"text-[#112A31]",
	"text-[#779097]",
	"text-[#FBC108]",
	"text-[#C99A06]",
	"text-[#212121]",
	"text-[#BABABA]",
	"text-[#09AA6A]",
	"text-[#F9C802]",
	"text-[#C42828]",
	"text-[#BABABA]",
	"text-[#DEDEDE]",
	"text-[#F1F4F7]",
	"text-[#779097]",
	"text-primaryBright",
	"text-[#1A6CA8]",
	"bg-[#F1F4F7]",
	"bg-[#17394A]",
	"bg-[#FFF9E5]",
	"bg-[#E7F3F5]",
	"bg-[#1c4651]",
	"focus:bg-[#1E4D63]",
	"hover:drop-shadow-xl",
	"text-black",
	"h-[calc(100%-56px)]",
	"text-xs",
	"text-sm",
	"text-base",
	"text-lg",
	"text-xl",
	"text-2xl",
	"text-3xl",
	"text-4xl",
	"text-5xl",
	"text-6xl",
	"text-7xl",
	"text-8xl",
	"text-9xl",
];

const textStyles = [
	"overflow-hidden",
	"text-ellipsis",
	"whitespace-nowrap",
	"list-disc",
];

const backgroundStyles = ["bg-white"];

const borderStyles = ["border", "border-black", "border-b-black"];

const layoutStyles = [
	"flex",
	"flex-row",
	"flex-col",
	"grid-cols-2",
	// "grid-cols-3",
	// "grid-cols-4",
	"items-center",
	"gap-5",
	"gap-7",
	"w-[216px]",
	"h-[64px]",
	"min-w-48",
];

const customSafelist = [
	...grid,
	...cursor,
	...padding,
	...rounded,
	...margin,
	...background,
	...text,
	...fontWeight,
	...lineHeight,
	...textAlign,
	...spaceBetween,
	...heightClasses,
	...widthClasses,
	...justifyContent,
	...alignItems,
	...rotate,
	...self,
	...overflow,
	...textColors,
	...border,
	...dropShadow,
	...layoutStyles,
	...backgroundStyles,
	...borderStyles,
	...display,
	...positionClasses,
	...textStyles,
	generateSafelist(),
];

export const safelistConfig = customSafelist;
