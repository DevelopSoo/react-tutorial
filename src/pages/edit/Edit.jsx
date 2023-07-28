import React, { useState } from 'react';
import Header from '../../common/Header';
import Container from '../../common/Container';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/button/Button';
import * as S from './Edit.styled';

export default function Edit({ todos, setTodos }) {
  const { id } = useParams();
  const filteredTodo = todos.find((todo) => todo.id === id);

  const [updateTitle, setUpdateTitle] = useState(filteredTodo.title);
  const [updateContent, setUpdateContent] = useState(filteredTodo.content);

  const navigate = useNavigate();

  const upDateTodos = () => {
    const editTodo = {
      id: filteredTodo.id,
      title: updateTitle,
      content: updateContent,
      author: '김선익'
    };

    //기존에 있던 todo + 수정된 todo
    const result = todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      } else {
        return editTodo;
      }
    });

    setTodos(result);
    navigate('/');
  };

  if (!filteredTodo) {
    return <div>No todo found with the provided id</div>;
  }

  return (
    <>
      <Header />
      <Container>
        <S.FormLayout
          onSubmit={(e) => {
            e.preventDefault();
            console.log('제출!');
            upDateTodos();
          }}
        >
          <div>
            <S.InputLayout
              // todos.title을 출력
              value={updateTitle}
              // 입력 값 변경하기
              onChange={(e) => {
                setUpdateTitle(e.target.value);
              }}
            />
            {/* {filteredTodo.title} */}
          </div>
          <div>
            <S.TextareaLayout
              // todos.content를 출력
              value={updateContent}
              onChange={(e) => {
                setUpdateContent(e.target.value);
              }}
            />
          </div>
          <Button variant="solid" color="orange" size="XLarge">
            수정하기
          </Button>
        </S.FormLayout>
      </Container>
    </>
  );
}
