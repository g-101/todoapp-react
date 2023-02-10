import React from 'react';
import { useTasksDispatch } from '../../context/TasksProvider';

const Icon = props => {
  const { dispatch } = useTasksDispatch();

  const handleClick = () => {
    dispatch({
      type: 'delete',
      id: props.id,
    });
  };

  return (
    <>
      <img
        onClick={handleClick}
        src="https://img.icons8.com/material-outlined/24/000000/delete-trash.png"
      />
    </>
  );
};

export default Icon;
