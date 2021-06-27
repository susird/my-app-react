import React, { useState } from 'react';

export function TodoList(props) {
  const itemsList = props.items;
  const [items, setItems] = useState(itemsList);
  const checkHandler = (itemId) => {
    const newItemsList = items.map(element => {
      if (element.id === itemId) {
        element.isChecked = !element.isChecked
      }
      return element
    });
    setItems(newItemsList)
  }
  return ( 
    <ul className="todos-container">
      {items.map(item => {
        return (
          <li key={item.description} className="todo-item">
            <input
              onChange={(event) => checkHandler(item.id)}
              type="checkbox"
              id={`item-${item.id}`}
              checked={items.isChecked}
            />
            <label htmlFor={`item-${item.id}`}>{item.description}</label>
          </li>
        )
      })}
    </ul>
  )
}