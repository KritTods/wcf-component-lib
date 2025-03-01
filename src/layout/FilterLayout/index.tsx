import { SearchOutlined, AlignRightOutlined } from "@ant-design/icons";
import BaseButton from "../../components/BaseButton";
import BaseRow from "../../components/BaseRow";
import { useState } from "react";
import BaseDrawer from "../../components/BaseDrawer";
import "../../scss/color-variable.scss";
import { Refresh } from "iconoir-react";

export interface FilterLayoutProps {
	id?: string;
	Header?: string;
	FilterForm: JSX.Element;
	loading?: boolean;
	handleSubmitSearch?: () => void;
	handleSubmitFilter?: () => void;
	handleClearFilter?: () => void;
	handleUniqueDrawer?: (value: boolean) => void;
	contentDrawer?: JSX.Element;
	childrenRight?: JSX.Element;
	isFlex?: boolean;
	showVerticalLine?: boolean;
	isButtonCenter?: boolean;
	hideMarginVertical?: boolean;
	isHasTabs?: boolean;
	searchLabel?: string;
	submitfilterLabel?: string;
	clearFilterLabel?: string;
}

const FilterLayout = (props: FilterLayoutProps) => {
	const {
		id,
		Header,
		FilterForm,
		loading = false,
		handleSubmitSearch,
		handleClearFilter,
		handleSubmitFilter,
		handleUniqueDrawer,
		contentDrawer = <></>,
		childrenRight = <></>,
		isFlex = true,
		showVerticalLine = true,
		isButtonCenter = false,
		hideMarginVertical = true,
		isHasTabs,
		searchLabel,
		submitfilterLabel,
		clearFilterLabel,
	} = props;
	const [isOpenState, setIsOpenState] = useState(false);

	return (
		<div
			className={`bg-white h-full ${isFlex ? "flex" : ""} ${isHasTabs ? "rounded-b-2xl" : "rounded-2xl"} justify-between items-end  pt-6 px-6 pb-4 space-x-2`}
		>
			<div className="flex flex-col">
				{Header ? (
					<p className="font-bold text-4xl leading-[48px]">{Header}</p>
				) : (
					<></>
				)}
				<div className="flex" style={{ gap: "24px" }}>
					{/* <div className="bg-[#1c4651] w-1 h-[calc(100%-56px)]"></div> */}
					{showVerticalLine && (
						<div
							className={`bg-[#1c4651] w-1 mt-2 ${hideMarginVertical ? "mb-6" : ""} rounded-sm`}
						></div>
					)}
					{FilterForm}
				</div>
			</div>
			<div className="flex flex-col">
				<BaseRow
					className={`space-x-6 pb-6 ${isButtonCenter ? "justify-center" : ""}`}
				>
					{childrenRight}
					{handleSubmitSearch && (
						<BaseButton
							{...(id && { id: `${id}-Search` })}
							loading={loading}
							onClick={handleSubmitSearch}
							icon={<SearchOutlined />}
							type="primary"
							label={searchLabel || "ค้นหา"}
							htmlType="submit"
							disabled={loading}
						/>
					)}
					{handleClearFilter && (
						<BaseButton
							{...(id && { id: `${id}-Clear` })}
							type="outline"
							loading={loading}
							onClick={handleClearFilter}
							icon={<Refresh />}
							label={clearFilterLabel || "ล้างค่าการค้นหา"}
							disabled={loading}
						/>
					)}
					{(handleSubmitFilter || handleUniqueDrawer) && (
						<>
							<BaseButton
								{...(id && { id: `${id}-Filter` })}
								type="default"
								className="text-base w-[186px] px-3 py-2"
								onClick={() => {
									handleUniqueDrawer
										? handleUniqueDrawer(true)
										: setIsOpenState(true);
								}}
								label="ตัวกรอง"
								icon={<AlignRightOutlined />}
							/>
							<BaseDrawer
								id={id}
								loading={loading}
								isOpen={isOpenState}
								setIsOpen={setIsOpenState}
								content={contentDrawer}
								isFilter={true}
								handleSubmitFilter={() => {
									handleSubmitFilter && void handleSubmitFilter();
									setIsOpenState(false);
								}}
								submitLabel={submitfilterLabel}
							/>
						</>
					)}
				</BaseRow>
			</div>
		</div>
	);
};

export default FilterLayout;
