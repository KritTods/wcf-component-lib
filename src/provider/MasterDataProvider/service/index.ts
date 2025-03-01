import _ from "lodash";
import {
	getAddress,
	getDiplomaList,
	getDoctorBankList,
	getHospitalList,
	getTrainingList,
} from "./api";
import { Address } from "../../../components/BaseDropDown/model";

export const handleAddressSession = async () => {
	const session = sessionStorage.getItem("raw_address");
	if (_.isEmpty(session)) {
		const raw_address = await getAddress();
		const option_address = raw_address.map((e: Address) => ({
			value: `${e.tambolCode}/${e.postalCode}`,
			label:
				e.tambolName +
				" > " +
				e.amphurName +
				" > " +
				e.provinceName +
				" > " +
				e.postalCode,
		}));
		if (!_.isEmpty(raw_address)) {
			sessionStorage.setItem("raw_address", JSON.stringify(raw_address));
			sessionStorage.setItem("option_address", JSON.stringify(option_address));
		}
	}
};

export const handleDiplomaSession = async () => {
	const session = sessionStorage.getItem("diploma");
	if (_.isEmpty(session)) {
		const raw_diploma = await getDiplomaList();
		if (!_.isEmpty(raw_diploma)) {
			sessionStorage.setItem("diploma", JSON.stringify(raw_diploma));
		}
	}
};

export const handleDoctorBankSession = async () => {
	const session = sessionStorage.getItem("doctor_bank");
	if (_.isEmpty(session)) {
		const raw_doctor_bank = await getDoctorBankList();
		if (!_.isEmpty(raw_doctor_bank)) {
			sessionStorage.setItem("doctor_bank", JSON.stringify(raw_doctor_bank));
		}
	}
};

export const handleTrainingSession = async () => {
	const session = sessionStorage.getItem("training");
	if (_.isEmpty(session)) {
		const raw_training = await getTrainingList();
		if (!_.isEmpty(raw_training)) {
			sessionStorage.setItem("training", JSON.stringify(raw_training));
		}
	}
};

export const handleHospitalSession = async () => {
	const session = sessionStorage.getItem("hospital");
	if (_.isEmpty(session)) {
		const raw_hospital = await getHospitalList();
		if (!_.isEmpty(raw_hospital)) {
			sessionStorage.setItem("hospital", JSON.stringify(raw_hospital));
		}
	}
};
