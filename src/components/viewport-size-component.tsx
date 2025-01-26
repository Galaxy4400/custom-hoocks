import { useViewportSize } from "../hooks/use-viewport-size";

export const ViewportSizeComponent = () => {
	const { height, width } = useViewportSize();

	return (
		<section style={{ padding: "30px", borderBottom: "1px solid #eee" }}>
			<h1>useViewportSize</h1>
			<p>
				Width: {width}, height: {height}
			</p>
		</section>
	);
};
