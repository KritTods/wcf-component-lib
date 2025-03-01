export function handleClickMenu(key: string) {
	const item = key.split("*");
	return {
		key: item[0],
		pageLevel: item[1],
	};
}
