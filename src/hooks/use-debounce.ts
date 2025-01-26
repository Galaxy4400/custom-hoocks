import { useEffect } from "react";
import { useTimeout } from "./use-timeout";

export const useDebounce = (callback: () => void, delay: number, dependencies: unknown[]) => {
	const { clear, reset } = useTimeout(callback, delay);
	useEffect(reset, [...dependencies, reset]);
	useEffect(clear, [clear]);
};
