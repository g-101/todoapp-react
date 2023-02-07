import React from 'react';
import Button from '../UI/Button';

const Task = props => {
  return (
    <>
      <li key={props.id}>
        <input type="checkbox" id="task" name="task" />
        <label htmlFor="task">{props.name}</label>
      </li>

      <Button>X</Button>
    </>
  );
};

export default Task;
