import { useHover } from "../hooks/use-hover";

export const HoverComponent = () => {
	const { hovered, ref } = useHover<HTMLDivElement>();

	return (
		<section style={{ padding: "30px", borderBottom: "1px solid #eee" }}>
			<h1>useHover</h1>
			<div ref={ref}>{hovered ? "На меня навели мышку" : "Наведи мышкой на меня"}</div>
		</section>
	);
};
