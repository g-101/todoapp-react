import React from 'react';
import NewTask from './NewTask';

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button>All</button>
          </li>
          <li>
            <button>Active</button>
          </li>
          <li>
            <button>Completed</button>
          </li>
        </ul>
      </nav>
      <NewTask />
    </header>
  );
};

export default Navigation;
