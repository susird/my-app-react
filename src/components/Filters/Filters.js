import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export function Filters () {
  return (
    <div className="filters">
      <Link to="/all" className="filter-all">All</Link> 
      <Link to="/active" className="filter-active">Active</Link>
      <Link to="/completed" className="filter-completed">Completed</Link>
    </div>
  )
}