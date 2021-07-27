import React from 'react';
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { actionCreators } from '../../redux/list/actions';
import { useDispatch } from "react-redux";
import './styles.css';

export function TodoList() {
  let { id } = useParams();
  let itemsList = [];
  const todos = useSelector((state) => state.list.itemList);
  const dispatch = useDispatch();

  const checkHandler = (itemId) => {
    dispatch(actionCreators.setCheck(itemId))
  }
  
  if (id === 'active') {
    itemsList = todos.filter(item => !item.isChecked);
  }
  if (id === 'completed') {
    itemsList = todos.filter(item => item.isChecked);
  }
  if (id === 'all') {
    itemsList = todos;
  }

  return ( 
    <ul className="todos-container">
      {itemsList.map(item => {
        return (
          <li key={item.id} className="todo-item">
            <input
              onChange={(event) => checkHandler(item.id)}
              className="checkbox"
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