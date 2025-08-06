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

export const createNewTodo = async (
  formState: { message: string },
  formData: FormData
) => {
  try {
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    if (title.trim().length < 3 || typeof title !== "string") {
      return {
        message: "Title notogri formatda kiritildi!",
      };
    }

    if (code.trim().length < 1 || typeof code !== "string") {
      return {
        message: "Code notogri formatda kiritildi!",
      };
    }

    await db.todos.create({
      data: {
        title,
        code,
      },
    });

    redirect("/");

    // throw new Error("failed to save to db");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: "Something went wrong",
      };
    }
  }
};
