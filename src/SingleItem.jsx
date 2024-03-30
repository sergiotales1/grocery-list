import React from 'react';

function SingleItem({ item, removeItem, editItem }) {
  return (
    <div className="single-item">
      <input
        name={item.name}
        id={item.name}
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <label
        htmlFor={item.name}
        style={{ textTransform: 'capitalize', textDecoration: item.completed && 'line-through  ' }}
      >
        <p>{item.name}</p>
      </label>
      <button type="button" onClick={() => removeItem(item.id)}>
        delete
      </button>
    </div>
  );
}

export default SingleItem;
