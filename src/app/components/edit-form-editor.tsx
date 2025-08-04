'use client'

import { Editor } from '@monaco-editor/react'
import React, { startTransition, useTransition } from 'react'
import * as actions from '@/app/actions/index'

const EditFormEditor = ({ todo }: any) => {
  const [code, setCode] = React.useState(todo.code)

  function handeEditEditor(value: string = '') {
    setCode(value)
  }

  // const editTodoAction = actions.editTodo.bind(null, todo.id, code)

  const editTodoAction = () => {
    startTransition(async () => {
      await actions.editTodo(todo.id, code)
    })
  }

  return (
    <div>
      {code}
      <Editor
        height='40vh'
        defaultLanguage='javascript'
        defaultValue={code}
        theme='vs-dark'
        onChange={handeEditEditor}
      />

      {/* <form action={editTodoAction}> */}
      <button onClick={editTodoAction}>Save</button>
      {/* </form> */}
    </div>
  )
}

export default EditFormEditor