import {useState} from 'react'

export function TodoInput(props){
  const { handleAddTodo } = props
  const [inputValue, setInputValue] = useState('')
  return(
    <div className="input-container">
      <input type="text" 
      value={inputValue} 
      onChange={(e) => setInputValue(e.target.value)} 
      placeholder="Add a new task" />
      <button onClick={() => {
        if(!inputValue){
          return
        }
        handleAddTodo(inputValue)
        setInputValue('')
        }}>
        <i class="fa-solid fa-plus"></i>
      </button>

    </div>
  )
}