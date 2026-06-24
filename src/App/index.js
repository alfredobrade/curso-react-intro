import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
// ];
// localStorage.setItem('TODOS_v1', JSON.stringify(defaultTodos));


function App() {


  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;
