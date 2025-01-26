import { useState } from "react";
import { useWindowEvent } from "./use-window-event";

type ScrollPosition = { x: number; y: number };
type ScrollTo = ({ x, y }: { x?: number; y?: number }) => void;

export const useWindowScroll = (): [ScrollPosition, ScrollTo] => {
	const [scroll, setScroll] = useState({ x: window.scrollX, y: window.scrollY });

	useWindowEvent("scroll", () => {
		setScroll({ x: window.scrollX, y: window.scrollY });
	});

	const scrollTo: ScrollTo = ({ x = 0, y = 0 }) => {
		window.scrollTo(x, y);
	};

	return [scroll, scrollTo];
};
