import React, { useState } from 'react';

export function Input (props) {
  const [value, setValue] = useState('')
  const setNewItem = props.setNewItem

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setNewItem(value)
      setValue('')
    }
  } 

  return (
    <input 
      type="text" 
      placeholder="What need to be done"
      onKeyDown={handleKeyDown}  
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  )
}