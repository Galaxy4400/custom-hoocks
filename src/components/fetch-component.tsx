import { useFetch } from "../hooks/use-fetch";

interface IPost {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export const FetchComponent = () => {
	const { data, isLoading, error, refetch } = useFetch<IPost[]>("https://jsonplaceholder.typicode.com/posts");

	const clickHandler = () => {
		refetch({
			params: {
				_limit: 3,
			},
		});
	};

	return (
		<section style={{ padding: "30px", borderBottom: "1px solid #eee" }}>
			<h1>useFetch</h1>
			<div>
				<button onClick={clickHandler}>Перезапросить</button>
			</div>
			{isLoading && "Загрузка..."}
			{error && "Произошла ошибка"}
			{data && !isLoading && data.map((item) => <div key={item.id}>{item.title}</div>)}
		</section>
	);
};
