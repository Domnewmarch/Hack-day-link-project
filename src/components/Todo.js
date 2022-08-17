import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
// import a trashcan icon for our delete button
import { RiDeleteBin5Line } from 'react-icons/ri'
import { TodoContext } from '../pages/links'

export default function Todo({ todo }) {
  //with useContext we do not need to pass extra props to <TodoList/>
  const { handleDelete, fetchTodos } = useContext(TodoContext)
  const router = useRouter()
  const { id } = router.query
  return (
    <a className="bg-black p-4 rounded-xl w-10/12 md:w-4/12  text-white flex" href={todo.linkUrl} target="_blank" rel="noopener noreferrer">
      <li className="flex w-full text-center m-auto items-center justify-center" key={todo._id}>
        {todo.text}
      </li>
      {router?.pathname !== '/links' && (
        <button
          className="mx-2 tex-white place-items-end -ml-5"
          onClick={e => {
            e.preventDefault()
            handleDelete(todo)
          }}
        >
          <RiDeleteBin5Line />
        </button>
      )}
    </a>
  )
}
