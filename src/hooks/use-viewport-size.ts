import { useState } from "react";
import { useWindowEvent } from "./use-window-event";

export const useViewportSize = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	useWindowEvent("resize", () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	});

	return { width, height };
};
