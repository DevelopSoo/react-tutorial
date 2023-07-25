import React, { useEffect } from 'react';
import Header from '../../common/Header';
import Container from '../../common/Container';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../../components/button/Button';
import * as S from './Detail.styled';

export default function Detail() {
  //useParams를 사용해 URL에서 id 값을 추출합니다.
  const { id } = useParams();
  //Redux Toolkit을 사용해 todos를 불러옵니다.
  const todos = useSelector((state) => state.todos);

  const navigate = useNavigate();

  // todos id와 params id 값을 비교해서 일치하는 첫번째 항목을 가져옵니다.
  const filteredTodo = todos.find((todo) => todo.id === id);

  const deleteHandler = () => {
    if (!window.confirm('삭제할까')) {
      return;
    }

    navigate('/');
  };

  if (!filteredTodo) {
    return <div>No todo found with the provided id</div>;
  }

  return (
    <>
      <Header />
      <Container>
        <S.TitleLayout>
          {/* 해당 id에 맞는 todo 제목 출력 */}
          {filteredTodo.title}
        </S.TitleLayout>
        <S.ContentLayout>{filteredTodo.content}</S.ContentLayout>
        <div
          style={{
            marginTop: '12px',
            display: 'flex',
            justifyContent: 'end'
          }}
        >
          <Button
            variant="solid"
            color="orange"
            onClick={() => {
              navigate('/edit');
            }}
          >
            수정
          </Button>
          <Button variant="solid" color="red" onClick={deleteHandler}>
            삭제
          </Button>
        </div>
      </Container>
    </>
  );
}
