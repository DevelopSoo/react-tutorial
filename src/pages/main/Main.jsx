import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../common/Header';
import Container from '../../common/Container';
import uuid from 'react-uuid';
import * as S from './Main.styled';
import Button from '../../components/button/Button';
import { useSelector } from 'react-redux';

export default function Main() {
  /*
  게시물 데이터엔 다음과 같은 데이터가 존재해야 합니다.
    - id - 고유한 아이디여야 합니다
    - title - 제목입니다.
    - content - 내용입니다.
    - author - 작성자입니다.
  */

  // refactor. redux toolkit
  const todos = useSelector((state) => state.todos);

  const navigate = useNavigate();

  const deleteHandler = () => {
    if (!window.confirm('삭제할까')) {
      return;
    }
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
              navigate('/create');
            }}
          >
            추가
          </Button>
        </S.ButtonLayout>

        {/* useState + map 임시 데이터 3개 보여주기 */}
        {/* initialState로 정의한 3개의 임시데이터를 todos의 초기값으로 정의하고 map을 사용합니다. */}
        {todos.map((item) => {
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
                  <div>
                    <Button
                      variant="solid"
                      color="orange"
                      onClick={() => {
                        navigate('/edit');
                      }}
                    >
                      수정
                    </Button>
                    {/* alert 확인 버튼 클릭시 삭제 작동하게 변경 */}
                    <Button variant="solid" color="red" onClick={deleteHandler}>
                      삭제
                    </Button>
                  </div>
                </S.TodoItemAuth>
              </S.TodoItem>
            </>
          );
        })}
      </Container>
    </>
  );
}
