import React, { useContext, useState } from 'react';
import { TasksDispatchContext } from '../../context/TasksContext';

import Button from '../UI/Button';

const Task = props => {
  const dispatch = useContext(TasksDispatchContext);

  const handleCheckboxClick = event => {
    // Update reference value:

    dispatch({
      type: 'checked',
      task: {
        ...props.task,
        done: event.target.checked,
      },
    });
  };
  return (
    <>
      <li>
        <input
          type="checkbox"
          id="task"
          name="task"
          checked={props.task.done}
          onChange={handleCheckboxClick}
        />
        <label htmlFor="task">{props.task.name}</label>
      </li>

      <Button>X</Button>
    </>
  );
};

export default Task;
