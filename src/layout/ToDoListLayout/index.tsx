import BaseToDoCard, { ToDoProps } from "../../components/BaseToDoCard";

interface Props {
	items: ToDoProps[];
}

export default function ToDoListLayout(props: Props) {
	const { items } = props;
	return (
		<div className="grid grid-cols-4 gap-y-[32px]">
			{items.map((item, index) => (
				<div
					key={index}
					className="w-full h-full flex justify-center items-center"
				>
					<BaseToDoCard {...item} />
				</div>
			))}
		</div>
	);
}
