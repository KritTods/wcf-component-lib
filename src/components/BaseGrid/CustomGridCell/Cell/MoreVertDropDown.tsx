import { MenuProps } from "antd/es/menu";
import BaseDropDown from "../../../BaseDropDown";
import { MoreVert } from "iconoir-react";

interface Props {
	menu: MenuProps["items"];
	trigger?: ("contextMenu" | "click" | "hover")[] | undefined;
	notForm?: boolean;
	onDropdownClick?: MenuProps["onClick"];
}

export default function MoreVertDropDown(props: Props) {
	const { menu, trigger = ["click"], notForm = true, onDropdownClick } = props;
	return (
		<BaseDropDown
			isSelect={false}
			menu={menu}
			dropdownParent={<MoreVert />}
			trigger={trigger}
			notForm={notForm}
			onDropdownClick={onDropdownClick}
			notFormClassName="mb-0"
		/>
	);
}
