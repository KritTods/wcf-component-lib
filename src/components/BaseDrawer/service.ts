export const handleOnClose = (
	onClose: () => void,
	setIsOpen: (value: boolean) => void,
) => {
	if (onClose) onClose();
	setIsOpen(false);
};

export const handleOnConfirm = (
	onConfirm: () => void,
	setIsOpen: (value: boolean) => void,
) => {
	if (onConfirm) onConfirm();
	setIsOpen(false);
};
