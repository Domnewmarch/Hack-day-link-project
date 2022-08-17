// src/components/Todo.js

import { useState, useContext } from 'react'
// import a simple date formatting library
import dayjs from 'dayjs'
// import a trashcan icon for our delete button
import { RiDeleteBin5Line } from 'react-icons/ri'
import { TodoContext } from '../pages/links'

export default function Todo({ todo }) {
  //with useContext we do not need to pass extra props to <TodoList/>
  const { handleDelete, fetchTodos } = useContext(TodoContext)

  return (
    <li className="bg-black hover:bg-dark duration-default p-4 rounded-xl w-10/12 md:w-4/12 flex text-white" key={todo._id}>
      {/*if todo is done, cross it out and turn it gray*/}
      <p className="text-center text-white w-fit mx-auto dark:text-black">{todo.text}</p>
      <button
        className="mx-2 tex-white"
        onClick={e => {
          e.preventDefault()
          handleDelete(todo)
        }}
      >
        <RiDeleteBin5Line />
      </button>
    </li>
  )
}
