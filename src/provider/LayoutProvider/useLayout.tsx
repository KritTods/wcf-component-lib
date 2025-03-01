import { useContext } from "react";
import { LayoutContext, LayoutContextType } from "./layoutContext";
import "../../scss/variable.scss";
import "../../../src/tailwind.css";
const useLayout = (): LayoutContextType => {
	const context = useContext(LayoutContext);
	if (!context) {
		throw new Error("useLayout must be used within a LayoutProvider");
	}

	return context;
};

export default useLayout;
