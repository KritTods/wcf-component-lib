const API_PATH = {
	GET_CLINIC_DETAIL: "http://localhost:8111/getClinicList",
	GET_CLINIC_PAGE: "http://localhost:8111/getClinicListPage",
	GET_CLINIC: "http://localhost:8111/getClinicListByCodeName",
	CREATE_CLINIC: "http://localhost:8111/createClinic",
	UPDATE_CLINIC: "http://localhost:8111/patchClinic",

	// Diploma
	DIPLOMA_GET_ALL: "http://localhost:8111/med/master/diploma",

	// address
	ADDRESS_GET_ALL: "http://localhost:8111/med/master/address/list",

	// DoctorBank
	DOCTOR_BANK_GET_ALL: "http://localhost:8111/med/doctor-bank",

	// Training
	TRAINING_GET_ALL: "http://localhost:8111/med/training",
	GET_LT_PROPERTIES: "http://localhost:8111/med/master/lt-properties/list",

	// DoctorHospital
	HOSPITAL_GET_ALL: "http://localhost:8111/med/hospital",

	// MedLtProperties
	MED_LT_PROPERTIES_GET_ALL:
		"http://localhost:8111/med/master/med-lt-properties",
};

export default API_PATH;
