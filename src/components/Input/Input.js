import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { actionCreators } from '../../redux/list/actions';
import './styles.css';

export function Input () {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      dispatch(actionCreators.addTodo(value))
      setValue('')
    }
  } 

  return (
    <input 
      id="input"
      type="text" 
      placeholder="What need to be done"
      onKeyDown={handleKeyDown}  
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  )
}