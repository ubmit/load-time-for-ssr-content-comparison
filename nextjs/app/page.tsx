type Todo = {
  id: number;
  title: string;
};

export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

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
