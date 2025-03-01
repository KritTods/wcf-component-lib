"use client";

import { ArrowRight } from "iconoir-react";
import { useRouter } from "next/navigation";
import "../../scss/variable.scss";
import _ from "lodash";
import { handleCard, handleOnClick } from "./service";

export interface ToDoProps {
	uniqueContent?: JSX.Element;
	headText?: React.ReactNode;
	subText?: React.ReactNode;
	total?: number;
	icon?: JSX.Element;
	link?: string;
	abstractImage?: React.ReactNode;
	onClick?: () => void;
	disable?: boolean;
}

export default function BaseToDoCard(props: ToDoProps) {
	const router = useRouter();

	const {
		uniqueContent,
		headText,
		subText,
		total,
		icon,
		link,
		abstractImage,
		onClick,
		disable = false,
	} = props;
	return (
		<>
			<div
				onClick={() => {
					handleOnClick({ disable, onClick, link, router });
				}}
				className={`${handleCard({ disable, onClick, link })} w-[316px] h-[316px] rounded-lg  bg-white drop-shadow-md hover:drop-shadow-xl relative overflow-hidden`}
			>
				{abstractImage && (
					<div className="absolute bottom-0 right-0">{abstractImage}</div>
				)}
				<div className="w-full h-full flex flex-col px-10 py-8 justify-between">
					<div className="w-full flex justify-between h-10">
						<div className="flex justify-center items-center">
							{!_.isNil(total) && (
								<div className="bg-[#1c4651] w-12 rounded-full text-white">
									<p className="text-center text-white">
										{total > 99 ? "99+" : total}
									</p>
								</div>
							)}
						</div>
						<div className="w-10 h-10">
							{icon}
							{/* <Cube className="w-full h-full" /> */}
						</div>
					</div>
					<div className="w-full flex flex-col h-[104px]">
						{uniqueContent ?? (
							<>
								<div className="h-20 header-card">{headText}</div>
								<div className="h-6 description text-[#779097] input">
									{subText}
								</div>
							</>
						)}
					</div>
					<div className="w-full flex h-11">
						{(link || onClick) && (
							<div className="w-11 bg-[#E7F3F5] rounded-full flex justify-center items-center">
								<ArrowRight />
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
