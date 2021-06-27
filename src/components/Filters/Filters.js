import React from 'react';

export function Filters (props) {
  const setFilter = props.setFilter;

  const filterAllHandler = () => {
    console.log('Filtering All');
    setFilter('ALL');
  }
  const filterActiveHandler = () => {
    console.log('Filtering Active');
    setFilter('ACTIVE');
  }
  const filterCompletedHandler = () => {
    console.log('Filtering Completed');
    setFilter('COMPLETED');
  }
  return (
    <div className="filters">
      <button onClick={filterAllHandler} className="filter-all">All</button>
      <button onClick={filterActiveHandler} className="filter-active">Active</button>
      <button onClick={filterCompletedHandler} className="filter-completed">Completed</button>
    </div>
  )
}