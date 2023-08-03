import React from 'react';
import Header from '../../common/Header';
import Container from '../../common/Container';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../redux/modules/todosSlice';
import Button from '../../components/button/Button';
import * as S from './Detail.styled';
import { auth } from '../../firebase';

export default function Detail() {
  const reduxUsers = useSelector((state) => state.users);
  const loginUser = reduxUsers.find((user) => user.email === auth.currentUser?.email);

  //useParams를 사용해 URL에서 id 값을 추출합니다.
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const reduxTodos = useSelector((state) => state.todos);
  // todos id와 params id 값을 비교해서 일치하는 첫번째 항목을 가져옵니다.
  const findTodo = reduxTodos.find((todo) => todo.id === id);

  // 이름을 어떻게 작성하는게 좋은지 궁금합니다.
  const removeTodoUserVerify = () => {
    if (findTodo.author === loginUser.email) {
      return true;
    } else {
      return false;
    }
  };

  if (!findTodo) {
    return <div>No todo found with the provided id</div>;
  }

  return (
    <>
      <Header />

      <Container>
        <S.TitleLayout>
          {/* 해당 id에 맞는 todo 제목 출력 */}
          {findTodo.title}
        </S.TitleLayout>
        <S.ContentLayout>{findTodo.content}</S.ContentLayout>
        {removeTodoUserVerify() ? (
          <>
            <S.ButtonLayout>
              <Button
                variant="solid"
                color="orange"
                onClick={() => {
                  navigate(`/edit/${findTodo.id}`);
                }}
              >
                수정
              </Button>
              <Button
                variant="solid"
                color="red"
                onClick={() => {
                  dispatch(remove(findTodo.id));
                  navigate('/');
                }}
              >
                삭제
              </Button>
            </S.ButtonLayout>
          </>
        ) : null}
      </Container>
    </>
  );
}
