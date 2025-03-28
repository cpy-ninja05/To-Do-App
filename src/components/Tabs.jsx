export function Tabs(props){
  const { todos, selectedTab, setSelectedTab } = props
  const tabs = ['All', 'Open', 'Completed']
  return(
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks = tab === 'All' ? 
        todos.length :
          tab === 'Completed' ? 
          todos.filter((todo) => todo.completed).length: 
          todos.filter((todo) => !todo.completed).length
        return (
          <button 
          onClick={
            () => setSelectedTab(tab)
          } 
          key={tabIndex} 
          className={"tab-button "
          + (tab === selectedTab ? 'tab-selected' : ' ')
          }>
            <h4>{tab}<span>({numOfTasks})</span></h4>
          </button>
        )
      })}
      <hr />
    </nav>
  )
}
