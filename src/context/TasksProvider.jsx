import React, { useReducer } from 'react';
import { TasksContext, TasksDispatchContext } from './TasksContext';

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case 'add': {
      return [
        {
          id: action.id.toString(),
          name: action.name,
          done: false,
        },
        ...tasks,
      ];
    }

    case 'delete': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

const initialTasks = [
  { id: 't1', name: 'Tomar Café', done: true },
  { id: 't2', name: 'Praticar Programação', done: false },
];

export const useTasks = () => {
  return useContext(TasksContext);
};

export const useTasksDispatch = () => {
  return useContext(TasksDispatchContext);
};

const TasksProvider = props => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {props.children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export default TasksProvider;
