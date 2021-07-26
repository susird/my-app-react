import React, { useState } from 'react';
import { Filters } from '../Filters';
import { TodoList } from '../TodoList';
import { Input } from '../Input';
import {
  Switch,
  Route,
} from "react-router-dom";

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
    itemsList: initialItemsList
  });

  const setItemList = (items) => setState({ ...state, itemsList: items});
  const setNewItem = (item) => setState({ 
    ...state, 
    itemsList: [...state.itemsList, {
      description: item,
      id: state.itemsList.length + 1,
      isChecked: false,
    }]
  });  

  return (
    <main className="container">
      <Filters />
      <Input setNewItem={setNewItem} />
      <Switch>
        <Route exact path="/">
          <TodoList itemsList={state.itemsList} setItemsList={setItemList} />
        </Route>
        <Route path="/:id" children={
          <TodoList itemsList={state.itemsList} setItemsList={setItemList} />
        }/>
      </Switch>
    </main>
  )
}