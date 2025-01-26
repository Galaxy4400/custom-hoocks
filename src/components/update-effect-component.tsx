import { useToggle } from "../hooks/use-toggle";
import { useUpdateEffect } from "../hooks/use-update-effect";

export const UpdateEffectComponent = () => {
	const [updateValue, toggleUpdateValue] = useToggle(false);

	useUpdateEffect(() => alert("UpdateEffect"), [updateValue]);

	return (
		<section style={{ padding: "30px", borderBottom: "1px solid #eee" }}>
			<h1>useUpdateEffect</h1>
			<button onClick={() => toggleUpdateValue()}>Trigger effect</button>
		</section>
	);
};
