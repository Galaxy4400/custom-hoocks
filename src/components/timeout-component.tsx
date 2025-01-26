import { useState } from "react";
import { useTimeout } from "../hooks/use-timeout";

export const TimeoutComponent = () => {
	const [count, setCount] = useState(10);

	const { clear, reset } = useTimeout(() => {
		setCount(0);
	}, 1000);

	return (
		<section style={{ padding: "30px", borderBottom: "1px solid #eee" }}>
			<h1>useTimeout</h1>
			<h2>{count}</h2>
			<div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
				<button onClick={() => setCount((prev) => ++prev)}>Increment</button>
				<button onClick={clear}>Stop Timeout</button>
				<button onClick={reset}>Run Timeout</button>
			</div>
		</section>
	);
};
