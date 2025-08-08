// export const dynamic = 'force-dynamic';
// export const revalidate = 5000

// SSG - Server side generation
// SSR - Server side rendiring

// Timed based
// On demand
// Disable cache

import React from "react";
import { db } from "../db";
import Link from "next/link";

const Todos = async () => {
  const todos = await db.todos.findMany();

  return (
    <div className="flex flex-col gap-3">
      <Link className="border p-2 w-[150px]" href='/todos/new'>Create todo</Link>
      {todos.map((todo) => (
        <Link
          href={`/todos/${String(todo.id)}`}
          key={todo.id}
          className="border my-2 p-4"
        >
          <p className="text-lg">{todo.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default Todos;
