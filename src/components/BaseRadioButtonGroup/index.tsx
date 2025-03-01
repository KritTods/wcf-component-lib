import { Radio } from "antd";
import "./style.scss";
import BaseFormItemsProvider from "../../provider/BaseFormItemsProvider";
import { BaseFormProviderProps } from "../../provider/BaseFormItemsProvider/model";

interface BaseRadioButtonGroupProps extends BaseFormProviderProps {
	options: Options[];
}

interface Options {
	value: string | number;
	label: string;
}

const BaseRadioButtonGroup = (
	props: BaseRadioButtonGroupProps,
): JSX.Element => {
	return (
		<div className="base-radio-button-group-dev flex flex-col gap-2 ">
			<BaseFormItemsProvider {...props}>
				<Radio.Group className="base-radio-button-group w-full">
					<div className="flex">
						{props.options.map((item, idx) => (
							<Radio value={item.value} key={idx}>
								{item.label}
							</Radio>
						))}
					</div>
				</Radio.Group>
			</BaseFormItemsProvider>
		</div>
	);
};

export default BaseRadioButtonGroup;
