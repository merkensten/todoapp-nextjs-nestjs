import React from 'react';

type TodoType = {
  _id: string;
  text: string;
  user: string;
  completed: boolean;
};
function TodoItem({ text, _id, completed, user }: TodoType) {
  //   console.log(_id, user);
  return (
    <div>
      <h2>{text}</h2>
      <p>{completed.toString()}</p>
      <p>{_id}</p>
      <p>{user}</p>
    </div>
  );
}

export default TodoItem;
