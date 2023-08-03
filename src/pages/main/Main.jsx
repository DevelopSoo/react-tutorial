import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../common/Header';
import Container from '../../common/Container';
import * as S from './Main.styled';
import Button from '../../components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../redux/modules/todosSlice';
import { auth } from '../../firebase';

export default function Main() {
  const reduxUsers = useSelector((state) => state.users);
  const loginUser = reduxUsers.find((user) => user.email === auth.currentUser?.email);

  // redux Todos를 연결합니다
  // 검색, 서버데이터 요청 : 디바운싱 lodash
  const reduxTodos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 이름을 어떻게 작성하는게 좋은지 궁금합니다.
  const addTodoUserVerify = (isLogin) => {
    isLogin ? navigate('/create', { state: { loginUser } }) : alert('로그인 후 이용해주세요.');
  };

  const removeTodoUserVerify = (id) => {
    const findTodo = reduxTodos.find((todo) => todo.id === id);
    return findTodo.author === loginUser?.email ? true : false;
  };

  const editTodoUserVerify = (id) => {
    const findTodo = reduxTodos.find((todo) => todo.id === id);
    findTodo.author === loginUser?.email ? navigate(`/edit/${id}`) : alert('본인이 작성한 게시물이 아닙니다.');
  };

  return (
    <>
      <Header />
      <Container>
        <S.ButtonLayout>
          <Button
            variant="solid"
            color="black"
            onClick={() => {
              addTodoUserVerify(loginUser.isLogin);
            }}
          >
            추가
          </Button>
        </S.ButtonLayout>

        {/* reudTodos + map 임시 데이터 3개 보여주기 */}
        {/* initialState로 정의한 3개의 임시데이터를 todos의 초기값으로 정의하고 map을 사용합니다. */}
        {reduxTodos.map((item) => {
          //todos에 들어있는 데이터를 사용하기 위해 item이라는 파라미터를 사용합니다.
          return (
            <>
              {/* item의 uuid를 key 값으로 추가하여 warning이 나오지 않게 합니다. */}
              <S.TodoItem key={item.id}>
                <S.TodoItemContent
                  onClick={() => {
                    // detail Page ID값 추가
                    navigate(`/detail/${item.id}`, { state: { item } });
                  }}
                >
                  {/* item.title에 접근해 제목을 출력합니다. */}
                  <h2>{item.title}</h2>
                  {/* item.content에 접근해 내용을 출력합니다. */}
                  <S.TodoItemDescription>{item.content}</S.TodoItemDescription>
                </S.TodoItemContent>
                <S.TodoItemAuth>
                  {/* item.author에 접근해 작성자를 출력합니다. */}
                  <S.Author>{item.author}</S.Author>

                  <Button
                    variant="solid"
                    color="orange"
                    onClick={(e) => {
                      editTodoUserVerify(item.id);
                      // id값을 url로 넣어주면 보안에 위험이 있다.
                      // 수정은 권한이 있는 사람만 해야하기 때문에 URL형태로 관리하면 안됩니다.
                      // navigate('/edit', { state: { post } });
                    }}
                  >
                    수정
                  </Button>
                  {removeTodoUserVerify(item.id) ? (
                    <>
                      <div>
                        <Button
                          variant="solid"
                          color="red"
                          onClick={() => {
                            dispatch(remove(item.id));
                          }}
                        >
                          삭제
                        </Button>
                      </div>
                    </>
                  ) : null}
                </S.TodoItemAuth>
              </S.TodoItem>
            </>
          );
        })}
      </Container>
    </>
  );
}
