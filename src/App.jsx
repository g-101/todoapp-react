import { useState } from 'react';
import NewTask from './components';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleCreateTask = newTask => {
    setTasks(tasks => [...tasks, { id: tasks.length.toString(), ...newTask }]);
  };

  return (
    <>
      <h1>Todo App</h1>
      <NewTask onCreateTask={handleCreateTask} />

      {tasks.length ? (
        tasks.map(task => <li key={tasks.id}>{task.name}</li>)
      ) : (
        <p>No tasks avaiable</p>
      )}
    </>
  );
};

export default App;
