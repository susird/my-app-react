import { div } from 'prelude-ls';
import React from 'react';

export function Filters () {
  const filterAllHandler = () => {
    console.log('Filtering All');
  }
  const filterActiveHandler = () => {
    console.log('Filtering Active');
  }
  const filterCompletedHandler = () => {
    console.log('Filtering Completed');
  }
  return (
    <div className="filters">
      <button onClick={filterAllHandler} className="filter-all">All</button>
      <button onClick={filterActiveHandler} className="filter-active">Active</button>
      <button onClick={filterCompletedHandler} className="filter-completed">Completed</button>
    </div>
  )
}