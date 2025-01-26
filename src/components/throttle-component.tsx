import { useState } from "react";
import { useThrottle } from "../hooks/use-throttle";

export const ThrottleComponent = () => {
	const [throttleValue, setThrottleValue] = useState("");

	useThrottle(throttleValue, () => console.log(throttleValue));

	return (
		<section style={{ padding: "30px", borderBottom: "1px solid #eee" }}>
			<h1>useThrottle</h1>
			<input type="text" value={throttleValue} onChange={(e) => setThrottleValue(e.target.value)} />
		</section>
	);
};
