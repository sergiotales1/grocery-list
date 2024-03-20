import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Form({ addItem }) {
  const [newItemName, setNewItemName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItemName) {
      toast.error('insert one valid value');
      return;
    }
    addItem(newItemName);
    setNewItemName('');
  }

  return (
    <div className="form-container">
      <h1>Grocery List</h1>
      <form onSubmit={handleSubmit} className="form-class">
        <input type="text" value={newItemName} onChange={e => setNewItemName(e.target.value)} />
        <button type="submit">Add item</button>
      </form>
    </div>
  );
}

export default Form;
