import { useReducer } from "react";

type InitValue = boolean | string[];
type Value = string | boolean;
type Toggle = (value?: boolean | string) => void;
type State = { current: number; values: Array<boolean | string> };
type Action = { type: string; payload?: boolean | string };

const reducer = (state: State, action: Action) => {
	if (action.payload !== undefined) {
		return { ...state, current: state.values.indexOf(action.payload) };
	}
	return { ...state, current: state.current + 1 > state.values.length - 1 ? 0 : state.current + 1 };
};

const initState = (defaultValue: InitValue) => {
	if (typeof defaultValue === "boolean") {
		return { current: Number(defaultValue), values: [false, true] };
	}
	return { current: 0, values: defaultValue };
};

export const useToggle = (defaultValue: InitValue): [Value, Toggle] => {
	const [state, dispatcher] = useReducer(reducer, null, () => initState(defaultValue));

	const toggle: Toggle = (value) => {
		dispatcher({ type: "toggle", payload: value });
	};

	return [state.values[state.current], toggle];
};
