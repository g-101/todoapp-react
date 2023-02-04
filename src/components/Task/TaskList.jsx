import React from 'react';
import Task from './Task';

const TaskList = props => {
  const taskById = id => {
    props.onDeleteTask(id);
  };
  return (
    <ul>
      {props.tasks.map(task => (
        <Task key={task.id} id={task.id} name={task.name} onTaskById={taskById} />
      ))}
    </ul>
  );
};

export default TaskList;
