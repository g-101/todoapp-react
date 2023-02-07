import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation';
import { AllPage, ActivePage, CompletedPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      { path: '/', element: <AllPage /> },
      { path: '/active', element: <ActivePage /> },
      { path: '/completed', element: <CompletedPage /> },
    ],
  },
]);

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleCreateTask = newTask => {
    setTasks(tasks => [{ id: tasks.length.toString(), ...newTask }, ...tasks]);
  };
  const deleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
