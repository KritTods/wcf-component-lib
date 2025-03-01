ตัวอย่างการนำไป Implement

```jsx
import { AppDispatch } from "@/redux/config/configStore";
import { SliceModel } from "@/redux/slices/model";
import { getExistingSsoUser, getSsoUser } from "@/utils/sso-user";
import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import BaseTooltip, {
	BaseTooltipProps,
} from "wcf-component-lib/src/components/BaseToolTip";

interface Props extends BaseTooltipProps {
	displayName?: string;
}

export default function ToolTipUser(props: Props) {
	const { displayName, name, trigger = "hover", className, color } = props;

	const dispatch: AppDispatch = useDispatch();
	const { ssoUser } = useSelector(
		(state: SliceModel) => ({
			ssoUser: state.ssoUser.list,
		}),
		shallowEqual
	);
	return (
		<BaseTooltip
			name={displayName ?? name}
			color={color}
			contentType="user"
			className={className}
			trigger={trigger}
			onClick={() => {
				trigger === "click" && dispatch(getSsoUser(name, ssoUser));
			}}
			onHover={() => {
				trigger === "hover" && dispatch(getSsoUser(name, ssoUser));
			}}
			userItem={getExistingSsoUser(name, ssoUser)}
		/>
	);
}
```

ตัวอย่าง function สำหรับ handleSsoUser

```jsx
import { AppDispatch } from "@/redux/config/configStore";
import { SsoUser } from "@/redux/slices/sso_user/model";
import { getUmsSsoUser } from "./api";
import _ from "lodash";
import { setSsoUser } from "@/redux/slices/sso_user";

export const getSsoUser =
	(login: string, userList: SsoUser[]) => async (dispatch: AppDispatch) => {
		try {
			const newUserList = _.cloneDeep(userList);

			const haveExistingUser = getExistingSsoUser(login, newUserList);
			if (haveExistingUser) return;

			const response = await dispatch(getUmsSsoUser(login));
			if (!_.isEmpty(response.payload)) {
				newUserList.push(response.payload);
				dispatch(setSsoUser(newUserList));
				return response.payload;
			}

			return null;
		} catch (err) {
			return null;
		}
	};

export const getExistingSsoUser = (login: string, userList: SsoUser[]) => {
	try {
		const existingUser = _.find(userList, { login });
		if (existingUser) {
			return existingUser;
		}
		return undefined;
	} catch (err) {
		return undefined;
	}
};

export const getUmsSsoUser = createAsyncThunk(
	"UMS/getSsoUser",
	async (login: string, thunkAPi) => {
		try {
			const apiPath = `${API_PATH.SSO_USER}?login=${login}`;
			const response = await axios.get(apiPath);
			return response.data;
		} catch (err) {
			return thunkAPi.rejectWithValue("");
		}
	}
);
```

ตัวอย่าง redux

```jsx
export interface SsoUser {
	userId: number;
	login: string;
	firstName: string;
	lastName: string;
	email: string;
	ssoBranchCode: string;
	lastLoginDate: string;
	type: string;
	active: string;
	title: string;
	investigateCode: string;
	workingDeptDescription: string;
	workingDeptNo: string;
	employeeType: string;
	ssoPersonPosition: string;
	ssoPersonClass: string;
	titleEn: string;
	firstNameEn: string;
	lastNameEn: string;
	createdDate: string;
	createdBy: string;
	lastUpdatedDate: string;
	lastUpdatedBy: string;
	hasSecurityCode: string;
}

export interface SsoUserList {
	list: SsoUser[];
}

export const modelSsoUserList: SsoUserList = {
	list: [],
};

export const modelSsoUser: SsoUser = {
	userId: 0,
	login: "",
	firstName: "",
	lastName: "",
	email: "",
	ssoBranchCode: "",
	lastLoginDate: "",
	type: "",
	active: "",
	title: "",
	investigateCode: "",
	workingDeptDescription: "",
	workingDeptNo: "",
	employeeType: "",
	ssoPersonPosition: "",
	ssoPersonClass: "",
	titleEn: "",
	firstNameEn: "",
	lastNameEn: "",
	createdDate: "",
	createdBy: "",
	lastUpdatedDate: "",
	lastUpdatedBy: "",
	hasSecurityCode: "",
};


```

ตัวอย่าง slice

```jsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { modelSsoUserList, SsoUser, SsoUserList } from "./model";

export const ssoUserSlice = createSlice({
	name: "SsoUser",
	initialState: modelSsoUserList,
	reducers: {
		setSsoUser: (state: SsoUserList, actions: PayloadAction<SsoUser[]>) => {
			state.list = actions.payload;
		},
	},
});

export const { setSsoUser } = ssoUserSlice.actions;

export default ssoUserSlice.reducer;
```
