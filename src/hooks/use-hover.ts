import { useEffect, useRef, useState } from "react";

export const useHover = <T extends HTMLElement>() => {
	const [hovered, setHovered] = useState(false);
	const ref = useRef<T | null>(null);

	useEffect(() => {
		const mouseover = () => setHovered(true);
		const mouseout = () => setHovered(false);

		const node = ref.current;

		node?.addEventListener("mouseover", mouseover);
		node?.addEventListener("mouseout", mouseout);

		return () => {
			node?.removeEventListener("mouseover", mouseover);
			node?.removeEventListener("mouseout", mouseout);
		};
	}, []);

	return { hovered, ref };
};
