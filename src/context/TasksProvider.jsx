import { v4 as uuidv4 } from 'uuid';
import React, { useReducer, useContext } from 'react';
import { TasksContext, TasksDispatchContext } from './TasksContext';

const initialTasks = [
  { id: uuidv4(), name: 'Tomar Café', done: false },
  { id: uuidv4(), name: 'Praticar Programação', done: false },
];

const initialStatusList = {
  all: true,
  active: false,
  done: false,
};

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case 'add': {
      return [
        {
          id: uuidv4(),
          name: action.name,
          done: false,
        },
        ...tasks,
      ];
    }
    case 'checked': {
      const index = tasks.findIndex(task => task.id === action.task.id);
      tasks[index] = action.task;
    }
    case 'delete': {
      return tasks.filter(task => task.id !== action.id);
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

const listReducer = (isShowList, action) => {
  switch (action.type) {
    case 'all': {
      return {
        all: true,
        active: false,
        done: false,
      };
    }
    case 'active': {
      return {
        all: false,
        active: true,
        done: false,
      };
    }
    case 'done': {
      return {
        all: false,
        active: false,
        done: true,
      };
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

const TasksProvider = props => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [isShowList, dispatchIsShowList] = useReducer(listReducer, initialStatusList);

  return (
    <TasksContext.Provider value={{ tasks, isShowList }}>
      <TasksDispatchContext.Provider value={{ dispatch, dispatchIsShowList }}>
        {props.children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export default TasksProvider;

export const useTasks = () => {
  return useContext(TasksContext);
};

export const useTasksDispatch = () => {
  return useContext(TasksDispatchContext);
};
