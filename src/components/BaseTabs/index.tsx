import "./style.scss";
import Tabs, { TabsProps } from "antd/es/tabs";
import _ from "lodash";
// import PropTypes from "prop-types";
import React, { useEffect } from "react";

export interface BaseTabsProps {
	defaultActiveKey: string;
	onChange?: (key: string) => void;
	items: TabsProps["items"];
	noBackground?: boolean;
	isFlewGrow?: boolean;
	className?: string;
	isTabTall?: boolean;
	activeKey?: string;
	id?: string;
}

const BaseTabs = (props: BaseTabsProps) => {
	const {
		defaultActiveKey,
		onChange = () => {},
		items,
		noBackground = false,
		isFlewGrow = false,
		className,
		isTabTall = false,
		activeKey = undefined,
		id = "",
	} = props;

	useEffect(() => {
		const tabCount = !_.isEmpty(items) ? _.size(items) : 0;

		if (tabCount) {
			document.documentElement.style.setProperty("--tab-count", `${tabCount}`);
		}
	}, []);

	return (
		<Tabs
			id={id}
			type="card"
			className={
				isFlewGrow
					? `custom-tabs ${isTabTall && "fix-padding"}`
					: `w-[800px] rounded-lg ${noBackground && "no-background"} ${isTabTall && "fix-padding"} ${className}`
			}
			defaultActiveKey={defaultActiveKey ?? ""}
			items={items}
			onChange={(key: string) => {
				onChange(key);
			}}
			activeKey={activeKey}
		/>
	);
};

// BaseTabs.propTypes = {
// 	/**
// 	 * The key of the default active tab.
// 	 */
// 	defaultActiveKey: PropTypes.string,

// 	/**
// 	 * Callback when the active tab is changed.
// 	 */
// 	onChange: PropTypes.oneOfType([
// 		PropTypes.func,
// 		PropTypes.oneOf([null, undefined]),
// 	]),

// 	/**
// 	 * An array of items to be displayed in the tabs.
// 	 */
// 	items: PropTypes.array.isRequired,
// };

// BaseTabs.defaultProps = {
// 	items: [],
// 	onChange: () => {},
// 	defaultActiveKey: "",
// };

export default BaseTabs as React.FC<BaseTabsProps>;
