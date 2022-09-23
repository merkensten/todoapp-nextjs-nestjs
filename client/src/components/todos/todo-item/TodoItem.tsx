import React from 'react';
import styles from './TodoItem.module.scss';
import axios from 'axios';

// components
import UpdateTodo from '../update-todo/UpdateTodo';

type TodoType = {
  _id: string;
  text: string;
  user: string;
  completed: boolean;
  token: string;
  rerenderTodos: () => void;
};
function TodoItem({
  text,
  _id,
  completed,
  user,
  token,
  rerenderTodos,
}: TodoType) {
  const [showUpdateTodo, setShowUpdateTodo] = React.useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  function removeTodoFromServer() {
    axios({
      method: 'delete',
      url: `${API_URL}/todo/${_id}?userId=${user}`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(function (response) {
        console.log(response);
        rerenderTodos();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function completeTodo() {
    axios({
      method: 'put',
      url: `${API_URL}/todo/${_id}?user=${user}`,
      data: {
        text: text,
        user: user,
        completed: true,
      },
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(function (response) {
        rerenderTodos();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function updateTodo() {
    setShowUpdateTodo(!showUpdateTodo);
  }

  function resetTodoToActive() {
    axios({
      method: 'put',
      url: `${API_URL}/todo/${_id}?user=${user}`,
      data: {
        text: text,
        user: user,
        completed: false,
      },
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(function (response) {
        rerenderTodos();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <div className={styles.wrapper}>
        {showUpdateTodo && (
          <>
            <UpdateTodo
              _id={_id}
              user={user}
              completed={completed}
              token={token}
              rerenderTodos={rerenderTodos}
              setShowUpdateTodo={setShowUpdateTodo}
            />
          </>
        )}
        <h2>{text}</h2>
        <p>{completed.toString()}</p>
        <p>{_id}</p>
        <p>{user}</p>
        {!completed && (
          <>
            <button onClick={completeTodo}>Färdigställ</button>
            <button onClick={updateTodo}>Ändra</button>
          </>
        )}
        {completed && <button onClick={resetTodoToActive}>Återställ</button>}
        <button onClick={removeTodoFromServer}>Radera</button>
      </div>
    </>
  );
}

export default TodoItem;
