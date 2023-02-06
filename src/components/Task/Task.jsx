import React from 'react';
import Button from '../UI/Button';

const Task = props => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleButtonClick = () => {
    props.onTaskById(props.id);
  };

  return (
    <>
      <li key={props.id}>
        <input
          type="checkbox"
          id="task"
          name="task"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label for="task">{props.name}</label>
      </li>

      <Button onClick={handleButtonClick}>X</Button>
    </>
  );
};

export default Task;
