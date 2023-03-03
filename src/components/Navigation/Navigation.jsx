import { useTasksDispatch } from '../../context/TasksProvider';
import styles from './Navigation.module.css';

const Navigation = () => {
  const { dispatchIsShowList } = useTasksDispatch();

  return (
    <header className={styles.navigation}>
      <h1>#todo</h1>

      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => dispatchIsShowList({ type: 'all' })}>
              All
            </a>
          </li>
          <li>
            <a href="#" onClick={() => dispatchIsShowList({ type: 'active' })}>
              Active
            </a>
          </li>
          <li>
            <a href="#" onClick={() => dispatchIsShowList({ type: 'done' })}>
              Done
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
