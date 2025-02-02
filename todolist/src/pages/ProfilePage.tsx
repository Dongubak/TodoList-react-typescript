import React, { ChangeEvent } from "react";
import Navigation from "../components/Navigation";
import MemberNavigation from "../components/MemberNavigation";
import styled from "@emotion/styled";
import TodoListContainer from "../containers/TodoListContainer";
import ProfileContainer from "../containers/ProfileContainer";

const PageContainer = styled.div`
  width: 340px;
  padding: 30px;
  background-color: #fff;
  margin: 50px auto;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

interface Todo {
  id: number;
  content: string;
  checked: boolean;
}

const ProfilePage: React.FC = () => {
  const [todos, setTodos] = React.useState<Array<Todo>>([]);
  const [content, setContent] = React.useState<string>("");

  const onDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const onCheck = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content === '') return;
    setTodos([...todos, { id: Date.now(), content, checked: false }]);
    setContent('');
  }

  const onClick = () => {
    if (content === '') return;
    setTodos([...todos, { id: Date.now(), content, checked: false }]);
    setContent('');
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }

  return (
    <PageContainer>
      <Navigation />
      <ProfileContainer
        name="Dongubak"
        job="TodoList Developer"
        imageUrl="/img/profile.jpg"
        onSubmit={onSubmit}
        content={content}
        setContent={setContent}
        onClick={onClick}
        onChange={onChange}
      />
      <TodoListContainer todos={todos} onCheck={onCheck} onDelete={onDelete}/>
      <MemberNavigation current="member1" />
    </PageContainer>
  );
};

export default ProfilePage;