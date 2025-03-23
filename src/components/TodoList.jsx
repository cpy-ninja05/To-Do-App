import { TodoCard } from "./TodoCard";

export function TodoList(props){
  const { todos, selectedTab } = props
  const filteredTodoList = selectedTab === 'All'?
    todos :
    selectedTab === 'Completed'? 
    todos.filter(todo => todo.completed) : 
    todos.filter(todo => !todo.completed)
  return(
    <>
      {filteredTodoList.map((todo,todoIndex) => {
        return(
          <TodoCard 
          key={todoIndex} 
          todoIndex={todos.findIndex(val => val.title === todo.title)}
          todo={todo} 
          {...props}/>
        )
      })}
    </>
  )
}
