import Form from './Form';
import './App.css';
import Items from './Items';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

function App() {
  const [items, setItems] = useState(getLocalStorage());

  function addItem(itemName) {
    const newItem = {
      id: nanoid(),
      completed: false,
      name: itemName,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added');
  }

  function removeItem(itemId) {
    const newItems = items.filter(item => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item removed');
  }

  function editItem(itemId) {
    const newItems = items.map(item => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setItems(newItems);
    setLocalStorage(newItems);
  }

  function setLocalStorage(items) {
    localStorage.setItem('list', JSON.stringify(items));
  }

  function getLocalStorage() {
    let list = (localStorage.getItem('list') && JSON.parse(localStorage.getItem('list'))) || [];
    return list;
  }

  return (
    <div className="main-div">
      <h1>Grocery List</h1>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </div>
  );
}

export default App;
