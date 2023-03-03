import Navigation from './components/Navigation';
import TasksProvider from './context/TasksProvider';
import Tasks from './components/Task/Tasks';

const App = () => {
  return (
    <TasksProvider>
      <main className="container">
        <Navigation />
        <Tasks />
      </main>
    </TasksProvider>
  );
};

export default App;
