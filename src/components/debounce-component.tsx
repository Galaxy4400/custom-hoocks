import { useState } from "react";
import { useDebounce } from "../hooks/use-debounce";

export const DebounceComponent = () => {
	const [debounceValue, setDebounceValue] = useState("");

	useDebounce(() => alert(debounceValue), 500, [debounceValue]);

	return (
		<section style={{ padding: "30px", borderBottom: "1px solid #eee" }}>
			<h1>useDebounce</h1>
			<input type="text" value={debounceValue} onChange={(e) => setDebounceValue(e.target.value)} />
		</section>
	);
};
