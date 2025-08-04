import { db } from "@/app/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as actions from '@/app/actions'

const SlugPage = async (props: any) => {
  const todo = await db.todos.findFirst({
    where: {
      id: +props.params.id,
    },
  });

  if (!todo) {
    return notFound();
  }

  const deleteTodoAction = actions.deleteTodo.bind(null, todo.id)

  return (
    <>
      <div className="flex items-center justify-between">
        <div>Todo</div>
        <div className="flex items-center gap-3">
          <Link className="p-3 border" href={`/todos/${todo.id}/edit`}>Edit</Link>
          <form action={deleteTodoAction}>
            <button className="p-3 border">Delete</button>
          </form>
        </div>
      </div>
      <div className="border mt-5 p-4">
        <h4>{todo?.title}</h4>
        <pre className="bg-gray-300 p-3 rounded-md mt-4">
          <code>{todo?.code}</code>
        </pre>
      </div>
    </>
  );
};

export default SlugPage;
