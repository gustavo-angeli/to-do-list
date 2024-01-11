import './App.css';
import Table from './components/Table/Table';
import CreateRowItem from './components/AddItemTable/AddItemTable'
import { useState } from "react"

export default function App() {
  const [items, setItems] = useState([])

  function handleClick(task, assigned) {
    setItems(prevList => {
      return [...prevList, { task: task, assigned: assigned }]
    })
  }
  function deleteTask(itemToRemove) {
    setItems(prevItem => {
      return prevItem.filter((item) => item != itemToRemove)
    })
  }

  return <>
    <CreateRowItem onSelect={handleClick}/>
    <Table items={items} onSelect={deleteTask}/>
  </>
}