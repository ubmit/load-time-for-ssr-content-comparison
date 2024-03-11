import type { PageLoad } from './$types';

type Todo = {
	id: number;
	title: string;
};

export async function load({ fetch }) {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos');
	const data = (await response.json()) as Array<Todo>;
	return { todos: data };
}
