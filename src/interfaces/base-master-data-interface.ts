import { IsActive } from "../constants/constants";

export interface BaseMasterDataInterface {
	createdBy: string;
	createdDate: string;
	updatedBy: string;
	updatedDate: string;
	uuid: string;
	isActive: IsActive | undefined;
}

export const baseMasterDataModel: BaseMasterDataInterface = {
	createdBy: "",
	createdDate: "",
	updatedBy: "",
	updatedDate: "",
	uuid: "",
	isActive: IsActive.Y,
};
