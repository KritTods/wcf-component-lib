export default function Hexagon({ fill }: { fill: string }) {
	return (
		<svg
			width="8"
			height="8"
			viewBox="0 0 8 8"
			fill={fill}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M4 0L7.5 2V6L4 8L0.5 6V2L4 0Z" />
		</svg>
	);
}
