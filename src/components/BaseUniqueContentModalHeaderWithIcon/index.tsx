import "../../scss/color-variable.scss";
import "../../scss/variable.scss";
import HistoryOutlined from "@ant-design/icons/HistoryOutlined";
import "./style.scss";

export interface Props {
	headerText: string;
	subHeaderText?: string;
	hrClassName?: string;
}

const BaseUniqueContentModalHeaderWithIcon = (props: Props) => {
	const {
		headerText = "",
		subHeaderText = "กรุณาเลือกเวอร์ชั่นเพื่อเปรียบเทียบประวัติ",
		hrClassName = "my-3",
	} = props;

	return (
		<div className="base-unique-content-modal-header-with-icon">
			<div className="flex">
				<div className="icon-wrapper  primary pr-4">
					<HistoryOutlined />
				</div>
				<div>
					<p className="text-display primary mb-3">{headerText}</p>
					<p className="text-help primary mb-1">{subHeaderText}</p>
				</div>
			</div>
			<hr className={hrClassName}></hr>
		</div>
	);
};

export default BaseUniqueContentModalHeaderWithIcon;
