import React from 'react';
import CreateTodo from './create-todo/CreateTodo';
import DisplayTodos from './DisplayTodos';
import axios from 'axios';

type TodoType = {
  _id: string;
  text: string;
  user: string;
  completed: boolean;
};

type Props = {
  userId: string;
  token: string;
};

function Todos({ userId, token }: Props) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
  const [todos, setTodos] = React.useState<TodoType[]>([]);
  // const [isLoading, setIsLoading] = React.useState(false);
  // const [error, setError] = React.useState(false);

  React.useEffect(() => {
    function getTodos() {
      if (userId) {
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
          })
          .then(function () {
            // always executed
          });
      }
    }

    getTodos();
  }, [token, userId, API_URL]);

  return (
    <>
      <CreateTodo
        userId={userId}
        token={token}
        API_URL={API_URL}
        setTodos={setTodos}
      />
      <DisplayTodos todos={todos} />
    </>
  );
}

export default Todos;
