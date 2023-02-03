import React from 'react';
import Button from '../UI/Button';

const Task = props => {
  return (
    <>
      <li key={props.id}>{props.name}</li>
      <Button>X</Button>
    </>
  );
};

export default Task;
