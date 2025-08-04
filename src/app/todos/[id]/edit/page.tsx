import EditFormEditor from '@/app/components/edit-form-editor'
import { db } from '@/app/db'
import React from 'react'

const EditFormPage = async (props: any) => {

  const todo = await db.todos.findFirst({
    where: {
      id: +props.params.id
    }
  })

  return (
    <div>
      <EditFormEditor todo={todo} />
    </div>
  )
}

export default EditFormPage