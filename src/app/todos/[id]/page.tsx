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
      <div>Todo</div>
      <Link href={`/todos/${todo.id}/edit`}>Edit</Link>
      <form action={deleteTodoAction}>
        <button>Delete</button>
      </form>
      <div className="border mt-5 p-4">
        <h4>{todo?.title}</h4>
        <code>{todo?.code}</code>
      </div>
    </>
  );
};

export default SlugPage;
