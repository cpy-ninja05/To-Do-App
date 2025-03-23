import React from 'react'

const Header = (props) => {
  const { todos } = props
  const openTasks = todos.filter((todo) =>!todo.completed).length
  return (
    <header>
      <h1 className="text-gradient">You have {openTasks} open tasks.</h1>
    </header>
  )
}

export default Header
