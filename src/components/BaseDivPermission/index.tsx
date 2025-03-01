import usePermission from "../../hook/usePermission";
import { Key } from "../../provider/LayoutProvider/type";
import React from "react";

type Props<T extends string = never> = {
	children: React.ReactNode;
	pageLevel: Key | T;
};

export default function DivPermission<T extends string = never>({
	children,
	pageLevel,
}: Props<T>): React.ReactElement | null {
	const permission = usePermission<T>(pageLevel);

	return <>{permission && children}</>;
}
