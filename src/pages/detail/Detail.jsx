import React from 'react';
import Header from '../../common/Header';
import Container from '../../common/Container';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/button/Button';
import * as S from './Detail.styled';

export default function Detail({ todos }) {
  //useParams를 사용해 URL에서 id 값을 추출합니다.
  const { id } = useParams();
  const navigate = useNavigate();

  // todos id와 params id 값을 비교해서 일치하는 첫번째 항목을 가져옵니다.
  const filteredTodo = todos.find((todo) => todo.id === id);

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
        <S.ButtonLayout>
          <Button
            variant="solid"
            color="orange"
            onClick={() => {
              navigate('/edit');
            }}
          >
            수정
          </Button>
          <Button
            variant="solid"
            color="red"
            onClick={() => {
              alert('삭제할까?');
            }}
          >
            삭제
          </Button>
        </S.ButtonLayout>
      </Container>
    </>
  );
}
