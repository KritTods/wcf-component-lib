import { PlusCircleFilled } from "@ant-design/icons";
import DivPermission from "../../components/BaseDivPermission";
import BaseButton from "../../components/BaseButton";
import { Key } from "../../provider/LayoutProvider/type";

interface UserGroupPrivilegeProps {
	pageLevel?: Key;
	labelHandler?: string;
	labelButton?: string;
	onClick?: () => void;
	id?: string;
}

const FormHeaderLayout = (props: UserGroupPrivilegeProps) => {
	const {
		pageLevel = "add",
		labelHandler = "",
		labelButton = "สร้าง",
		onClick,
		id,
	} = props;

	return (
		<div className="w-full">
			<div className="flex justify-between flex-grow">
				<label className="text-xl self-left"> {labelHandler}</label>
				<DivPermission pageLevel={pageLevel}>
					<BaseButton
						id={id}
						type="primary"
						size="large"
						className="text-base px-3 py-2"
						onClick={onClick}
						label={labelButton}
						icon={<PlusCircleFilled />}
					/>
				</DivPermission>
			</div>
			<hr className="my-4 px-2"></hr>
		</div>
	);
};

export default FormHeaderLayout;
