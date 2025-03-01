import { useEffect, useMemo, useState } from "react";
import Breadcrumb from "antd/es/breadcrumb";
import { HomeSimpleDoor } from "iconoir-react/regular";
import BaseLink from "../BaseLink";
import "./style.scss";
interface breadcrumbItem {
	text: string;
	url: string;
}
interface BaseBreadProps {
	breadcrumb?: breadcrumbItem[] | [];
	pageCode?: string;
}
export default function BaseBreadCrumb({
	breadcrumb = [],
	pageCode = "",
}: BaseBreadProps) {
	const [originUrl, setOriginUrl] = useState("");
	const itemList = useMemo(() => {
		if (!breadcrumb?.length) return [];
		const list = breadcrumb.map((d, i) => {
			const isLastItem = breadcrumb.length - 1 === i;
			return {
				title: isLastItem ? (
					<p className="text-xl text-[#4B5760]"> {d.text} </p>
				) : (
					<BaseLink href={d.url}>
						<p className="text-xl text-[#4B5760]"> {d.text}</p>
					</BaseLink>
				),
			};
		});
		return list;
	}, [breadcrumb]);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setOriginUrl(window.location.origin);
		}
	}, []);
	return (
		<div className="flex  flex-col">
			<div className="flex  items-center">
				<HomeSimpleDoor color="#4B5760" width={24} className="mr-2" />
				<Breadcrumb
					items={[
						{
							title: (
								<BaseLink href={`${originUrl}`}>
									{window.location.pathname == "/home" ? (
										<p className="text-xl text-[#4B5760]">360 customer</p>
									) : (
										<p className="text-xl text-[#4B5760]">หน้าหลัก</p>
									)}
								</BaseLink>
							),
						},
						...itemList,
					]}
				/>
				{pageCode && (
					<>
						<p className="pl-2 text-base text-[#779097]">|</p>
						<p className="pl-2 text-xl text-[#779097]">{pageCode}</p>
					</>
				)}
			</div>
			{/* {breadcrumb.length >= 2 && (
				<div>
					<BaseLink href={`${breadcrumb[0].url}`}>
						<BaseButtonBack />
					</BaseLink>
				</div>
			)} */}
		</div>
	);
}
