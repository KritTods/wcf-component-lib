import * as _ from "lodash";
import { RuleObject } from "rc-field-form/lib/interface";

const validateNumberRange = (
	_rule: RuleObject,
	value: string,
	min: number,
	max: number,
): Promise<void> => {
	// ตรวจสอบว่าค่าเป็นตัวเลขและอยู่ในช่วงที่กำหนดหรือไม่
	const numValue = Number(value);
	if (!value || (/^\d+$/.test(value) && numValue >= min && numValue <= max)) {
		return Promise.resolve();
	}
	return Promise.reject(
		new Error(`ค่าต้องเป็นตัวเลขระหว่าง ${min} ถึง ${max}`),
	);
};

const validateNumberFixLengthWithRangeRule = (
	_rule: RuleObject,
	value: string,
	length: number,
	min: number,
	max: number,
): Promise<void> => {
	// ตรวจสอบว่าค่าเป็นตัวเลขและอยู่ในช่วงที่กำหนดหรือไม่
	const numValue = Number(value);
	if (
		!value ||
		(/^\d+$/.test(value) &&
			numValue >= min &&
			numValue <= max &&
			value.length === length)
	) {
		return Promise.resolve();
	}
	return Promise.reject();
};

const validateNumber = (_rule: RuleObject, value: string): Promise<void> => {
	if (!value || /^\d*$/.test(value)) {
		return Promise.resolve();
	}
	return Promise.reject();
};

const validateDecimal = (_rule: RuleObject, value: string): Promise<void> => {
	if (!value || /^\d*(\.\d+)?$/.test(value)) {
		return Promise.resolve();
	}
	return Promise.reject();
};

const validateMaxLength =
	(max: number) =>
	(_rule: RuleObject, value: string): Promise<void> => {
		if (!value || value.length <= max) {
			return Promise.resolve();
		}
		return Promise.reject(new Error(`ความยาวต้องไม่เกิน ${max} ตัวอักษร`));
	};

const validateMinMaxLength =
	(min: number, max: number) =>
	(_rule: RuleObject, value: string): Promise<void> => {
		if (!value || (value.length >= min && value.length <= max)) {
			return Promise.resolve();
		}
		return Promise.reject(
			new Error(`ความยาวต้องอยู่ระหว่าง ${min} ถึง ${max} ตัวอักษร`),
		);
	};

const validateNumeric = (_rule: RuleObject, value: string): Promise<void> => {
	if (!value || /^\d+$/.test(value)) {
		return Promise.resolve();
	}
	return Promise.reject(new Error("ต้องเป็นตัวเลขเท่านั้น"));
};

const validateYN = (_rule: RuleObject, value: string): Promise<void> => {
	if (!value || /^[YN]$/.test(value)) {
		return Promise.resolve();
	}
	return Promise.reject(new Error("ต้องเป็น Y หรือ N เท่านั้น"));
};

export const onlyDecimalRule = (
	fieldName: string,
	customMessage: string = "",
) => {
	return {
		validator: validateDecimal,
		message: `${_.isEmpty(customMessage) ? `${fieldName} รับเฉพาะตัวเลขทศนิยมเท่านั้น` : customMessage}`,
	};
};

export const onlyNumberRule = (
	fieldName: string,
	customMessage: string = "",
) => {
	return {
		validator: validateNumber,
		message: `${_.isEmpty(customMessage) ? `${fieldName} รับเฉพาะตัวเลขเท่านั้น` : customMessage}`,
	};
};

export const requiredRule = (fieldName: string, customMessage: string = "") => {
	return {
		required: true,
		message: `${_.isEmpty(customMessage) ? `กรุณากรอก ${fieldName}` : customMessage}`,
	};
};

export const minRule = (
	fieldName: string,
	length: number,
	customMessage: string = "",
) => {
	return {
		min: length,
		message: `${_.isEmpty(customMessage) ? `${fieldName} ต้องมีอย่างน้อย ${length} ตัวอักษร` : customMessage}`,
	};
};

export const maxRule = (
	fieldName: string,
	length: number,
	customMessage: string = "",
) => {
	return {
		max: length,
		message: `${_.isEmpty(customMessage) ? `${fieldName} ต้องมีไม่เกิน ${length} ตัวอักษร` : customMessage}`,
	};
};

export const numberRangeRule = (
	fieldName: string,
	min: number,
	max: number,
	customMessage: string = "",
) => {
	return {
		validator: (_rule: RuleObject, value: string) =>
			validateNumberRange(_rule, value, min, max),
		message: `${_.isEmpty(customMessage) ? `${fieldName} ต้องเป็นตัวเลขระหว่าง ${min} ถึง ${max}` : customMessage}`,
	};
};

export const numberFixLengthWithRangeRule = (
	fieldName: string,
	length: number,
	min: number,
	max: number,
	customMessage: string = "",
) => {
	const minStr = min.toString().padStart(length, "0");
	return {
		validator: async (_rule: RuleObject, value: string) =>
			validateNumberFixLengthWithRangeRule(_rule, value, length, min, max),
		message: `${_.isEmpty(customMessage) ? `${fieldName} ต้องเป็นตัวเลขระหว่าง ${minStr} ถึง ${max}` : customMessage}`,
	};
};

export const equalLengthRule = (
	fieldName: string,
	length: number,
	customMessage: string = "",
) => {
	return {
		min: length,
		max: length,
		message: `${_.isEmpty(customMessage) ? `${fieldName} ต้องมีความยาว ${length} ตัวอักษรเท่านั้น` : customMessage}`,
	};
};

export const maxLengthRule = (
	fieldName: string,
	max: number,
	customMessage: string = "",
) => {
	return {
		validator: validateMaxLength(max),
		message: `${_.isEmpty(customMessage) ? `${fieldName} ความยาวต้องไม่เกิน ${max} ตัวอักษร` : customMessage}`,
	};
};

export const minMaxLengthRule = (
	fieldName: string,
	min: number,
	max: number,
	customMessage: string = "",
) => {
	return {
		validator: validateMinMaxLength(min, max),
		message: `${_.isEmpty(customMessage) ? `${fieldName} ความยาวต้องอยู่ระหว่าง ${min} ถึง ${max} ตัวอักษร` : customMessage}`,
	};
};

export const numericRule = (fieldName: string, customMessage: string = "") => {
	return {
		validator: validateNumeric,
		message: `${_.isEmpty(customMessage) ? `${fieldName} ต้องเป็นตัวเลขเท่านั้น` : customMessage}`,
	};
};

export const ynRule = (fieldName: string, customMessage: string = "") => {
	return {
		validator: validateYN,
		message: `${_.isEmpty(customMessage) ? `${fieldName} ต้องเป็น Y หรือ N เท่านั้น` : customMessage}`,
	};
};

const validateEnglishAndUnderscore = (
	_rule: RuleObject,
	value: string,
): Promise<void> => {
	if (!value || /^[A-Za-z_]+$/.test(value)) {
		return Promise.resolve();
	}
	return Promise.reject();
};

const validateEnglishUpperCaseAndUnderscore = (
	_rule: RuleObject,
	value: string,
): Promise<void> => {
	if (!value || /^[A-Z_]+$/.test(value)) {
		return Promise.resolve();
	}
	return Promise.reject();
};

export const englishUpperCaseAndUnderscoreRule = (
	fieldName: string,
	customMessage: string = "",
) => {
	return {
		validator: validateEnglishUpperCaseAndUnderscore,
		message: `${_.isEmpty(customMessage) ? `${fieldName} ต้องเป็นภาษาอังกฤษตัวใหญ่และ _ เท่านั้น` : customMessage}`,
	};
};

export const englishAndUnderscoreRule = (
	fieldName: string,
	customMessage: string = "",
) => {
	return {
		validator: validateEnglishAndUnderscore,
		message: `${_.isEmpty(customMessage) ? `${fieldName} ต้องเป็นภาษาอังกฤษและ _ เท่านั้น` : customMessage}`,
	};
};

// ฟังก์ชันตรวจสอบความถูกต้องของอีเมลเดี่ยว
const validateSingleEmail = (
	_rule: RuleObject,
	value: string,
): Promise<void> => {
	const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

	if (!value || emailPattern.test(value)) {
		return Promise.resolve();
	}

	return Promise.reject(new Error("รูปแบบอีเมลไม่ถูกต้อง"));
};

// ฟังก์ชันสร้างกฎการตรวจสอบอีเมลเดี่ยว
export const singleEmailRule = (
	fieldName: string,
	customMessage: string = "",
) => {
	return {
		validator: validateSingleEmail,
		message: `${customMessage || `${fieldName} ต้องเป็นอีเมลที่ถูกต้อง`}`,
	};
};

// ฟังก์ชันตรวจสอบความถูกต้องของอีเมลหลายรายการ
const validateMultipleEmails = (
	_rule: RuleObject,
	value: string,
): Promise<void> => {
	if (!value) {
		return Promise.reject(new Error("กรุณากรอกอีเมลอย่างน้อยหนึ่งรายการ"));
	}

	// แยกอีเมลด้วยเครื่องหมาย comma และตรวจสอบทีละรายการ
	const emails = value.split(",").map((email) => email.trim());
	const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

	for (const email of emails) {
		if (!emailPattern.test(email)) {
			return Promise.reject(new Error("รูปแบบอีเมลไม่ถูกต้อง"));
		}
	}

	return Promise.resolve();
};

// ฟังก์ชันสร้างกฎการตรวจสอบอีเมลหลายรายการ
export const multipleEmailRule = (
	fieldName: string,
	customMessage: string = "",
) => {
	return {
		validator: validateMultipleEmails,
		message: `${customMessage || `${fieldName} ต้องเป็นอีเมลที่ถูกต้องและคั่นด้วยเครื่องหมายคอมมา (,)`}`,
	};
};
