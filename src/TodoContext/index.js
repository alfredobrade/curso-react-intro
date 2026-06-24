import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const { item, saveItem, loading, error } = useLocalStorage('TODOS_v1', []);

    const [searchValue, setSearchValue] = React.useState('');
const [ openModal, setOpenModal ] = React.useState(false);

    const completedTodos = item.filter(todo => !!todo.completed).length;
    const totalTodos = item.length;

    const searchedTodos = item.filter(todo => todo.text.toLowerCase()
        .includes(
            searchValue.toLowerCase()
        )
    ); // delegate lambda version like C#
    // const searchedTodos = todos.filter( (todo) => { return todo.text.includes(searchValue) } ); //arrow function version




    const completeTodo = (text) => {
        const newTodos = [...item];
        const index = newTodos.findIndex((todo) => todo.text === text);
        // newTodos.find(todo => todo.text === text).completed = true;
        newTodos[index].completed = true;
        saveItem(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...item];
        const index = newTodos.findIndex((todo) => todo.text === text);
        // newTodos.find(todo => todo.text === text).completed = true;
        newTodos.splice(index, 1);
        saveItem(newTodos);
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
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider >
    );
}

export { TodoContext, TodoProvider };