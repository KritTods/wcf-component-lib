export default function Diamond({ fill }: { fill: string }) {
	return (
		<svg
			width="8"
			height="8"
			viewBox="0 0 8 8"
			fill={fill}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0 4L4 0L8 4L4 8L0 4Z" />
		</svg>
	);
}
