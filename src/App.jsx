import Navigation from './components/Navigation';
import TasksProvider from './context/TasksProvider';
import TaskList from './components/Task/TaskList';

const App = () => {
  return (
    <TasksProvider>
      <Navigation />
      <TaskList />
    </TasksProvider>
  );
};

export default App;
