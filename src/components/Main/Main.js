import React, { useState } from 'react';
import { Filters } from '../Filters';
import { TodoList } from '../TodoList';

const initialItemsList = [
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

export function Main() {
  const [state, setState] = useState({
    activeFilter: 'ALL',
    itemsList: initialItemsList
  });

  const setItemList = (items) => setState({ ...state, itemsList: items});
  const setFilter = (filter) => setState({ ...state, activeFilter: filter });

  let itemsList = [];

  if (state.activeFilter === 'ACTIVE') {
    itemsList = state.itemsList.filter(item => !item.isChecked);
  }
  if (state.activeFilter === 'COMPLETED') {
    itemsList = state.itemsList.filter(item => item.isChecked);
  }
  if (state.activeFilter === 'ALL') {
    itemsList = state.itemsList;
  }

  return (
    <main className="container">
      <Filters setFilter={setFilter} />
      <TodoList itemsList={itemsList} setItemsList={setItemList} />
    </main>
  )
}