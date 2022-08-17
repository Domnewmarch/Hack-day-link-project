import { useState, useEffect, createContext } from 'react'
import Avatar from '../components/avatar'
import Bio from '../components/bio'
import DesktopImage from '../components/desktopImage'
import Footer from '../components/footer'
import TodoList from '../components/TodoList'
import useAuth from '../hooks/useAuth'
import client from '../lib/sanity/client'

export const TodoContext = createContext()

export default function Links() {
  const { user, loading } = useAuth()
  //create a state to store new  for todos
  const [todoList, setTodoList] = useState([])

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
  console.log(setTodoList)

  useEffect(
    () => {
      //now it will fetch todos on page load...
      fetchTodos()
    },
    //this dependency array tells React to run the
    //hook again whenever the user loads or changes
    [loading, user]
  )
  return (
    <TodoContext.Provider value={{ fetchTodos }}>
      <div className="relative flex bg-white h-screen">
        <div className="mt-12 mb-8 w-screen 2xl:w-6/12">
          <div className="mx-auto flex max-w-screen-sm flex-col items-center px-4">
            <Avatar />
            <Bio />
            <div className="my-12">{loading ? 'loading...' : <TodoList user={user} todoList={todoList} />}</div>
            <Footer />
          </div>
        </div>
        <DesktopImage />
      </div>
    </TodoContext.Provider>
  )
}
