import React from "react";
import { db } from "../db";
import Link from "next/link";

const Todos = async () => {
  const todos = await db.todos.findMany();

  return (
    <div className="flex flex-col gap-3">
      {todos.map((todo) => (
        <Link
          href={`/todos/${String(todo.id)}`}
          key={todo.id}
          className="border my-2 p-4"
        >
          <p className="text-lg">{todo.title}</p>
        </Link>
      ))}

      <Link href='/todos/new'>Create new todo</Link>
    </div>
  );
};

export default Todos;
