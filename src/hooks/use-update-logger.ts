import { useEffect } from "react";

export const useUpdateLogger = (value: unknown) => {
	useEffect(() => {
		console.log(value);
	}, [value]);
};
