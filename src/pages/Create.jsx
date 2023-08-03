import React, { useState } from 'react';
import Header from '../common/Header';
import Container from '../common/Container';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { add } from '../redux/modules/todosSlice';
import uuid from 'react-uuid';
import useInput from '../hooks/useInput';

export default function Create() {
  //로그인 상태만 확인
  //북마크 상황 고려해보기
  const { state } = useLocation();
  const loginUser = state.loginUser;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    title: '',
    content: ''
  };

  const [{ title, content }, onChange, reset] = useInput(initialState);

  // 새로운 todo 객체 생성
  const newTodo = {
    id: uuid(),
    title,
    content,
    author: loginUser.email
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
              name="title"
              value={title}
              onChange={onChange}
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
              name="content"
              value={content}
              onChange={onChange}
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
