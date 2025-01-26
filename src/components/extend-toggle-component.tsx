import { useToggle } from "../hooks/use-toggle";

export const ExtendToggleComponent = () => {
	const [value, toggle] = useToggle(["blue", "orange", "cyan", "teal"]);

	return (
		<section style={{ padding: "30px", borderBottom: "1px solid #eee" }}>
			<h1>useToggle</h1>
			<h2 style={{ marginBottom: "15px" }}>{String(value)}</h2>
			<div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
				<button onClick={() => toggle()}>Toggle</button>
				<button onClick={() => toggle("cyan")}>Toggle to 'cyan'</button>
			</div>
		</section>
	);
};
