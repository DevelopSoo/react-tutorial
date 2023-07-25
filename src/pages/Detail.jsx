import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Detail({ todos, setTodos }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const id매칭 = todos.filter((item) => item.id === id);
  if (id매칭.length === 0) {
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

  console.log(id);
  return (
    <>
      <Header />
      {id매칭.map((할일1) => (
        <Container key={할일1.id}>
          <h1
            style={{
              border: "1px solid lightgray",
              borderRadius: "12px",
              padding: "12px",
            }}
          >
            {할일1.title}
          </h1>
          <div
            style={{
              height: "400px",
              border: "1px solid lightgray",
              borderRadius: "12px",
              padding: "12px",
            }}
          >
            {할일1.content}
          </div>
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <button
              onClick={() => {
                navigate(`/edit/${할일1.id}`);
              }}
              style={{
                border: "none",
                padding: "8px",
                borderRadius: "6px",
                backgroundColor: "orange",
                color: "white",
                cursor: "pointer",
                marginRight: "6px",
              }}
            >
              수정
            </button>
            <button
              onClick={() => {
                alert("삭제할까?");
                const 삭제후새로운배열 = todos.filter((todo) => {
                  return todo.id !== 할일1.id;
                });
                setTodos(삭제후새로운배열);
                navigate("/");
              }}
              style={{
                border: "none",
                padding: "8px",
                borderRadius: "6px",
                backgroundColor: "red",
                color: "white",
                cursor: "pointer",
              }}
            >
              삭제
            </button>
          </div>
        </Container>
      ))}
    </>
  );
}
