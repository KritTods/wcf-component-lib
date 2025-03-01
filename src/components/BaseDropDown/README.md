ตัวอย่างการนำไป Implement

```jsx
export default function MedDropDown(props: MedDropDownProps) {
	const {
		option = [],
		placeholder = "โปรดระบุ",
		type = DROPDOWN_TYPE.DEFAULT,
		queryString = "",
		bodyRequest,
		getValue = () => {},
	} = props;

	const dispatch: AppDispatch = useDispatch();
	const [dropdown, setDropdown] = useState<Option[]>(option);

	useEffect(() => {
		if (_.isEmpty(dropdown) && !_.isEmpty(type)) {
			dispatch(handleSession(type, setDropdown, queryString, bodyRequest));
		}
	}, [dropdown]);

	return (
		<>
			<BaseDropDown
				{...props}
				placeholder={placeholder}
				option={dropdown}
				getValue={(e) => getValue(handleGetValue(type, e))}
			/>
		</>
	);
}
```

ตัวอย่าง function handleSession
หากไม่มี session ก็จะทำการ call api มา set

```jsx
interface DropDownParams {
	apiPath: string;
	queryString?: string;
	bodyRequest?: any;
	method: API_METHOD;
}

export const handleSession =
	(
		type: DROPDOWN_TYPE,
		setDropdown?: (value: Option[]) => void,
		queryString?: string,
		bodyRequest?: any
	) =>
	async (dispatch: AppDispatch) => {
		const { apiPath, sessionName, method, baseBody } = DROPDOWN[type];

		const getSession = JSON.parse(sessionStorage.getItem(sessionName) ?? "[]");

		if (!_.isEmpty(getSession)) {
			const data = await handleOption(type, getSession);
			if (setDropdown) setDropdown(data);
			return;
		}

		if (!_.isEmpty(baseBody)) bodyRequest = baseBody;
		const response = await dispatch(
			fetchDropDownList({ apiPath, method, queryString, bodyRequest })
		);

		if (!_.isEmpty(response)) {
			sessionStorage.setItem(sessionName, JSON.stringify(response.payload));
			if (setDropdown) {
				const data = handleOption(type, response.payload);
				setDropdown(data);
			}
		}
	};
```

ตัวอย่างการประกาศ model

```jsx
export enum SESSION_NAME {
	DEFAULT = "",
	DIPLOMA = "diploma",
	HOSPITAL_TYPE = "hospitalType",
	HOSPITAL_CATEGORY = "hospitalCategory",
	DOCTOR_BANK = "doctorBank",
	TRAINING = "training",
	HOSPITAL = "hospital",
	JOB_TYPE = "jobType",
	ADDRESS = "address",
	TITLE = "title",
	DOCTOR_TYPE = "doctorType",
	POSTAL_ID = "postalId",
}

export enum API_METHOD {
	GET = "GET",
	POST = "POST",
}

export const DROPDOWN = {
	[SESSION_NAME.DIPLOMA]: {
		apiPath: "https://api-dev-wcf.soilfish.co/med/master/diploma",
		sessionName: SESSION_NAME.DIPLOMA,
		method: API_METHOD.GET,
		baseBody: undefined,
	},
	[SESSION_NAME.HOSPITAL_TYPE]: {
		apiPath: "https://api-dev-wcf.soilfish.co/med/master/lt-properties/list",
		sessionName: SESSION_NAME.HOSPITAL_TYPE,
		method: API_METHOD.POST,
		baseBody: { groupName: "HOSPITAL_TYPE" },
	},
	[SESSION_NAME.HOSPITAL_CATEGORY]: {
		apiPath: "https://api-dev-wcf.soilfish.co/med/master/hospital-category",
		sessionName: SESSION_NAME.HOSPITAL_CATEGORY,
		method: API_METHOD.POST,
		baseBody: { groupName: "HOSPITAL_CATEGORY" },
	},
	[SESSION_NAME.DOCTOR_BANK]: {
		apiPath: "https://api-dev-wcf.soilfish.co/med/master/doctor-bank",
		sessionName: SESSION_NAME.DOCTOR_BANK,
		method: API_METHOD.GET,
		baseBody: undefined,
	},
	[SESSION_NAME.TRAINING]: {
		apiPath: "https://api-dev-wcf.soilfish.co/med/training",
		sessionName: SESSION_NAME.TRAINING,
		method: API_METHOD.GET,
		baseBody: undefined,
	},
	[SESSION_NAME.HOSPITAL]: {
		apiPath: "https://api-dev-wcf.soilfish.co/med/hospital",
		sessionName: SESSION_NAME.HOSPITAL,
		method: API_METHOD.GET,
		baseBody: undefined,
	},
	[SESSION_NAME.JOB_TYPE]: {
		apiPath: `https://api-dev-wcf.soilfish.co/med/master/med-lt-properties/?groupName=JOB_TYPE`,
		sessionName: SESSION_NAME.JOB_TYPE,
		method: API_METHOD.GET,
		baseBody: undefined,
	},
	[SESSION_NAME.ADDRESS]: {
		apiPath: "https://api-dev-wcf.soilfish.co/med/master/address/list",
		sessionName: SESSION_NAME.ADDRESS,
		method: API_METHOD.GET,
		baseBody: undefined,
	},
	[SESSION_NAME.POSTAL_ID]: {
		apiPath: "https://api-dev-wcf.soilfish.co/med/master/address/list",
		sessionName: SESSION_NAME.ADDRESS,
		method: API_METHOD.GET,
		baseBody: undefined,
	},
	[SESSION_NAME.TITLE]: {
		apiPath: "https://api-dev-wcf.soilfish.co/med/master/title",
		sessionName: SESSION_NAME.TITLE,
		method: API_METHOD.GET,
		baseBody: undefined,
	},
	[SESSION_NAME.DOCTOR_TYPE]: {
		apiPath: `https://api-dev-wcf.soilfish.co/med/master/med-lt-properties/?groupName=DOCTOR_TYPE`,
		sessionName: SESSION_NAME.DOCTOR_TYPE,
		method: API_METHOD.GET,
		baseBody: undefined,
	},
	[SESSION_NAME.DEFAULT]: {
		apiPath: "",
		sessionName: "",
		method: API_METHOD.GET,
		baseBody: undefined,
	},
};

```

ตัวอย่าง การนำข้อมูลไปปั้นเพื่อใช้ใน dropdown

```jsx
const handleOption = (type: SESSION_NAME, result: any) => {
	switch (type) {
		case SESSION_NAME.DIPLOMA:
			const diploma: Option[] = result.map((e: Diploma) => ({
				label: `${e.diplomaType.trim()}-${e.diplomaName}`,
				value: e.diplomaType,
			}));
			return diploma;
		case SESSION_NAME.HOSPITAL:
			const hospital: Option[] = result.map((e: DoctorHospital) => ({
				label: `${e.hospitalWcfCode}-${e.hospitalName}`,
				value: `${e.hospitalWcfCode}-${e.hospitalName}`,
			}));
			return hospital;
		case SESSION_NAME.ADDRESS:
			const option_address = result.map((e: Address) => ({
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
			return option_address;
		case SESSION_NAME.POSTAL_ID:
			const postalIdLabel = result.map((e: Address) => ({
				value: `${e.tambolCode}/${e.postalCode}`,
				label: e.postalId + "-" + e.postalName,
			}));
			return postalIdLabel;
		case SESSION_NAME.HOSPITAL_TYPE:
		case SESSION_NAME.HOSPITAL_CATEGORY:
			const ltProperties: Option[] = result.content.map(
				(e: LtPropertiesList) => ({
					value: e.propertyCode,
					label: e.propertyText,
				})
			);
			return ltProperties;
		case SESSION_NAME.JOB_TYPE:
		case SESSION_NAME.DOCTOR_TYPE:
			const medLtProperties: Option[] = result.map((e: LtPropertiesList) => ({
				value: e.propertyCode,
				label: e.propertyText,
			}));
			return medLtProperties;
		case SESSION_NAME.TITLE:
			const title: Option[] = result.map((e: Title) => ({
				label: e.titleName,
				value: e.titleCode,
			}));
			return title;
		default:
			return [];
	}
};
```

```jsx
export const fetchDropDownList = createAsyncThunk(
	"Medical/fetchDropDownList",
	async (params: DropDownParams, thunkAPI) => {
		const { apiPath, queryString = "", bodyRequest, method } = params;

		try {
			let response;
			if (method === "GET") {
				const newApiPath = `${apiPath}${queryString}`;
				response = await axios.get(newApiPath);
			} else {
				response = await axios.post(apiPath, bodyRequest);
			}
			return response.data;
		} catch (err) {
			return thunkAPI.rejectWithValue(err);
		}
	}
);
```

ตัวอย่าง function ที่ใช้ในการ handle ค่าที่ได้รับมาจาก callback

```jsx
export const handleGetValue = (type: SESSION_NAME, value: any) => {
	switch (type) {
		case SESSION_NAME.ADDRESS:
		case SESSION_NAME.POSTAL_ID:
			const data = findAddress(value);
			return data;
		default:
			return value;
	}
};
```

ตัวอย่างการนำไปใช้งานสำหรับ ADDRESS

```jsx
<MedDropDown
					label="ตำบล"
					itemName="tambol"
					type={SESSION_NAME.ADDRESS}
					getValue={(e: Address) => {
						dispatch(
							setDoctorData({
								...doctorData,
								amphur: e.amphurCode,
								province: e.provinceCode,
								tambol: e.tambolCode,
								postcode: e.postalCode,
							})
						);
					}}
					labelRender={() => (
						<p>{findLabelAddress(doctorData.tambol, ADDRESS.TAMBOL)}</p>
					)}
				/>

    PS. findLabelAddress มีอยู่ใน wcf-component-lib แล้ว
    import { findLabelAddress } from "wcf-component-lib/src/components/BaseDropDown/service";

```

ตัวอย่าง ADDRESS ที่ได้รับจาก API

```jsx
[
	{
		postalId: 1,
		postalCode: "10200",
		postalName: "พระบรมมหาราชวัง",
		tambolName: "พระบรมมหาราชวัง",
		tambolCode: "10010100",
		amphurCode: "1001",
		amphurName: "พระนคร",
		provinceCode: "10",
		provinceName: "กรุงเทพมหานคร",
	},
	{
		postalId: 2,
		postalCode: "10200",
		postalName: "วังบูรพาภิรมย์",
		tambolName: "วังบูรพาภิรมย์",
		tambolCode: "10010200",
		amphurCode: "1001",
		amphurName: "พระนคร",
		provinceCode: "10",
		provinceName: "กรุงเทพมหานคร",
	},
	{
		postalId: 3,
		postalCode: "10200",
		postalName: "วัดราชบพิธ",
		tambolName: "วัดราชบพิธ",
		tambolCode: "10010300",
		amphurCode: "1001",
		amphurName: "พระนคร",
		provinceCode: "10",
		provinceName: "กรุงเทพมหานคร",
	},
];
```

ตัวอย่าง response จาก callBack

```jsx
{
    "postalId": 3,
    "postalCode": "10200",
    "postalName": "วัดราชบพิธ",
    "tambolName": "วัดราชบพิธ",
    "tambolCode": "10010300",
    "amphurCode": "1001",
    "amphurName": "พระนคร",
    "provinceCode": "10",
    "provinceName": "กรุงเทพมหานคร"
}
```
