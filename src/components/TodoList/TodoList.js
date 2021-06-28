import React from 'react';

export function TodoList(props) {
  const itemsList = props.itemsList;
  const setItemsList = props.setItemsList;

  const checkHandler = (itemId) => {
    const newItemsList = itemsList.map(element => {
      if (element.id === itemId) {
        element.isChecked = !element.isChecked
      }
      return element
    });
    setItemsList(newItemsList)
  }

  return ( 
    <ul className="todos-container">
      {itemsList.map(item => {
        return (
          <li key={item.id} className="todo-item">
            <input
              onChange={(event) => checkHandler(item.id)}
              type="checkbox"
              id={`item-${item.id}`}
              checked={item.isChecked}
            />
            <label htmlFor={`item-${item.id}`} className={item.isChecked ? 'text-completed' : 'none'}>
            {item.description}
            </label>
          </li>
        )
      })}
    </ul>
  )
}