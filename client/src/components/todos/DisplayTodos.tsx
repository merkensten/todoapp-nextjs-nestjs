import React from 'react';

import TodoItem from './todo-item/TodoItem';

type TodoType = {
  _id: string;
  text: string;
  user: string;
  completed: boolean;
};

type Props = {
  todos: TodoType[];
};

function DisplayTodos({ todos }: Props) {
  return (
    <div>
      <>
        <h1>Todos</h1>
        <div>
          {todos.map((todo, index) => {
            if (!todo.completed) {
              return (
                <TodoItem
                  key={index}
                  text={todo.text}
                  completed={todo.completed}
                  _id={todo._id}
                  user={todo.user}
                />
              );
            }
          })}
        </div>
      </>
    </div>
  );
}

export default DisplayTodos;
