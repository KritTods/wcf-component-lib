"use client";

import React, { useEffect } from "react";
import {
	handleAddressSession,
	handleDiplomaSession,
	handleDoctorBankSession,
	handleHospitalSession,
	handleTrainingSession,
} from "./service";

interface MasterDataProviderProps {
	children: React.ReactNode;
}

const MasterDataProvider: React.FC<MasterDataProviderProps> = ({
	children,
}) => {
	useEffect(() => {
		handleAddressSession();
		handleDiplomaSession();
		handleDoctorBankSession();
		handleTrainingSession();
		handleHospitalSession();
	}, []);
	return <>{children}</>;
};

export default MasterDataProvider;
