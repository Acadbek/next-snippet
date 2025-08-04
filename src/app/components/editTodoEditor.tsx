'use client'

import { Editor } from '@monaco-editor/react'
import React from 'react'
import { editTodo } from '../actions'

interface EditTodoEditorProps {
  todo: {
    id: number;
    title: string;
    code: string
  }
}

const EditTodoEditor = ({ todo }: EditTodoEditorProps) => {
  const [code, setCode] = React.useState<string>()

  function handeEditTodo(value: string = '') {
    setCode(value)
  }

  return (
    <div>
      <Editor
        height='40vh'
        defaultLanguage='javascript'
        defaultValue={todo.code}
        theme='vs-dark'
        onChange={handeEditTodo}
      />

      <form action={() => editTodo(todo.id, code!)}>
        <button className='p-3 border'>Save</button>
      </form>
    </div>
  )
}

export default EditTodoEditor