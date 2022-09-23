import React from 'react';
import axios from 'axios';

type Props = {
  userId: string;
  token: string;
};

type TodoType = {
  _id: string;
  text: string;
  user: string;
  completed: boolean;
};

function GetTodo({ userId, token }: Props) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [todos, setTodos] = React.useState<TodoType[]>([]);

  console.log(token);

  React.useEffect(() => {
    if (token) {
      axios
        .get(`${API_URL}/todo/${userId}`, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then(function (response) {
          setTodos(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [userId, token, API_URL]);
  console.log(todos);
  return (
    <div>
      <h1>Todos</h1>
      <div>
        {todos.map((todo) => {
          if (!todo.completed) {
            return (
              <div key={todo._id}>
                <p>{todo.text}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default GetTodo;
