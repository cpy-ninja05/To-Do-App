import Header from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoList } from "./components/TodoList"
import { TodoInput } from "./components/TodoInput"
import { useState, useEffect } from "react"
function App() {
  const [todos,setTodos] = useState([
    { title: "Task 1", completed: false }
  ])
  const [selectedTab,setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos , { title : newTodo , completed : false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index){
    // update / edit / modify
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['completed'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index){
    let newTodoList = todos.filter((val,valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos){
    localStorage.setItem('todo-app', JSON.stringify({todos:currTodos}))
  }

  useEffect(() => {
    if(!localStorage || !localStorage.getItem('todo-app')) {return}
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
   
  },[])

  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <TodoList todos={todos} selectedTab={selectedTab} handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo}/>
      <TodoInput handleAddTodo={handleAddTodo}/>

    </>
  )
}

export default App
