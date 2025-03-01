import Menu, { MenuProps } from "antd/es/menu";
import { handleClickMenu } from "./service";

export type MenuItem = Required<MenuProps>["items"][number];

interface BaseSideBarProps {
	items: MenuItem[];
	onMenuClick?: (value: { key: string; pageLevel: string }) => void;
}

const BaseSideBar = (props: BaseSideBarProps) => {
	const { items, onMenuClick = () => {} } = props;
	// const [collapsed, setCollapsed] = useState(false);

	// const toggleCollapsed = () => {
	//   setCollapsed(!collapsed);
	// };
	return (
		<div className="w-full">
			<Menu
				onClick={(e) => onMenuClick(handleClickMenu(e.key))}
				mode="inline"
				theme="dark"
				// inlineCollapsed={collapsed}
				items={items}
			/>
		</div>
	);
};

export default BaseSideBar;
