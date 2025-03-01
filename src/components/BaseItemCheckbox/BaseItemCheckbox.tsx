import * as _ from "lodash";
import Form, { Rule } from "antd/es/form";
import { BaseFormItemPosition } from "../../constants/form-item-position";
import Row from "antd/es/row";
import Col from "antd/es/col";
import Checkbox from "antd/es/checkbox";
import { BaseFormProviderProps } from "../../provider/BaseFormItemsProvider/model";
import "./style.scss";
import usePermission from "../../hook/usePermission";
import { checkDisabled } from "../../utils";
export interface Props<T extends string = never>
	extends BaseFormProviderProps<T> {
	checked?: boolean;
	isRequired?: boolean;
	disabled?: boolean;
	label?: string;
	onClickFunction?: () => void;
	rules?: Rule[];
	labelLeftSpan?: number;
	className?: string;
	colorBackground?: boolean;
	description?: string;
	isColorful?: boolean;
	type?: "default" | "primary";
}

export default function BaseItemCheckbox<T extends string = never>(
	props: Props<T>,
) {
	const {
		itemName,
		onClickFunction,
		disabled = false,
		label = "",
		checked = false,
		isRequired = false,
		labelPosition = BaseFormItemPosition.RIGHT,
		rules = [],
		notForm = false,
		colorBackground = false,
		className,
		description,
		isColorful,
		type = "default",
		pageLevel,
		isStorybook = false,
	} = props;

	let classNameText = "";

	const permission = usePermission(pageLevel ?? "edit", isStorybook);

	switch (type) {
		case "default":
			classNameText = "colorful-checkbox-container";
			break;
		default:
			break;
	}

	return (
		<>
			<Row className={classNameText}>
				<Col span={24}>
					<div
						className={`${_.isEmpty(rules) ? "mb-0" : ""} ${isColorful && (checked ? "checked" : "unchecked")}`}
					>
						<div
							className={`${
								colorBackground
									? "flex items-center  bg-[#E7F3F5] p-3 rounded-lg"
									: ""
							} ${className} checkbox-container`}
						>
							{labelPosition === BaseFormItemPosition.LEFT &&
								!_.isEmpty(label) && (
									<label className="mr-2">
										{isRequired && <span className="text-red-600">* </span>}
										{label}
									</label>
								)}
							{notForm ? (
								<Checkbox
									checked={checked}
									onClick={() => {
										onClickFunction && onClickFunction();
									}}
									disabled={checkDisabled<T>({
										pageLevel,
										disabled,
										permission,
									})}
								/>
							) : (
								<Form.Item
									rules={rules}
									name={itemName}
									valuePropName="checked"
									noStyle
								>
									<Checkbox
										onClick={() => {
											onClickFunction && onClickFunction();
										}}
										disabled={checkDisabled<T>({
											pageLevel,
											disabled,
											permission,
										})}
									/>
								</Form.Item>
							)}
							{labelPosition === BaseFormItemPosition.RIGHT &&
								!_.isEmpty(label) && (
									<>
										{description ? (
											<div className="flex flex-col gap-2">
												<label className={`${isColorful ? "" : "ml-2"}`}>
													{isRequired && (
														<span className="text-red-600">* </span>
													)}
													{label}
												</label>
												<p className="text-xs text-gray-">{description}</p>
											</div>
										) : (
											<label className="ml-2">
												{isRequired && <span className="text-red-600">* </span>}
												{label}
											</label>
										)}
									</>
								)}
						</div>
					</div>
				</Col>
			</Row>
		</>
	);
}
