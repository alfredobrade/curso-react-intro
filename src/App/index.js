import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
];
localStorage.setItem('TODOS_v1', JSON.stringify(defaultTodos));


function App() {

  const { item, saveItem, loading, error } = useLocalStorage('TODOS_v1', []);

  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);

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
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}

      loading={loading}
      error={error}

    />
  )
}

export default App;
