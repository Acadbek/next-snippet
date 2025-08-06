'use client';
import React, { useActionState } from "react";
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
      >

      </textarea>
      <button className="border bg-blue-500 text-white p-3" type="submit">
        Create
      </button>


      {formState.message ? <div className="bg-red-400 border border-red-600 text-white px-3 py-2 rounded-md">
        {formState.message}
      </div> : null}

    </form>
  );
};

export default CreateTodoPage;
