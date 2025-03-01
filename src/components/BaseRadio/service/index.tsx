export const handleRenderRadio = (
	itemValue: string | number | null,
	value: string | number | null,
	valueShowInput: number | string = 0,
) => {
	if (itemValue === valueShowInput && value === valueShowInput) {
		return true;
	}
	return false;
};
