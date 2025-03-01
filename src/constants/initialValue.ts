export const pagination = {
	pageNumber: 0,
	pageSize: 10,
};

export const options = {
	clientType: [
		{ value: "External", label: "External" },
		{ value: "Internal", label: "Internal" },
	],
	userType: [
		{ value: "SSO", label: "SSO" },
		{ value: "OTHER", label: "OTHER" },
	],
	status: [
		{ value: "Y", label: "Y - Active" },
		{ value: "N", label: "N - Not Active" },
	],
	statusTH: [
		{ value: "Y", label: "Y - ใช้งาน" },
		{ value: "N", label: "N - ไม่ใช้งาน" },
	],
	umRole: [
		{ value: "Y", label: "Y" },
		{ value: "N", label: "N" },
	],
	isMenu: [
		{ value: "Y", label: "YES" },
		{ value: "N", label: "NO" },
	],
	region: [
		{ value: 1, label: "กรุงเทพมหานคร" },
		{ value: 2, label: "ปริมณฑล" },
		{ value: 3, label: "ภาคกลาง" },
		{ value: 4, label: "ภาคเหนือ" },
		{ value: 5, label: "ภาคตะวันออกเฉียงเหนือ" },
		{ value: 6, label: "ภาคใต้" },
	],
	districtType: [
		{ value: 1, label: "อำเภอ" },
		{ value: 2, label: "เทศบาล" },
	],
	accidentIssueType: [
		{ value: 0, label: "ทั้งหมด" },
		{ value: 1, label: "เลขบัตรประชานชน" },
		{ value: 2, label: "เลขที่ประสบอันตราย" },
		{ value: 3, label: "เลขที่ ECPS" },
		{ value: 4, label: "ชื่อ-สกุล" },
	],
	accidentIssueStatus: [
		{ value: "O", label: "รับคำร้อง" },
		{ value: "D", label: "วินิจฉัย" },
		{ value: "I", label: "เปลี่ยนแปลงวินิจฉัย" },
		{ value: "A", label: "อนุมัติ" },
		{ value: "F", label: "ปิดเรื่อง" },
		{ value: "R", label: "รื้อฟื้น" },
		{ value: "N", label: "วินิจฉัย ไม่มีสิทธิ" },
	],
	pageLevel: [
		{ value: 1, label: "1" },
		{ value: 2, label: "2" },
		{ value: 3, label: "3" },
		{ value: 4, label: "4" },
		{ value: 5, label: "5" },
		{ value: 6, label: "6" },
		{ value: 7, label: "7" },
		{ value: 8, label: "8" },
		{ value: 9, label: "9" },
		{ value: 10, label: "10" },
	],
	gender: [
		{ value: "N", label: "ไม่ระบุ" },
		{ value: "M", label: "ชาย" },
		{ value: "F", label: "หญิง" },
	],
	closeStatus: [
		{ value: "I", label: "ปิดเรื่องนอกกองทุน" },
		{ value: "C", label: "ปิดเรื่อง" },
		{ value: "U", label: "ปิดเรื่องไม่มีสิทธิ" },
		{ value: "O", label: "ปิดเรื่อง(O)" },
		{ value: "X", label: "ปิดเรื่องยอดไม่เท่ากัน" },
	],
};

export const dateColumn = {
	updatedDate: "lastUpdatedDate",
	createdDate: "createdDate",
};

export const diagnosisCase = [
	{ value: "A", label: "มีสิทธิ" },
	{ value: "N", label: "ไม่มีสิทธิ" },
];

export const assessSeverityCase = [
	{ value: "11", label: "หยุดงานไม่เกิน 3 วัน" },
	{ value: "12", label: "หยุดงานเกิน 3 วัน" },
	{ value: "13", label: "สูญเสียอวัยวะ" },
	{ value: "14", label: "ทุพพลภาพ" },
	{ value: "15", label: "ตาย" },
];
