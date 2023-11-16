import { sql } from '@vercel/postgres';
import { AddForm } from './add-form';
import { DeleteForm } from './delete-form';

export default async function Home() {
  let data = await sql`SELECT * FROM todos`
  const { rows: todos } = data;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>ola</h1>
      <AddForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <DeleteForm id={todo.id} todo={todo.text} />
          </li>
        ))}
      </ul>
    </main>
  )
}
