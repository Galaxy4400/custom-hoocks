import { useWindowScroll } from "../hooks/use-window-scroll";

export const WindowScrollComponent = () => {
	const [scroll, scrollTo] = useWindowScroll();

	return (
		<section style={{ padding: "30px", borderBottom: "1px solid #eee" }}>
			<h1>useWindowScroll</h1>
			<div>
				<p>
					Scroll position x: {scroll.x}, y: {scroll.y}
				</p>
				<div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
					<button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
					<button onClick={() => scrollTo({ y: 10000 })}>Scroll to bottom</button>
				</div>
			</div>
		</section>
	);
};
