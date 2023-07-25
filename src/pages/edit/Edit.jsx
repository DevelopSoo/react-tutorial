import React, { Fragment } from 'react';
import Header from '../../common/Header';
import Container from '../../common/Container';
import { useParams } from 'react-router-dom';
import Button from '../../components/button/Button';
import * as S from './Edit.styled';

export default function Edit({ todos, setTodos }) {
  const { id } = useParams();

  // console.log(id);
  // console.log('todos: ', todos[0].id);

  const filteredTodo = todos.find((todo) => todo.id === id);

  return (
    <Fragment>
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
              // 입력 값 변경하기
              placeholder={`${filteredTodo.title}`}
              onChange={setTodos()}
            />
            {filteredTodo.title}
          </div>
          <div>
            <S.TextareaLayout
              // todos.content를 출력
              placeholder={`${filteredTodo.content}`}
            />
          </div>
          <Button variant="solid" color="orange" size="XLarge">
            수정하기
          </Button>
        </S.FormLayout>
      </Container>
    </Fragment>
  );
}
