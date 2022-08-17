import Todo from './Todo'

export default function TodoList({ todoList, user }) {
  return (
    <section>
      <ul className="flex flex-col items-center space-y-4 w-screen">
        {/*if there are todos in the list...*/}
        {todoList.length >= 1
          ? todoList.map((todo, idx) => {
              //map only the user's todos
              return user.email == todo.userEmail ? <Todo key={todo._id} todo={todo} /> : ''
            })
          : 'Add a new link above!'}
      </ul>
    </section>
  )
}
