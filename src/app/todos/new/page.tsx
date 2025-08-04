import { db } from "@/app/db";
import { redirect } from "next/navigation";
import React from "react";

const CreateTodoPage = () => {
  const createNewTodo = async (formData: FormData) => {
    "use server";

    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    await db.todos.create({
      data: {
        title,
        code,
      },
    });

    redirect("/");
  };

  return (
    <form action={createNewTodo} className="flex flex-col gap-4 mt-30">
      <input
        className="border p-3"
        name="title"
        type="text"
        placeholder="Title"
      />
      <textarea
        className="border p-3"
        name="code"
        id=""
        placeholder="Code"
      ></textarea>
      <button className="border bg-blue-500 text-white p-3" type="submit">
        Create
      </button>
    </form>
  );
};

export default CreateTodoPage;
