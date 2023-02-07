import React, { useState, useContext } from 'react';
import { TasksDispatchContext } from '../../context/TasksContext';
import Button from '../UI/Button';

const NewTask = () => {
  const dispatch = useContext(TasksDispatchContext);

  const [taskName, setTaskName] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch({
      type: 'add',
      name: taskName,
    });
    setTaskName('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={event => setTaskName(event.target.value)}
        minLength="4"
        required
      />
      <Button>Add</Button>
    </form>
  );
};

export default NewTask;
