import React, { useState } from 'react';
import { useTasksDispatch } from '../../context/TasksProvider';
import styles from './NewTask.module.css';

const isNumeric = inputValue => {
  const value = inputValue.trim();
  const regex = /^[A-Za-z\s]*$/;

  return !value.match(regex);
};

const NewTask = () => {
  const { dispatch } = useTasksDispatch();

  const [taskName, setTaskName] = useState('');
  const [taskIsValid, setTaskIsValid] = useState(true);

  const handleFormSubmit = event => {
    event.preventDefault();
    if (
      taskName.trim() === '' ||
      isNumeric(taskName) ||
      taskName.trim().length < 3 ||
      taskName.trim().length > 25
    ) {
      setTaskIsValid(false);
      return;
    }
    setTaskIsValid(true);

    dispatch({
      type: 'add',
      name: taskName,
    });
    setTaskName('');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className={taskIsValid ? styles.newtask : styles.invalid}>
          <input
            type="text"
            placeholder="add task"
            minLength="3"
            maxLength="25"
            autoFocus
            value={taskName}
            onChange={event => setTaskName(event.target.value)}
          />
          <button type="submit" className={styles.button}>
            Add
          </button>
        </div>
      </form>
      {!taskIsValid && (
        <p className={taskIsValid ? '' : styles['invalid-paragraph']}>
          The task name must not be empty or a digit.
        </p>
      )}
    </>
  );
};

export default NewTask;
