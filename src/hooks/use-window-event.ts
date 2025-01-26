import { useEffect } from "react";

export const useWindowEvent = (
	type: keyof WindowEventMap,
	listener: EventListenerOrEventListenerObject,
	options?: boolean | AddEventListenerOptions
) => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener(type, listener, options);
			return () => window.removeEventListener(type, listener, options);
		}
	}, [type, listener, options]);
};
