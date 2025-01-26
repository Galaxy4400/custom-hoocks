import { useCallback, useEffect, useRef, useState } from "react";
import { useToggle } from "./use-toggle";

interface IRefetch {
	params?: {
		_limit?: number;
		_deley?: number;
	};
}

export const useFetch = <T>(url: string) => {
	const [data, setData] = useState<null | T>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	const [fetchTrigger, toggleFetchTrigger] = useToggle(false);
	const refetchCountRef = useRef(0);
	const deleyRef = useRef(1000);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);

				const response = await fetch(url);

				if (response.ok) {
					const responseData = await response.json();
					setData(responseData);
					setError("");
				} else {
					const errorText = await response.text();
					setError(errorText);
					setData(null);
				}

				setIsLoading(false);
			} catch (error: unknown) {
				setError(error as string);
				setIsLoading(false);
				setData(null);
			}
		};

		fetchData();

		if (refetchCountRef.current > 0 && error && !isLoading) {
			refetchCountRef.current = --refetchCountRef.current;

			const refetchTimeout = setTimeout(() => {
				toggleFetchTrigger();
			}, deleyRef.current);

			return () => clearTimeout(refetchTimeout);
		}
	}, [url, fetchTrigger]);

	const refetch = useCallback((options?: IRefetch) => {
		refetchCountRef.current = options?.params?._limit ? options?.params?._limit - 1 : 0;
		deleyRef.current = options?.params?._deley || 1000;

		toggleFetchTrigger();
	}, []);

	return { data, isLoading, error, refetch };
};
