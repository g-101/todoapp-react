import { useTasks } from '../../context/TasksProvider';
import NewTask from './NewTask';
import Task from './Task';
import Icon from '../UI/Icon';
import styles from './Tasks.module.css';

const Tasks = () => {
  const { tasks, isShowList } = useTasks();

  const filterActive = tasks.filter(task => !task.done);
  const filterDone = tasks.filter(task => task.done);

  return (
    <div className={styles.tasks}>
      {isShowList.all && (
        <>
          <NewTask />
          <ul>
            {tasks.map(task => (
              <li key={task.id} className={styles.item}>
                <span className={styles.group}>
                  <Task task={task} />
                </span>
              </li>
            ))}
          </ul>
        </>
      )}

      {isShowList.active && (
        <>
          <NewTask />
          <ul>
            {filterActive.length ? (
              filterActive.map(task => (
                <li key={task.id} className={styles.item}>
                  <span className={styles.group}>
                    <Task task={task} />
                  </span>
                </li>
              ))
            ) : (
              <p>No tasks available</p>
            )}
          </ul>
        </>
      )}

      {isShowList.done && (
        <ul>
          {filterDone.length ? (
            filterDone.map(task => (
              <li key={task.id} className={styles.item}>
                <span className={styles.group}>
                  <Task task={task} />
                </span>
                <span className={styles.icon}>
                  <Icon id={task.id} />
                </span>
              </li>
            ))
          ) : (
            <p>No tasks available</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
