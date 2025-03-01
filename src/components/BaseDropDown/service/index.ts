import {
	Address,
	DoctorBank,
	DoctorHospital,
	modelAddress,
	Training,
} from "../model";
import _ from "lodash";
import { Diploma, Option } from "../model";
import { ADDRESS } from "../../../constants/constants";
import { MenuProps } from "antd/es/menu";

interface findAddress {
	tambol: string;
	amphur: string;
	province: string;
	postcode: string;
}

export const getDiplomaList = async (setData: (value: Option[]) => void) => {
	try {
		const result = JSON.parse(sessionStorage.getItem("diploma") ?? "[]");
		if (!_.isEmpty(result)) {
			const diploma: Option[] = result.map((e: Diploma) => ({
				label: `${e.diplomaType}-${e.diplomaName}`,
				value: e.diplomaType,
			}));
			setData(diploma);
		}
	} catch (error) {
		console.log("err", error);
	}
};

export const getDoctorBankList = async (setData: (value: Option[]) => void) => {
	try {
		const result = JSON.parse(sessionStorage.getItem("doctor_bank") ?? "[]");
		if (!_.isEmpty(result)) {
			const doctorBank: Option[] = result.map((e: DoctorBank) => ({
				label: e.bankAccountName,
				value: e.bankDigitCode,
			}));
			setData(doctorBank);
		}
	} catch (error) {
		console.log("err", error);
	}
};

export const getTrainingList = async (setData: (value: Option[]) => void) => {
	try {
		const result = JSON.parse(sessionStorage.getItem("training") ?? "[]");
		if (!_.isEmpty(result)) {
			const training: Option[] = result.map((e: Training) => ({
				label: e.trainingNo,
				value: e.trainingNo,
			}));
			setData(training);
		}
	} catch (error) {
		console.log("err", error);
	}
};

export const getHospitalList = async (setData: (value: Option[]) => void) => {
	try {
		const result = JSON.parse(sessionStorage.getItem("hospital") ?? "[]");
		if (!_.isEmpty(result)) {
			const hospital: Option[] = result.map((e: DoctorHospital) => ({
				label: `${e.hospitalWcfCode}-${e.hospitalName}`,
				value: `${e.hospitalWcfCode}-${e.hospitalName}`,
			}));
			setData(hospital);
		}
	} catch (error) {
		console.log("err", error);
	}
};

export function findAddress(id: string = "") {
	const raw_address = JSON.parse(sessionStorage.getItem("address") ?? "[]");
	const [tambonId, postcode] = id.split("/");
	const data = raw_address.find(
		(item: Address) =>
			item.tambolCode === tambonId && item.postalCode === postcode,
	);
	if (data) return data;
	return modelAddress;
}

export function findLabelAddress(
	id: string | null = "",
	type: ADDRESS,
): string | null | undefined {
	const rawAddress: Address[] = JSON.parse(
		sessionStorage.getItem("address") ?? "[]",
	);
	let key = "";
	const data = rawAddress.find((item: Address) => {
		switch (type) {
			case ADDRESS.TAMBOL:
				key = "tambolName";
				return item.tambolCode === id;
			case ADDRESS.AMPHUR:
				key = "amphurName";
				return item.amphurCode === id;
			case ADDRESS.PROVINCE:
				key = "provinceName";
				return item.provinceCode === id;
			case ADDRESS.POSTCODE:
				key = "postalCode";
				return item.postalCode === id;
			case ADDRESS.POSTAL_NAME_BY_ID:
				key = "postalName";
				return item.postalId.toString() === id ? id.toString() : "";
		}
	});

	return data ? (`${data[key]}` as string) : null;
}

export const handleDropdown = (
	menu?: MenuProps["items"],
	onDropdownClick?: MenuProps["onClick"],
) => {
	if (menu && onDropdownClick) {
		return { items: menu, onClick: onDropdownClick };
	} else if (menu) {
		return { items: menu };
	} else {
		return undefined;
	}
};
