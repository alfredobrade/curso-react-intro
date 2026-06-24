import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button 
    className="CreateTodoButton"
    onClick={() => setOpenModal(true)}
    >+</button>
  );
}

export { CreateTodoButton };
