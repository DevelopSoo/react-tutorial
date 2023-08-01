import React, { useState } from 'react';
import Header from '../common/Header';
import Container from '../common/Container';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add } from '../redux/modules/todosSlice';
import uuid from 'react-uuid';

export default function Create() {
  const navigate = useNavigate();
  // useSelector로 redux 연결
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  // 새로운 todo 객체 생성
  const newTodo = {
    id: uuid(),
    title,
    content,
    author: '김선익'
  };

  return (
    <>
      <Header />
      <Container>
        <form
          style={{
            height: '600px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
          }}
          onSubmit={(e) => {
            e.preventDefault();
            console.log('제출!');
            dispatch(add(newTodo));

            navigate('/');
          }}
        >
          <div>
            <input
              placeholder="제목"
              style={{
                width: '100%',
                height: '60px',
                fontSize: '18px',
                borderRadius: '12px',
                border: '1px solid lightgrey',
                padding: '8px',
                boxSizing: 'border-box'
              }}
              // value={title}
              onChange={titleChangeHandler}
            />
          </div>

          <div
            style={{
              height: '400px'
            }}
          >
            <textarea
              placeholder="내용"
              style={{
                resize: 'none',
                height: '100%',
                width: '100%',
                fontSize: '18px',
                borderRadius: '12px',
                border: '1px solid lightgrey',
                padding: '12px',
                boxSizing: 'border-box'
              }}
              onChange={contentChangeHandler}
            />
          </div>
          <button
            style={{
              width: '100%',
              height: '40px',
              border: 'none',
              color: 'white',
              borderRadius: '12px',
              backgroundColor: 'skyblue',
              cursor: 'pointer'
            }}
          >
            추가하기
          </button>
        </form>
      </Container>
    </>
  );
}
