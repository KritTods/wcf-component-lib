import { PaginationOptions } from "./model";
import "./style.css";
import Pagination, { PaginationProps } from "antd/es/pagination";
import PropTypes from "prop-types";
import styled from "styled-components";

export interface PageProps {
	type?: "default" | "light";
	page: PaginationOptions;
	setPagination: (page: PaginationOptions) => void;
}

const locale = {
	items_per_page: "items",
};

const PaginationWrapper = styled.div<{ type: "default" | "light" }>`
	width: 100%;
	.ant-pagination-item-active a {
		border-radius: 100%;
		color: ${(props) =>
			props.type !== "default" ? "#1C4651" : "#E7F3F5"} !important;
		background-color: ${(props) =>
			props.type !== "default" ? "#E7F3F5" : "#1C4651"} !important;
	}
`;
const BasePagination = (props: PageProps) => {
	const { page, setPagination = () => {}, type = "default" } = props;
	const handleShowSizeChange: PaginationProps["onShowSizeChange"] = (
		_,
		size,
	) => {
		setPagination({ ...page, pageNumber: 0, pageSize: size });
		//   dispatch(setPagination({ ...page, pageNumber: 0, pageSize: size }));
	};

	const handlePageChange: PaginationProps["onChange"] = (newPage, size) => {
		if (size !== page.pageSize) {
			return;
		}
		setPagination({ ...page, pageNumber: newPage - 1 });
		//   dispatch(setPagination({ ...page, pageNumber: newPage - 1 }));
	};
	return (
		<div className="flex w-full justify-center items-center relative">
			{/* {page.pageSize >= 50 && <span>แถวต่อหน้า: </span>} */}
			<PaginationWrapper type={type}>
				<Pagination
					// simple
					current={page.pageNumber + 1}
					defaultCurrent={page.pageNumber + 1}
					defaultPageSize={page.pageSize}
					total={page.totalData}
					// showTotal={(total, range) => `${range[0]}-${range[1]} of ${total}`}
					onChange={handlePageChange}
					pageSizeOptions={["10", "20", "50", "100"]}
					showSizeChanger
					onShowSizeChange={handleShowSizeChange}
					locale={locale}
				/>
			</PaginationWrapper>
		</div>
	);
};

BasePagination.propTypes = {
	page: PropTypes.shape({
		pageNumber: PropTypes.number.isRequired,
		pageSize: PropTypes.number.isRequired,
		totalData: PropTypes.number.isRequired,
	}),
	setPagination: PropTypes.func,
};

export default BasePagination as React.FC<PageProps>;
