export function Tabs(props){
  const { todos, selectedTab, setSelectedTab } = props
  const tabs = ['All', 'Open', 'Completed']
  return(
    <nav>
      {tabs.map((tab, tabIndex) => {
        const numOfTasks = tab === 'All' ? todos.length :
          tab === 'Completed' ? todos.filter((todo) => todo.completed).length: 
          todos.filter((todo) => !todo.completed).length
        return (
          <button 
          onClick={
            () => setSelectedTab(tab)
          } 
          key={tabIndex} 
          className={"tab-button "
          + (tab === selectedTab ? 'tab-selected' : '')
          }>
            {tab}({numOfTasks})
          </button>
        )
      })}
    </nav>
  )
}
