import { useState, useEffect, createContext } from 'react'
//we must import the datepicker's css modules manually
//so it plays nice with Next.
import DatePicker from 'react-date-picker/dist/entry.nostyle'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import useAuth from '../hooks/useAuth'
import Logout from '../components/Logout'
import client from '../lib/sanity/client'
import TodoList from '../components/TodoList'

import { TodoContext } from '../pages/links'

export default function Todos() {
  const { user, loading } = useAuth()
  //create a state to store new  for todos
  const [todoList, setTodoList] = useState([])
  //create a state for the text in the todo input form
  const [userInput, setUserInput] = useState('')
  //create a state for the due date chosen in the datepicker
  const [linkUrl, setlinkUrl] = useState('')
  //set an error message if either input is missing
  const [errMessage, setErrMessage] = useState('')

  const fetchTodos = async () => {
    let fetchedTodos
    //make sure the user is loaded
    if (!loading) {
      //pass userEmail as a query parameter
      fetchedTodos = await client.fetch(
        `*[_type=="todo" && userEmail==$userEmail] | order(linkUrl asc)
				{_id, text, linkUrl, userEmail}`,
        {
          userEmail: user.email
        }
      )
      //insert our response in the todoList state
      setTodoList(fetchedTodos)
    }
  }

  useEffect(
    () => {
      //now it will fetch todos on page load...
      fetchTodos()
    },
    //this dependency array tells React to run the
    //hook again whenever the user loads or changes
    [loading, user]
  )

  const handleChange = e => {
    e.preventDefault()
    setUserInput(e.target.value)
  }
  const handleUrlChange = e => {
    e.preventDefault()
    setlinkUrl(e.target.value)
  }

  //FOR THE SUBMIT BUTTON:
  const handleSubmit = async e => {
    e.preventDefault()
    //if either part of the form isn't filled out
    //set an error message and exit
    if (userInput.length == 0 || linkUrl.length == 0) {
      setErrMessage('Todo text and due date must be filled out.')
    } else {
      //otherwise send the todo to our api
      // (we'll make this next!)
      await fetch('/api/todo', {
        method: 'POST',
        body: JSON.stringify({
          text: userInput,
          linkUrl: linkUrl,
          user: user.email
        })
      })
      await fetchTodos()
      // Clear all inputs after the todo is sent to Sanity
      setUserInput('')
      setErrMessage('')
      setlinkUrl('')
    }
  }
  const handleDelete = async selectedTodo => {
    await fetch('/api/todo', {
      method: 'DELETE',
      body: selectedTodo._id
    })
    //todos will refresh after delete, too
    await fetchTodos()
  }

  return (
    <TodoContext.Provider value={{ handleDelete, fetchTodos }}>
      <div className="w-full mx-auto ">
        <Logout />
        <main className="text-center">
          <div className="my-8">
            <h1 className="text-4xl font-bold tracking-tight ">My Links</h1>
            <p className="mt-4 text-gray-700 text-md">{loading ? 'Loading...' : `Logged in as ${user.email}`}</p>
          </div>
          <form>
            <div className="flex flex-col justify-center items-center">
              <label for="todo" className="invisible">
                Your Todo
              </label>
              <input
                className="w-72 h-12 border p-4 border-blue-100"
                type="text"
                //our state
                value={userInput}
                placeholder="Link Title"
                //our function
                onChange={handleChange}
              />
              <div className="mb-8 mt-2">
                <input
                  className="w-72 h-12 border p-4 border-blue-100"
                  type="text"
                  //our state
                  value={linkUrl}
                  placeholder="Url"
                  //our function
                  onChange={handleUrlChange}
                />
              </div>
            </div>{' '}
            <button
              className="focus:outline-none focus:ring focus:border-blue-800
						px-6 py-2 rounded-xl bg-blue-500 text-blue-50 hover:bg-blue-800 
						font-semibold"
              //our function
              onClick={handleSubmit}
            >
              Add Link
            </button>
            {/*error set in handleSubmit*/}
            <p>{errMessage}</p>
          </form>

          <div className="my-12 w-full">
            <h1
              className="text-xl font-bold tracking-tight 
					my-8"
            >
              <a href="https://hack-day-link-project.vercel.app/links">View Your Links Here!</a>
            </h1>
            {loading ? 'loading...' : <TodoList user={user} todoList={todoList} />}
          </div>
        </main>
      </div>
    </TodoContext.Provider>
  )
}
