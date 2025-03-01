import axios from "axios";
import API_PATH from "../../../constants/api";
import _ from "lodash";
import { Diploma, Option } from "../model";
import Cookies from "js-cookie";

interface DiplomaList {
	diplomaType: string;
	diplomaName: string;
}

export const getDiplomaList = async (
	setData: (value: Option[]) => void,
	setDiploma: (value: Diploma[]) => void,
) => {
	try {
		const result = await axios.get(API_PATH.DIPLOMA_GET_ALL, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${Cookies.get("accessToken")}`,
			},
		});
		if (!_.isEmpty(result)) {
			const diploma: Option[] = result.data.map((e: DiplomaList) => ({
				value: e.diplomaType,
				label: e.diplomaName,
			}));
			setData(diploma);
			setDiploma(result.data);
		}
	} catch (error) {
		console.log("err", error);
	}
};

export interface LtPropertiesList {
	propertyCode: string;
	propertyText: string;
}

export const getLtProperties = async (
	setData: (value: Option[]) => void,
	groupName: string,
) => {
	try {
		const session = sessionStorage.getItem(groupName);
		if (_.isEmpty(session)) {
			const result = await axios.post(
				API_PATH.GET_LT_PROPERTIES,
				{
					groupNameLike: groupName,
				}, // this is the request body (data), which you currently have as empty
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${Cookies.get("accessToken")}`,
					},
				},
			);
			if (!_.isEmpty(result)) {
				const hospitalType: Option[] = result.data.content.map(
					(e: LtPropertiesList) => ({
						value: e.propertyCode,
						label: e.propertyText,
					}),
				);
				sessionStorage.setItem(groupName, JSON.stringify(hospitalType));
			}
		}
		setData(JSON.parse(`${sessionStorage.getItem(groupName)}`));
	} catch (error) {
		console.log("err", error);
	}
};

export const getMedLtProperties = async (
	setData: (value: Option[]) => void,
	groupName: string,
) => {
	try {
		const session = sessionStorage.getItem(groupName);
		if (_.isEmpty(session)) {
			const result = await axios.get(
				`${API_PATH.MED_LT_PROPERTIES_GET_ALL}/${groupName ? "?groupName=" + groupName : ""}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${Cookies.get("accessToken")}`,
					},
				},
			);
			if (!_.isEmpty(result.data)) {
				const jobType: Option[] = result.data.map((e: LtPropertiesList) => ({
					value: e.propertyCode,
					label: e.propertyText,
				}));
				sessionStorage.setItem(groupName, JSON.stringify(jobType));
			}
		}
		setData(JSON.parse(`${sessionStorage.getItem(groupName)}`));
	} catch (error) {
		console.log("err", error);
	}
};
