import * as _ from "lodash";
import { BaseFormItemPosition } from "../../constants/form-item-position";
import Row from "antd/es/row";
import Col from "antd/es/col";
import Form from "antd/es/form";
import Switch from "antd/es/switch";
import { Key } from "../../provider/LayoutProvider/type";
import usePermission from "../../hook/usePermission";
import { checkDisabled } from "../../utils";

export interface Props<T extends string = never> {
	itemName: string;
	checked?: boolean;
	isRequired?: boolean;
	disabled?: boolean;
	label?: string;
	onChangeFunction: (e: boolean) => void;
	labelPosition?: BaseFormItemPosition;
	switchClassName?: string;
	secondaryLabel?: string;
	customStyleSecondaryLabel?: React.CSSProperties | undefined;
	switchPosition?: string;
	pageLevel?: Key | T;
	isStorybook?: boolean;
	labelClassName?: string;
	secondaryLabelClassName?: string;
}

export default function BaseItemSwitch<T extends string = never>(
	props: Props<T>,
) {
	const {
		itemName,
		onChangeFunction,
		disabled = false,
		label = "",
		checked = false,
		isRequired = false,
		labelPosition = BaseFormItemPosition.TOP,
		switchClassName = "",
		secondaryLabel = "",
		customStyleSecondaryLabel = {},
		switchPosition = "end",
		pageLevel,
		isStorybook = false,
		labelClassName = "",
		secondaryLabelClassName = "",
	} = props;

	const permission = usePermission(pageLevel ?? "edit", isStorybook);

	return (
		<>
			<Row>
				{labelPosition === BaseFormItemPosition.TOP && !_.isEmpty(label) && (
					<Col span={24}>
						<label className={`text-xl ${labelClassName}`}>
							{isRequired && <span className="text-red-600">* </span>}
							{label}
						</label>
					</Col>
				)}
				<Col span={24}>
					<Form.Item className="mb-0">
						<div
							className={
								switchPosition === "start" ? "flex" : "flex justify-end"
							}
						>
							{labelPosition === BaseFormItemPosition.LEFT &&
								!_.isEmpty(label) && (
									<label
										className={`mr-2 text-xl self-center ${labelClassName}`}
									>
										{isRequired && <span className="text-red-600">* </span>}
										{label}
									</label>
								)}
							<Form.Item name={itemName} className={switchClassName}>
								<Switch
									checked={checked}
									onChange={(e: boolean) => {
										onChangeFunction(e);
									}}
									disabled={checkDisabled<T>({
										pageLevel,
										permission,
										disabled,
									})}
								/>
							</Form.Item>
							{labelPosition === BaseFormItemPosition.LEFT &&
								!_.isEmpty(secondaryLabel) && (
									<label
										className={`ml-2 text-xl self-center ${secondaryLabelClassName}`}
										style={customStyleSecondaryLabel}
									>
										{secondaryLabel}
									</label>
								)}
							{labelPosition === BaseFormItemPosition.RIGHT &&
								!_.isEmpty(label) && (
									<label className={`ml-2 text-xl ${labelClassName}`}>
										{isRequired && <span className="text-red-600">* </span>}
										{label}
									</label>
								)}
						</div>
					</Form.Item>
				</Col>
			</Row>
		</>
	);
}
