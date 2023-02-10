import Navigation from './components/Navigation';
import TasksProvider from './context/TasksProvider';
import TaskList from './components/Task/TaskList';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Navigation />,
//     children: [
//       { path: '/', element: <AllPage /> },
//       { path: '/active', element: <ActivePage /> },
//       { path: '/completed', element: <CompletedPage /> },
//     ],
//   },
// ]);

const App = () => {
  return (
    <TasksProvider>
      <Navigation />
      <TaskList />
      {/* <RouterProvider router={router} /> */}
    </TasksProvider>
  );
};

export default App;
