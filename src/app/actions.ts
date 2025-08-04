"use server";

import { redirect } from "next/navigation";
import { db } from "./db";

export async function editTodo(id: number, code: string) {
  await db.todos.update({
    where: { id },
    data: { code },
  });

  redirect(`/todos/${id}`);
}

export async function deleteTodo(id: number) {
  await db.todos.delete({
    where: { id },
  });

  redirect("/todos");
}
