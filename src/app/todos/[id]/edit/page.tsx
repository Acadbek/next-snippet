import EditTodoEditor from "@/app/components/editTodoEditor"
import { db } from "@/app/db"
import { notFound } from "next/navigation"

export default async function EditTodoPage(props: any) {

  const todo = await db.todos.findFirst({
    where: {
      id: +props.params.id
    }
  })

  if (!todo) {
    return notFound()
  }

  return (
    <div>
      <EditTodoEditor todo={todo} />
    </div>
  )
}