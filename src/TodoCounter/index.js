import './TodoCounter.css';
import { Beer } from '../Icons/Beer'

function TodoCounter({ total, completed }) {
  if (total === completed) {
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
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
