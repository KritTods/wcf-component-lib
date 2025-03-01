import { FloatButton } from "antd";
import "./style.scss";
import React, { useEffect, useState } from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

interface ScrollButtonProps {
	contentRef: React.RefObject<HTMLDivElement>;
}

const BUTTON_SIZE = 48;

const containerStyle: React.CSSProperties = {
	position: "fixed",
	bottom: 16,
	right: 0,
	marginRight: 16,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	gap: "8px",
};

const buttonStyle: React.CSSProperties = {
	position: "relative",
	bottom: 0, //fixed position for button
	right: 0, //fixed position for button
	width: BUTTON_SIZE,
	height: BUTTON_SIZE,
	borderColor: "#FFFF",
	borderWidth: "1px",
	borderStyle: "solid",
};

type ScrollType = "up" | "down";

export default function ScrollButton({
	contentRef,
}: ScrollButtonProps): React.ReactElement {
	const [scrollButtonType, setScrollButtonType] = useState<ScrollType>("down");
	const [scrollPosition, setScrollPostion] = useState<number | undefined>(
		contentRef.current?.scrollTop,
	);

	const buttonDetail = (type: ScrollType) => {
		if (type === "up") {
			return { logo: <ArrowUpOutlined size={16} />, text: "เลื่อนขึ้น" };
		} else {
			return { logo: <ArrowDownOutlined size={16} />, text: "เลื่อนลง" };
		}
	};

	// Handle scrolling action when the button is clicked
	const handleScroll = () => {
		const contentBody = contentRef.current;
		if (scrollButtonType === "up" && contentBody) {
			contentBody.scrollTo({ top: 0, behavior: "smooth" });
		} else if (scrollButtonType === "down" && contentBody) {
			contentBody.scrollTo({
				top: contentBody.scrollHeight,
				behavior: "smooth",
			});
		}
	};

	// Track scroll events on the content-body element
	useEffect(() => {
		const contentBody = contentRef.current;
		const onScroll = () => {
			if (!contentBody) return;

			// Get the current scroll position and total scrollable height
			const contentHeight = contentBody.scrollHeight;
			const viewHeight = contentBody.clientHeight;
			setScrollPostion(contentBody.scrollTop);
			// Show "up" button if scrolled more than 500px or near the bottom
			if (contentBody.scrollTop + viewHeight >= contentHeight - 10) {
				setScrollButtonType("up");
			} else {
				// Show "down" button when near the top
				setScrollButtonType("down");
			}
		};

		// Add scroll event listener to the content-body
		if (contentBody) {
			contentBody.addEventListener("scroll", onScroll);
		}

		// Clean up event listener on component unmount
		return () => {
			if (contentBody) {
				contentBody.removeEventListener("scroll", onScroll);
			}
		};
	}, [scrollButtonType]);

	const { logo, text } = buttonDetail(scrollButtonType);

	return (
		<>
			{scrollPosition && scrollPosition > 500 ? (
				<div className="scroll-container" style={containerStyle}>
					<FloatButton style={buttonStyle} icon={logo} onClick={handleScroll} />
					<p className="h-table-iac">{text}</p>
				</div>
			) : null}
		</>
	);
}
