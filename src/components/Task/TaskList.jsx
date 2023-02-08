import { useTasks } from '../../context/TasksProvider';
import Task from './Task';

const TaskList = () => {
  const { tasks, isShowList } = useTasks();

  const filterActive = tasks.filter(task => !task.done);
  const filterDone = tasks.filter(task => task.done);

  return (
    <>
      {/* {!tasks.length && <p>Não há tarefas disponiveis</p>} */}
      {isShowList.active && filterActive.map(task => <Task key={task.id} task={task} />)}
      {isShowList.done && filterDone.map(task => <Task key={task.id} task={task} />)}
      {isShowList.all && (
        <ul>
          {tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      )}
    </>
  );
};

export default TaskList;
