import Column from "../../components/BaseColumn";
import FormHeader from "./FormHeader";

interface FormCollapseLayoutProps {
	content?: React.ReactNode;
	label: string;
	icon?: JSX.Element;
}

const FormCollapseLayout = (props: FormCollapseLayoutProps) => {
	return (
		<Column>
			<FormHeader label={props.label} icon={props.icon} />
			<div className="mt-9 px-[30px]">{props.content}</div>
		</Column>
	);
};

export default FormCollapseLayout;
