import React, { useState } from 'react';

import Header from '../common/Header';
import Container from '../common/Container';

export default function Create({ todos, setTodos }) {
  const titleChangeHandler = (e) => {
    setTodos((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const contentChangeHandler = (e) => {
    setTodos((prevState) => {
      return { ...prevState, content: e.target.value };
    });
  };

  const addTodo = () => {};

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
          {todos.title}
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
            {todos.content}
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
