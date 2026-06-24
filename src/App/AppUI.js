import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

import { TodoContext } from '../TodoContext';

function AppUI() {

  return (
    <>


      <TodoCounter
      //   completed={completedTodos} 
      //   total={totalTodos} 
      />
      <TodoSearch
      // searchValue={searchValue}
      // setSearchValue={setSearchValue}
      />
      <TodoContext.Consumer>
        {
          ({ error, loading, searchedTodos, completeTodo, deleteTodo }) => (
            <TodoList>
              {loading && <TodoLoading />}
              {error && <TodoError />}
              {(!loading && searchedTodos.length === 0) && <p>Crea tu primer ToDo!!</p>}

              {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          )
        }
      </TodoContext.Consumer>


      <TodoContext.Consumer>
        {
          ({ openModal, setOpenModal }) => (
            <>
              <CreateTodoButton setOpenModal={setOpenModal} />
              {openModal && (
                <Modal >
                  <p>CREAR TODO</p>
                </Modal >
              )
              }
            </>
          )
        }
      </TodoContext.Consumer>
    </>
  );

}

export { AppUI }
