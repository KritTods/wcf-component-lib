export default function RoundSquare({ fill }: { fill: string }) {
	return (
		<svg
			width="8"
			height="8"
			viewBox="0 0 8 8"
			fill={fill}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0 2.5C0 1.11929 1.11929 0 2.5 0H5.5C6.88071 0 8 1.11929 8 2.5V5.5C8 6.88071 6.88071 8 5.5 8H2.5C1.11929 8 0 6.88071 0 5.5V2.5Z" />
		</svg>
	);
}
