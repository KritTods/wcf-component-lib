import "../../scss/color-variable.scss";
import "../../scss/variable.scss";

export interface Props {
	headerText: string;
	hrClassName?: string;
}

const BaseUniqueContentModalHeader = (props: Props) => {
	const { headerText = "", hrClassName = "my-3" } = props;

	return (
		<div className="base-unique-content-modal-header">
			<p className="text-display primary">{headerText}</p>
			<hr className={hrClassName}></hr>
		</div>
	);
};

export default BaseUniqueContentModalHeader;
