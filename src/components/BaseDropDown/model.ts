import { IsActive } from "../../constants/constants";

export interface Option {
	value: string | number | null;
	label: string;
	disabled?: boolean;
}

export interface Training {
	trainingNo: string;
	trainingTime: string;
	trainingYear: string;
	trainingDate: string;
}

export interface DoctorHospital {
	hospitalWcfCode: string;
	jobType: string;
	position: string;
	hospitalName: string;
}
export interface DoctorBank {
	doctorCode: string;
	bankAccountName: string;
	bankDigitCode: string;
	bankSortingCode: string;
	bankAccount: string;
}
export interface Diploma {
	diplomaName: string;
	diplomaType: string;
}

export const statusModel: Option[] = [
	{
		value: IsActive.Y,
		label: "ใช้งาน",
	},
	{
		value: IsActive.N,
		label: "ไม่ใช้งาน",
	},
	{
		value: "",
		label: "ทั้งหมด",
	},
];

export interface Address {
	postalId: number;
	postalCode: string | null;
	postalName: string | null;
	tambolName: string | null;
	tambolCode: string | null;
	amphurCode: string | null;
	amphurName: string | null;
	provinceCode: string | null;
	provinceName: string | null;
	id: string | null;
	[key: string]: string | number | null;
}

export const modelAddress: Address = {
	postalId: 0,
	postalCode: null,
	postalName: null,
	tambolName: null,
	tambolCode: null,
	amphurCode: null,
	amphurName: null,
	provinceCode: null,
	provinceName: null,
	id: null,
};

export const modelDoctorHospital: DoctorHospital = {
	hospitalWcfCode: "",
	jobType: "",
	position: "",
	hospitalName: "",
};
