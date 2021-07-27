import React from 'react';
import { Filters } from '../Filters';
import { TodoList } from '../TodoList';
import { Input } from '../Input';
import './styles.css';
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";

export function Main() {
  return (
    <main className="container">
      <Switch>
        <Route exact path="/">
          <Link className="home-link" to="/all">Enter to the ToDo List</Link>
        </Route>
        <Route path="/:id" children={
          <> <Filters />
            <Input />
            <TodoList />
          </>
        } />
      </Switch>
    </main>
  )
}