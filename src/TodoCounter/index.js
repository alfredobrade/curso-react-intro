import './TodoCounter.css';
import { Beer } from '../Icons/Beer'
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  if (totalTodos === completedTodos) {
    return (

      <>
        <h1 className="TodoCounter">
          Has completado todas las tareas!
        </h1>
        <Beer />
      </>
    );
  }
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
