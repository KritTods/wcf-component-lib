import { useSearchParams } from "next/navigation";

export const useGetParam = (param: string): string | null => {
	const searchParams = useSearchParams();

	return searchParams.get(param);
};
