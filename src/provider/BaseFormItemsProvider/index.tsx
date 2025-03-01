import Form from "antd/es/form";
import _ from "lodash";
import { BaseFormItemPosition } from "../../constants/form-item-position";
import Row from "antd/es/row";
import Col from "antd/es/col";
import { handleInputSpan, handleLabelTopSpan } from "../../utils";
import { BaseFormProviderProps } from "./model";
import "./style.scss";

import { handleFormItemValue } from "./servic";
import { Popover } from "antd";
import { InfoCircle } from "iconoir-react";

export default function BaseFormItemsProvider<T extends string = never>(
	props: BaseFormProviderProps<T>,
) {
	const {
		itemName = "",
		rules = [],
		label = "",
		labelPosition = BaseFormItemPosition.TOP,
		labelLeftSpan = 12,
		children,
		notForm = false,
		notFormClassName,
		noMarginItemsProvider = false,
		id = "",
		labelClassName,
		labelWarning,
	} = props;

	const isRequired = _.some(rules, { required: true });

	return (
		<Row
			className={`base-form-items-provider ${noMarginItemsProvider && "noMarginItemsProvider"}`}
		>
			<Col
				span={handleLabelTopSpan(labelPosition, labelLeftSpan)}
				className={`${!_.isEmpty(label) && "mb-2 text-black"}`}
			>
				{!_.isEmpty(label) && (
					<div className="flex">
						<label
							className={`text-label ${labelClassName}`}
							id={`${id}-label`}
						>
							{isRequired && <span className="text-red-600">* </span>}
							{label}
						</label>
						{labelWarning && (
							<Popover
								className="ml-1"
								content={
									<p className="text-[#212121] text-help">{labelWarning}</p>
								}
							>
								<InfoCircle className="w-[14px] h-[14px]" />
							</Popover>
						)}
					</div>
				)}
			</Col>
			<Col span={handleInputSpan(labelPosition, labelLeftSpan)}>
				{notForm ? (
					<div className={`${notFormClassName ?? "mb-6"}`}>{children}</div>
				) : (
					<Form.Item
						rules={rules}
						name={itemName}
						className={`${_.isEmpty(rules) ? "mb-0" : ""} custom-form-item`}
						getValueProps={(value) => {
							return handleFormItemValue(value);
						}}
					>
						{children}
					</Form.Item>
				)}
			</Col>
		</Row>
	);
}
