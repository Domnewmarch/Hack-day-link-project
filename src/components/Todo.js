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
    <a className="bg-black hover:bg-dark duration-default p-4 rounded-xl w-10/12 md:w-4/12 flex text-white text-center justify-center" href={todo.linkUrl} target="_blank" rel="noopener noreferrer">
      <li className="" key={todo._id}>
        {todo.text}
        {router?.pathname !== '/links' && (
          <button
            className="mx-2 tex-white"
            onClick={e => {
              e.preventDefault()
              handleDelete(todo)
            }}
          >
            <RiDeleteBin5Line />
          </button>
        )}
      </li>
    </a>
  )
}
