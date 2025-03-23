import { TodoCard } from "./TodoCard";

export function TodoList(props){
  const { todos, selectedTab } = props;
  const filteredTodoList = selectedTab === 'All'?
    todos :
    selectedTab === 'Completed'? 
    todos.filter(todo => todo.completed) : 
    todos.filter(todo => !todo.completed)
  console.log(filteredTodoList)
  return(
    <>
      {filteredTodoList.map((todo,todoIndex) => {
        return(
          <TodoCard 
          key={todoIndex} 
          todoIndex={todos.findIndex(val => val.input === todo.input)}
          todo={todo} 
          {...props}/>
        )
      })}
    </>
  )
}
