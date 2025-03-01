"use client";

import "./style.scss";
import { User } from "iconoir-react";

export interface DetailBarProps {
	uniqueContent?: JSX.Element;
	icon?: JSX.Element;
}

export default function BaseDetailBar(props: DetailBarProps) {
	const { uniqueContent, icon } = props;
	return (
		<>
			<div className={`relative detail-bar flex items-center`}>
				<div className="w-fit img-absolute-left">
					<img
						src={`${process.env.NEXT_PUBLIC_MIDDLEWARE_PATH}bg-user-group-left.svg`}
					/>
				</div>
				<div className="w-fit img-absolute-right">
					<img
						src={`${process.env.NEXT_PUBLIC_MIDDLEWARE_PATH}bg-user-group-right.svg`}
					/>
				</div>
				<div className="img-user rounded-full flex items-center justify-center">
					{icon ?? <User width={24} height={24} color="white" />}
				</div>
				{uniqueContent && (
					<div className="text-base font-semibold text-white">
						{uniqueContent}
					</div>
				)}
			</div>
		</>
	);
}
