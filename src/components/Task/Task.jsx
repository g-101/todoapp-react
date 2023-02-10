import { useTasksDispatch } from '../../context/TasksProvider';
import styles from './Task.module.css';

const Task = props => {
  const { dispatch } = useTasksDispatch();

  const lineThrough = props.task.done ? styles['task-done'] : '';

  const handleCheckboxChange = event => {
    dispatch({
      type: 'checked',
      task: {
        ...props.task,
        done: event.target.checked,
      },
    });
  };

  return (
    <>
      <input
        type="checkbox"
        id="task"
        name="task"
        checked={props.task.done}
        onChange={handleCheckboxChange}
        className={styles.check}
      />
      <label className={lineThrough} htmlFor="task">
        {props.task.name}
      </label>
    </>
  );
};

export default Task;
