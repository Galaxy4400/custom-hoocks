import { useToggle } from "../hooks/use-toggle";

export const ToggleComponent = () => {
	const [value, toggle] = useToggle(false);

	return (
		<section style={{ padding: "30px", borderBottom: "1px solid #eee" }}>
			<h1>useToggle</h1>
			<h2 style={{ marginBottom: "15px" }}>{value.toString()}</h2>
			<div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
				<button onClick={() => toggle()}>Toggle</button>
				<button onClick={() => toggle(true)}>True</button>
				<button onClick={() => toggle(false)}>False</button>
			</div>
		</section>
	);
};
