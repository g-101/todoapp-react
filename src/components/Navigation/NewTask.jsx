import React, { useState } from 'react';
import { useTasksDispatch } from '../../context/TasksProvider';
import Button from '../UI/Button';

const NewTask = () => {
  const { dispatch } = useTasksDispatch();

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
