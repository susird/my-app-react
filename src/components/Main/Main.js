import React from 'react';
import { Filters } from '../Filters';
import { TodoList } from '../TodoList';

const itemsList = [
  {
    description: 'item 1',
    id: 1,
    isChecked: false,
  },
  {
    description: 'item 2',
    id: 2,
    isChecked: false,
  },
  {
    description: 'item 3',
    id: 3,
    isChecked: false,
  }
]

export function Main () {
  return(
    <main className="container">
      <Filters />
      <TodoList items={itemsList}/>
    </main>
  )
}