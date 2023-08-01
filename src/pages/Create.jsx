import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todosSlice"; // addRemoveSlice에서 removeTodo 액션을 가져옴
export default function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userEmail = useSelector((state) => state.loginSignup.userEmail);
  //새로 추가한 거 담을 상자
  const [createTodo, setCreateTodo] = useState({
    title: "",
    content: "",
    author: userEmail,
  });
  const submitHandler = (e) => {
    e.preventDefault();
    //새로운 할일 객체 생성
    const newTodo = {
      id: nanoid(),
      author: userEmail,
      ...createTodo,
    };
    //기존 할일에 새로운 할일 추가
    dispatch(addTodo(newTodo)); // addTodo 액션 디스패치하여 Redux store의 상태 업데이트

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
