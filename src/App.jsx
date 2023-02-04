import { useState } from 'react';
import NewTask from './components';
import TaskList from './components/Task';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleCreateTask = newTask => {
    setTasks(tasks => [{ id: tasks.length.toString(), ...newTask }, ...tasks]);
  };
  const deleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  console.log('app');

  return (
    <>
      <h1>Todo App</h1>
      <NewTask onCreateTask={handleCreateTask} />
      {tasks.length ? (
        <TaskList onDeleteTask={deleteTask} tasks={tasks} />
      ) : (
        <p>No tasks avaiable</p>
      )}
    </>
  );
};

export default App;
