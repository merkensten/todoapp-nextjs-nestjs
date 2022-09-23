import React from 'react';
import axios from 'axios';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

// hooks
import { GetTodos } from '../../hooks';

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

  // const { isLoading, error, data } = useQuery('userData', () =>
  //   fetch(`${API_URL}/user`).then((res) => res.json())
  // );

  // console.log(data);

  // React.useEffect(() => {
  //   if (token) {
  //     axios
  //       .get(`${API_URL}/todo/${userId}`, {
  //         headers: {
  //           Authorization: 'Bearer ' + token,
  //         },
  //       })
  //       .then(function (response) {
  //         setTodos(response.data);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  // }, [userId, token, API_URL]);
  return (
    <div>
      <h1>Todos</h1>
      {/* <div>
        {todos.map((todo) => {
          if (!todo.completed) {
            return (
              <div key={todo._id}>
                <p>{todo.text}</p>
              </div>
            );
          }
        })}
      </div> */}
    </div>
  );
}

export default GetTodo;
