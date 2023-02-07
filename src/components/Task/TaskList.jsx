import React, { useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';
import Task from './Task';

const TaskList = () => {
  const tasks = useContext(TasksContext);
  console.log(tasks);

  return (
    <ul>
      {tasks.map(task => (
        <Task key={task.id} id={task.id} name={task.name} />
      ))}
    </ul>
  );
};

export default TaskList;
