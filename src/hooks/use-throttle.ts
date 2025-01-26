import { useEffect, useRef } from "react";

export const useThrottle = (value: unknown, callback: () => void, interval: number = 500) => {
	const lastExecuted = useRef(Date.now());

	useEffect(() => {
		if (Date.now() > lastExecuted.current + interval) {
			lastExecuted.current = Date.now();
			callback();
		} else {
			const timerId = setTimeout(() => {
				lastExecuted.current = Date.now();
				callback();
			}, interval);

			return () => clearTimeout(timerId);
		}
	}, [value, interval, callback]);
};
