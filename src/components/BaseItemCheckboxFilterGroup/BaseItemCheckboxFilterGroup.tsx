import * as _ from "lodash";
import { BaseFormItemPosition } from "../../constants/form-item-position";
import BaseItemCheckbox from "../BaseItemCheckbox/BaseItemCheckbox";
import { IsActive } from "../../constants/constants";

export interface Props {
	isMainInputChecked?: boolean;
	onClickMainInputFunction: () => void;
	subInputValue: IsActive | undefined;
	onClickSubInputYFunction: () => void;
	onClickSubInputNFunction: () => void;
	notForm?: boolean;
}

export default function BaseItemCheckboxFilterGroup(props: Props) {
	const {
		isMainInputChecked = false,
		onClickMainInputFunction,
		subInputValue,
		onClickSubInputYFunction,
		onClickSubInputNFunction,
		notForm,
	} = props;

	return (
		<>
			<BaseItemCheckbox
				itemName="checkIsActive"
				label="สถานะการใช้งานข้อมูล"
				checked={isMainInputChecked}
				labelPosition={BaseFormItemPosition.RIGHT}
				onClickFunction={() => {
					onClickMainInputFunction();
				}}
				notForm={notForm}
			/>
			{isMainInputChecked && (
				<div className=" pt-1 ml-4">
					<BaseItemCheckbox
						notForm={notForm}
						itemName="isActive"
						label="ใช้งาน"
						checked={_.trim(subInputValue) === IsActive.Y}
						labelPosition={BaseFormItemPosition.RIGHT}
						onClickFunction={() => {
							onClickSubInputYFunction();
						}}
					/>
					<BaseItemCheckbox
						notForm={notForm}
						itemName="isActive"
						label="ไม่ใช้งาน"
						checked={_.trim(subInputValue) === IsActive.N}
						labelPosition={BaseFormItemPosition.RIGHT}
						onClickFunction={() => {
							onClickSubInputNFunction();
						}}
					/>
				</div>
			)}
		</>
	);
}
