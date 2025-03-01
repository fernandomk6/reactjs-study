import './App.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import todos from './database/todos.js'
import { Navbar } from './components/navbar'
import { List } from './components/list'
import { AddForm } from './components/AddForm';

function App() {

  const [items, setItems] = useState([...todos])
  const [toggleAddForm, setToggleAddForm] = useState(false)
  const [editItem, setEditItem] = useState(null)

  const addItem = (item) => {
    console.log('item', item)
    if (item.text.length === 0) {
      alert('Digite o texto da tarefa')
      return
    }

    setToggleAddForm(false)
    setEditItem(null)

    if (items.find((i) => i.id === item.id)) {
      setItems(items.map((i) => i.id === item.id ? item : i))
      return
    }

    setItems([...items, item])
  }

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div className='App'>
      <div className='todo-list'>
        <Navbar toggleAddForm={toggleAddForm} setToggleAddForm={setToggleAddForm} />
        {toggleAddForm ? (
          <AddForm
            setToggleAddForm={setToggleAddForm}
            addItem={addItem}
            editItem={editItem}
          />
        ) : (
          <List
            items={items}
            removeItem={removeItem}
            setToggleAddForm={setToggleAddForm}
            editItem={editItem}
            setEditItem={setEditItem}
          />
        )
        }
      </div>
    </div>
  )
}

export default App
