import React, { useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';
import Task from './Task';

const TaskList = () => {
  const tasks = useContext(TasksContext);
  console.log(tasks);

  return (
    <>
      {!tasks.length && <p>Não há tarefas disponiveis</p>}
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
