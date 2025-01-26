import { useLocalStorage } from "../hooks/use-local-storage";
import { useUpdateLogger } from "../hooks/use-update-logger";

export const LocalStorageComponent = () => {
	const [value, { setItem, removeItem }] = useLocalStorage("some-key");

	useUpdateLogger(value);

	return (
		<section style={{ padding: "30px", borderBottom: "1px solid #eee" }}>
			<h1>useLocalStorage</h1>
			<p>Значение из LocalStorage: {String(value)}</p>
			<div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
				<button onClick={() => setItem("new storage value")}>Задать значение</button>
				<button onClick={() => removeItem()}>Удалить значение</button>
			</div>
		</section>
	);
};
