import React, { useState } from 'react';

const NewTask = props => {
  const [taskName, setTaskName] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();
    props.onCreateTask({
      name: taskName,
    });
    setTaskName('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={event => setTaskName(event.target.value)}
        minLength="4"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTask;
