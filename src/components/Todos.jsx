import React from "react"
import Todoitem from "./Todoitem"

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>
      })}
    </div>
  )
}

export default Todos
