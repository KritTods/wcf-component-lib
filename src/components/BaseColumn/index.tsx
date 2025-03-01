import React, { ReactNode } from "react";

type Props = {
	className?: string;
	children: ReactNode;
	id?: string;
	key?: string;
};

const BaseColumn: React.FC<Props> = (props) => {
	return (
		<div
			{...(props.id && { id: props.id })}
			{...(props.key && { key: props.key })}
			className={`flex flex-col ${props.className ?? ""}`}
		>
			{props.children}
		</div>
	);
};

export default BaseColumn;
