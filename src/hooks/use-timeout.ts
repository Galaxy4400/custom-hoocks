import { useCallback, useEffect, useRef } from "react";

export const useTimeout = (callback: () => void, delay: number) => {
	const callbackRef = useRef(callback);
	const timeoutRef = useRef<number>();

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	const set = useCallback(() => {
		timeoutRef.current = setTimeout(callbackRef.current, delay);
	}, [delay]);

	const clear = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}, []);

	const reset = useCallback(() => {
		clear();
		set();
	}, [clear, set]);

	useEffect(() => {
		set();

		return clear;
	}, [clear, set, delay]);

	return { clear, reset };
};
