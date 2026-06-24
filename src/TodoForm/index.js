import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        
        addTodo(document.querySelector('.TodoForm-textarea').value);
        document.querySelector('.TodoForm-textarea').value = '';
        setOpenModal(false);
    }
    return (
        <form className="TodoForm" onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>

         
            <textarea
                placeholder="Cortar cebolla"
                className="TodoForm-textarea"
            >
            </textarea>

            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={() => setOpenModal(false)}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };