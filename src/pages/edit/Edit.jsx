import React, { useState } from 'react';
import Header from '../../common/Header';
import Container from '../../common/Container';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { edit } from '../../redux/modules/todosSlice';
import Button from '../../components/button/Button';
import * as S from './Edit.styled';

export default function Edit() {
  const { id } = useParams();
  const disPatch = useDispatch();
  const reduxTodos = useSelector((state) => state.todos);
  const findTodo = reduxTodos.find((todo) => todo.id === id);

  const [title, setTitle] = useState(findTodo?.title || '');
  const [content, setContent] = useState(findTodo?.content || '');

  const navigate = useNavigate();

  const editTodo = {
    id: findTodo.id,
    title,
    content,
    author: '김선익'
  };

  if (!findTodo) {
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
            // id값과, editTodo를 내려준다.
            //id 값은 없어도 된다.  파라미터는 1개를 받는다.
            disPatch(edit(editTodo));

            navigate('/');
          }}
        >
          <div>
            <S.InputLayout
              // todos.title을 출력
              value={title}
              // 입력 값 변경하기
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            {/* {findTodo.title} */}
          </div>
          <div>
            <S.TextareaLayout
              // todos.content를 출력
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
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
