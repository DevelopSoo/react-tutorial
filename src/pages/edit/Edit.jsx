import React, { useState } from 'react';
import Header from '../../common/Header';
import Container from '../../common/Container';
import { useParams } from 'react-router-dom';
import Button from '../../components/button/Button';
import * as S from './Edit.styled';

export default function Edit({ todos, setTodos }) {
  const { id } = useParams();
  const filteredTodo = todos.find((todo) => todo.id === id);

  const [updateTitle, setUpdateTitle] = useState('');
  const [updateContent, setUpdateContent] = useState('');

  const upDateTodos = () => {
    const newTodo = {
      ...filteredTodo,
      title: updateTitle,
      content: updateContent
    };

    setTodos(newTodo);
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
