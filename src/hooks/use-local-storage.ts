import { useState } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;
type UseLocalStorage = (key: string) => [
	value: LocalStorageReturnValue,
	{
		setItem: (value: LocalStorageSetValue) => void;
		removeItem: () => void;
	}
];

const getStorageValue = (key: string) => {
	const storageValue = localStorage.getItem(key);

	return storageValue ? JSON.parse(storageValue) : null;
};

export const useLocalStorage: UseLocalStorage = (key: string) => {
	const [value, setValue] = useState(() => getStorageValue(key));

	const setItem = (value: LocalStorageSetValue) => {
		localStorage.setItem(key, JSON.stringify(value));
		setValue(value);
	};

	const removeItem = () => {
		localStorage.removeItem(key);
		setValue(null);
	};

	return [value, { setItem, removeItem }];
};
