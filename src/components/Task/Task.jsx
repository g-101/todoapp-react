import React from 'react';

const Task = props => {
  return <li key={props.id}>{props.name}</li>;
};

export default Task;
