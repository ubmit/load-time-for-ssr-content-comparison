import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

type Todo = {
  id: number;
  title: string;
};

export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = (await response.json()) as Array<Todo>;
  return json({ data });
}
export default function Todos() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <main>
      <h1>Todos</h1>
      <ul>
        {data.map((todo: Todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </main>
  );
}
