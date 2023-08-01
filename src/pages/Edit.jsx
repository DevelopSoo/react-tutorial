import React, { Fragment } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editTodo } from "../redux/slices/todosSlice";
export default function Edit() {
  const todos = useSelector((state) => state.할일들); // slice의 상태를 가져옴
  console.log(todos);
  const dispatch = useDispatch();

  const { id } = useParams();
  const navigate = useNavigate();

  const findId = todos.find((item) => item.id === id);

  const [editedTodo, setEditedTodo] = useState({
    title: findId ? findId.title : "",
    content: findId ? findId.content : "",
  });

  if (!findId) {
    // id에 해당하는 할일이 없는 경우에 대한 처리
    return (
      <>
        <Header />
        <Container>
          <h2>해당 할일을 찾을 수 없습니다.</h2>
        </Container>
      </>
    );
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedTodos = {
      ...findId,
      title: editedTodo.title,
      content: editedTodo.content,
    };
    dispatch(editTodo(updatedTodos)); // editTodo 액션 디스패치하여 Redux store의 상태 업데이트
    navigate("/");
  };

  return (
    <Fragment>
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
              value={editedTodo.title}
              onChange={(e) => {
                setEditedTodo({ ...editedTodo, title: e.target.value });
              }}
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
              value={editedTodo.content}
              onChange={(e) =>
                setEditedTodo({ ...editedTodo, content: e.target.value })
              }
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
              backgroundColor: "orange",
              cursor: "pointer",
            }}
          >
            수정하기
          </button>
        </form>
      </Container>
    </Fragment>
  );
}
