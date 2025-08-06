'use client'

import { db } from "@/app/db";
import { redirect } from "next/navigation";
import React, { useActionState } from "react";
// import { useActionState } from "react-dom";
import * as actions from '@/app/actions'

const CreateTodoPage = () => {
  const [formState, action] = useActionState(actions.createNewTodo, {
    message: ''
  })

  return (
    <form action={action} className="flex flex-col gap-4 mt-30">
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
      {formState.message}
    </form>
  );
};

export default CreateTodoPage;
