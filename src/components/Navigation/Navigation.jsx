import React from 'react';
import NewTask from './NewTask';

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li id="all">All</li>
          <li id="active">Active</li>
          <li id="completed">Completed</li>
        </ul>
      </nav>
      <NewTask />
    </header>
  );
};

export default Navigation;
