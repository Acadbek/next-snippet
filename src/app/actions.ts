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

    if (typeof title !== "string" || title.trim().length <= 3) {
      return {
        message: "Title notogri kiritildi",
      };
    }

    if (typeof code !== "string" || code.trim().length <= 10) {
      return {
        message: "Code notogri kiritildi",
      };
    }

    await db.todos.create({
      data: {
        title,
        code,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: "Serverda xatolik",
      };
    }
  }

  redirect("/todos");
};
