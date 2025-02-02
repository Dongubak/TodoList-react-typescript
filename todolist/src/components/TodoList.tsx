import React from "react";
import { BsApp } from "react-icons/bs";
import styled from "@emotion/styled";

const StyledIcon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  margin-left: 50px;
  svg {
    color: #555;
    font-size: 16px;
  }
`;

const TodoListWrapper = styled.ul`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const TodoItemWrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  span {
    font-size: 14px;
    color: #555;
  }
`;

interface TodoItemProps { 
  content: string;
  onClick?: () => void;
  checked?: boolean;
}

interface Todo {
  id: number;
  content: string;
  checked: boolean;
}

interface TodoListProps {
  todos?: Array<Todo>;
  onCheck?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const TodoItem = ({ content, checked, onClick } : TodoItemProps) => {
  return (
    <TodoItemWrapper style={{ textDecoration: checked ? 'line-through' : 'none' }}>
      <StyledIcon>
        <BsApp />
      </StyledIcon>
      <span onClick={onClick}>{content}</span>
    </TodoItemWrapper>
  );
};

const TodoList = ({ todos, onCheck, onDelete } : TodoListProps) => {
  return (
    <TodoListWrapper>
      {
        todos?.map((todo) => (
          <TodoItem key={todo.id} content={todo.content} checked={todo.checked}
            onClick={() => {
              todo.checked ? onDelete?.(todo.id) : onCheck?.(todo.id);
            }}
          />
        ))
      }
    </TodoListWrapper>
  );
};

export default TodoList;