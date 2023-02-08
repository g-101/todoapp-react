import { useTasksDispatch } from '../../context/TasksProvider';
import Button from '../UI/Button';

const Task = props => {
  const { dispatch } = useTasksDispatch();

  const handleCheckboxClick = event => {
    dispatch({
      type: 'checked',
      task: {
        ...props.task,
        done: event.target.checked,
      },
    });
  };
  const handleButtonClick = () => {
    dispatch({
      type: 'delete',
      id: props.task.id,
    });
  };

  return (
    <>
      <li>
        <input
          type="checkbox"
          id="task"
          name="task"
          checked={props.task.done}
          onChange={handleCheckboxClick}
        />
        <label htmlFor="task">{props.task.name}</label>
      </li>

      <Button onClick={handleButtonClick}>X</Button>
    </>
  );
};

export default Task;
