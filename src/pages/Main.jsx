import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Container from "../common/Container";

export default function Main({ todos, setTodos }) {
  const navigate = useNavigate();
  console.log({ todos });
  const [newTodo, setNewTodo] = useState("");
  const id매칭 = todos.filter((item) => item.id === "id");

  return (
    <>
      <Header />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            padding: "12px",
          }}
        >
          <button
            onClick={() => {
              navigate("/create");
            }}
            style={{
              border: "none",
              padding: "8px",
              borderRadius: "6px",
              backgroundColor: "skyblue",
              color: "white",
              cursor: "pointer",
            }}
          >
            추가
          </button>
        </div>
        {todos.map((할일) => {
          return (
            <div
              key={할일.id}
              style={{
                backgroundColor: "#EEEEEE",
                height: "100px",
                borderRadius: "24px",
                marginBottom: "12px",
                display: "flex",
                padding: "12px 16px 12px 16px",
              }}
            >
              <div
                onClick={() => {
                  navigate(`/detail/${할일.id}`);
                  {
                  }
                }}
                style={{
                  flex: 4,
                  borderRight: "1px solid lightgrey",
                  cursor: "pointer",
                }}
              >
                <h2>{할일.title}</h2>
                <p
                  style={{
                    width: "300px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {할일.content}
                </p>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                  justifyContent: "space-around",
                  gap: "12px",
                }}
              >
                <div>{할일.author}</div>
                <div>
                  <button
                    onClick={() => {
                      navigate(`/edit/${할일.id}`);
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
                        return todo.id !== 할일.id;
                      });
                      setTodos(삭제후새로운배열);
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
              </div>
            </div>
          );
        })}
      </Container>
    </>
  );
}
