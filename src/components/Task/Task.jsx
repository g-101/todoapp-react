import React from 'react';
import Button from '../UI/Button';

const Task = props => {
  const handleButtonClick = () => {
    props.onTaskById(props.id);
  };

  return (
    <>
      <li key={props.id}>{props.name}</li>
      <Button onClick={handleButtonClick}>X</Button>
    </>
  );
};

export default Task;
