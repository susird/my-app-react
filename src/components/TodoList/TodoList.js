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
          <li key={item.description} className="todo-item">
            <input
              onChange={(event) => checkHandler(item.id)}
              type="checkbox"
              id={`item-${item.id}`}
              checked={item.isChecked}
            />
            <label htmlFor={`item-${item.id}`} style={{'text-decoration': item.isChecked ? 'line-through' : 'none'}}>
            {item.description}
            </label>
          </li>
        )
      })}
    </ul>
  )
}