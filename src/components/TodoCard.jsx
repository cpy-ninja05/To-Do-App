export function TodoCard(props){
  const {todo, todoIndex, handleCompleteTodo, handleDeleteTodo} = props;
  return(
    <div className="card todo-item">
      {todo.title}
      <div className="todo-buttons">
        <button disabled={todo.completed} onClick={
          () => handleCompleteTodo(todoIndex)
        }>
          <h6>Done</h6>
        </button>
        <button onClick={
          () => handleDeleteTodo(todoIndex)
        }>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  )
}
