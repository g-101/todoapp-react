import React, { useState } from 'react';
import { useTasksDispatch } from '../../context/TasksProvider';
import styles from './NewTask.module.css';

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
    <form onSubmit={handleFormSubmit} className={styles.newtask}>
      <input
        type="text"
        value={taskName}
        onChange={event => setTaskName(event.target.value)}
        minLength="4"
        placeholder="add task"
        autoFocus
        required
      />
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
};

export default NewTask;
