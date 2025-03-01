export const handleOnCancel = (
	onClose: () => void,
	setIsOpen: (value: boolean) => void,
) => {
	if (onClose) onClose();
	setIsOpen(false);
};

export const handleCloseDialog = (
	onConfirm: () => void,
	setIsOpen: (value: boolean) => void,
) => {
	if (onConfirm) onConfirm();
	setIsOpen(false);
};
