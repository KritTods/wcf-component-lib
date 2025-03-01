import React from "react";

export interface CustomEmptyProps {
	emptyText?: string;
	emptyDescription?: string;
	emptyDescription2?: string;
	emptyImage?: string;
}

const CustomEmpty: React.FC<CustomEmptyProps> = ({
	emptyText = "ไม่พบข้อมูล",
	emptyDescription = "ไม่มีข้อมูลที่ต้องการแสดงในขณะนี้",
	emptyDescription2 = "",
	emptyImage = `${process.env.NEXT_PUBLIC_MIDDLEWARE_PATH}base-grid-empty.svg`,
}) => {
	return (
		<div className="flex flex-col items-center justify-center py-12 px-4">
			<img
				src={emptyImage}
				alt="empty"
				className="bg-contain bg-no-repeat bg-center py-6 max-h-72 max-w-72"
			/>

			<div className="text-center space-y-2">
				<p className="text-primary second-title">{emptyText}</p>
				<p className="text-description-icon-form-divider deception">
					{emptyDescription}
				</p>
				<p className="text-description-icon-form-divider deception">
					{emptyDescription2}
				</p>
			</div>
		</div>
	);
};

export default CustomEmpty;
