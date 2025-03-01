interface Props {
	label: string;
	icon?: JSX.Element;
}

const FormHeader = (props: Props) => {
	return (
		<div className="w-full p-2.5 flex bg-[#E9EDF6] items-center space-x-4 px-[18px] rounded-lg">
			<div className="bg-[#173985] w-10 h-10 rounded-full flex justify-center items-center">
				{props.icon}
			</div>
			<p>{props.label}</p>
		</div>
	);
};

export default FormHeader;
