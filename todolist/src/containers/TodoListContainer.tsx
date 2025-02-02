import React from 'react';
import TodoList from '../components/TodoList';

interface Todo {
   id: number;
   content: string;
   checked: boolean;
}

interface TodoListContainerProps {
   todos?: Array<Todo>;
   onCheck?: (id: number) => void;
   onDelete?: (id: number) => void;
}

const TodoListContainer: React.FC<TodoListContainerProps> = ({ todos, onCheck, onDelete }) => {
  return (
      <TodoList todos={ todos } onCheck={ onCheck } onDelete={ onDelete }/>
  )
}

export default TodoListContainer;