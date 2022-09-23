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

function DisplayTodos({ userId, token }: Props) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [todos, setTodos] = React.useState<TodoType[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
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
            setError(true);
          })
          .then(function () {
            // always executed
            setIsLoading(false);
          });
      }
    }, 500);
  }, [token, userId, API_URL]);

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && (
        <h1>Något gick fel när data skulle hämtas in, försök igen senare</h1>
      )}
      {!isLoading && !error && (
        <>
          <h1>Todos</h1>
          <div>
            {todos.map((todo) => {
              if (!todo.completed) {
                return (
                  <div key={todo._id}>
                    <p>{todo.text}</p>
                    <p>{todo.completed.toString()}</p>
                  </div>
                );
              }
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default DisplayTodos;
