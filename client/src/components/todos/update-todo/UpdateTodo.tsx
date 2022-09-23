import React from 'react';
import axios from 'axios';

type Props = {
  _id: string;
  user: string;
  completed: boolean;
  token: string;
  rerenderTodos: () => void;
  setShowUpdateTodo: (value: React.SetStateAction<boolean>) => void;
};

function UpdateTodo({
  _id,
  user,
  completed,
  token,
  rerenderTodos,
  setShowUpdateTodo,
}: Props) {
  const [todoText, setTodoText] = React.useState('');

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  function formHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(todoText);

    axios({
      method: 'put',
      url: `${API_URL}/todo/${_id}?user=${user}`,
      data: {
        text: todoText,
        user,
        completed,
      },
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(function (response) {
        rerenderTodos();
        setShowUpdateTodo(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <h2>Uppdatera todo</h2>
      <form onSubmit={formHandler}>
        <input
          type="text"
          name="text"
          id="text"
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
        />
        <button type="submit">Uppdatera todo</button>
      </form>
    </div>
  );
}

export default UpdateTodo;
