import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../common/Header';
import Container from '../../common/Container';
import * as S from './Main.styled';
import Button from '../../components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../redux/modules/todosSlice';

export default function Main() {
  // redux Todos를 연결합니다
  const reduxTodos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [verify, setVerify] = useState(null);

  const verifyUser = () => {
    if (reduxTodos.author === '김선익') {
      return setVerify(true);
    } else {
      return setVerify(false);
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <S.ButtonLayout>
          <Button
            variant="solid"
            color="black"
            onClick={() => {
              navigate('/create');
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
                    navigate(`/detail/${item.id}`);
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
                  {verify ? (
                    <div>
                      <Button
                        variant="solid"
                        color="orange"
                        onClick={(e) => {
                          navigate(`/edit/${item.id}`);
                          // id값을 url로 넣어주면 보안에 위험이 있다.
                          // 수정은 권한이 있는 사람만 해야하기 때문에 URL형태로 관리하면 안됩니다.
                          // navigate('/edit', { state: { post } });
                        }}
                      >
                        수정
                      </Button>

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
