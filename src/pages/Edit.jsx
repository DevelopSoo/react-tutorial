import React, { Fragment } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Edit({ todos, setTodos }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [editedTodo, setEditedTodo] = useState({
    title: todos.title,
    content: todos.content,
  });
  const 할일업뎃 = todos.filter((item) => item.id === id);
  if (할일업뎃.length === 0) {
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
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: editedTodo.title,
          content: editedTodo.content,
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
    navigate("/");
  };

  return (
    <Fragment>
      <Header />
      {할일업뎃.map((할일1) => (
        <Container key={할일1.id}>
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
                placeholder={할일1.title}
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
                //근데 이게 플레이스홀더에 있으면 뭔의미..? 사라져버리는데..?
                placeholder={할일1.content}
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
      ))}
    </Fragment>
  );
}
