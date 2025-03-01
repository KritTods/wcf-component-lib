import axios from "axios";
import API_PATH from "../../../constants/api";
import Cookies from "js-cookie";

export const getAddress = async () => {
	try {
		const result = await axios.get(API_PATH.ADDRESS_GET_ALL, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${Cookies.get("accessToken")}`,
			},
		});
		return result.data;
	} catch (err) {
		console.log("err", err);
	}
};

export const getDiplomaList = async () => {
	try {
		const result = await axios.get(API_PATH.DIPLOMA_GET_ALL, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${Cookies.get("accessToken")}`,
			},
		});
		console.log("result.data", result.data);
		return result.data;
	} catch (err) {
		console.log("err", err);
	}
};

export const getDoctorBankList = async () => {
	try {
		const result = await axios.get(API_PATH.DOCTOR_BANK_GET_ALL, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${Cookies.get("accessToken")}`,
			},
		});
		return result.data;
	} catch (err) {
		console.log("err", err);
	}
};

export const getTrainingList = async () => {
	try {
		const result = await axios.get(API_PATH.TRAINING_GET_ALL, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${Cookies.get("accessToken")}`,
			},
		});
		return result.data;
	} catch (err) {
		console.log("err", err);
	}
};

export const getHospitalList = async () => {
	try {
		const result = await axios.get(API_PATH.HOSPITAL_GET_ALL, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${Cookies.get("accessToken")}`,
			},
		});
		return result.data;
	} catch (err) {
		console.log("err", err);
	}
};
