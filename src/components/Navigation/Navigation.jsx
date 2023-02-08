import { useTasksDispatch } from '../../context/TasksProvider';
import NewTask from './NewTask';

const Navigation = () => {
  const { dispatchIsShowList } = useTasksDispatch();
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={() => dispatchIsShowList({ type: 'all' })}>All</button>
          </li>
          <li>
            <button onClick={() => dispatchIsShowList({ type: 'active' })}>Active</button>
          </li>
          <li>
            <button onClick={() => dispatchIsShowList({ type: 'done' })}>Done</button>
          </li>
        </ul>
      </nav>
      <NewTask />
    </header>
  );
};

export default Navigation;
