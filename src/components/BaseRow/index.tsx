import React, { ReactNode } from "react";

type Props = {
	className?: string;
	children: ReactNode;
};

//row style
const BaseRow: React.FC<Props> = (props) => {
	return (
		<div className={`flex flex-row w-full ${props?.className}`}>
			{props.children}
		</div>
	);
};
export default BaseRow;
