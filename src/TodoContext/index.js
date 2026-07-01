import React from 'react';
// import { useLocalStorage } from './useLocalStorage';
import { useApi } from './useApi';

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    // antes
    // const { item, saveItem, loading, error } = useLocalStorage('TODOS_v1', []);

    // ahora
    const { items, loading, error, addItem, completeItem, deleteItem } = useApi();


    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = items.filter(todo => todo.completed).length;
    const totalTodos = items.length;

    const searchedTodos = items.filter(todo =>
        todo.task//.toLowerCase().includes(searchValue.toLowerCase())
    );

    const addTodo = (text) => {
        addItem(text);
    };

    const completeTodo = (id) => {
        completeItem(id);
    };

    const deleteTodo = (id) => {
        deleteItem(id);
    };


    return (

        < TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider >
    );
}

export { TodoContext, TodoProvider };