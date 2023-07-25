import React from "react";

import Header from "../common/Header";
import Container from "../common/Container";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create({ todos, setTodos }) {
  const navigate = useNavigate();
  //새로 추가한 거 담을 상자
  const [createTodo, setCreateTodo] = useState({
    title: "",
    content: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    //새로운 할일 객체 생성
    const newTodo = {
      id: nanoid(),
      title: createTodo.title,
      content: createTodo.content,
    };
    //기존 할일에 새로운 할일 추가
    setTodos([...todos, newTodo]);
    //다 입력 후 값 비워줌
    setCreateTodo({
      title: "",
      content: "",
    });
    navigate("/");
  };

  return (
    <>
      <Header />
      <Container>
        <form
          style={{
            height: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
          onSubmit={submitHandler}
        >
          <div>
            <input
              value={createTodo.title}
              onChange={(e) => {
                setCreateTodo({ ...createTodo, title: e.target.value });
              }}
              placeholder="제목"
              style={{
                width: "100%",
                height: "60px",
                fontSize: "18px",
                borderRadius: "12px",
                border: "1px solid lightgrey",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div
            style={{
              height: "400px",
            }}
          >
            <textarea
              value={createTodo.content}
              onChange={(e) => {
                setCreateTodo({ ...createTodo, content: e.target.value });
              }}
              placeholder="내용"
              style={{
                resize: "none",
                height: "100%",
                width: "100%",
                fontSize: "18px",
                borderRadius: "12px",
                border: "1px solid lightgrey",
                padding: "12px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              height: "40px",
              border: "none",
              color: "white",
              borderRadius: "12px",
              backgroundColor: "skyblue",
              cursor: "pointer",
            }}
          >
            추가하기
          </button>
        </form>
      </Container>
    </>
  );
}
