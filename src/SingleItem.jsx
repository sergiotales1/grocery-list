import React from 'react';

function SingleItem({ item, removeItem, editItem }) {
  return (
    <div className="single-item">
      <input
        name={item}
        id={item}
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <label
        htmlFor={item}
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
