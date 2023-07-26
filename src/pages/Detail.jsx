import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail({ items, setItems }) {
  const navigate = useNavigate();
  const { id } = useParams();
  // useParmas로 url에 넣어준 id를 받아온다.

  // props 로 넘겨받은 contents 배열에서
  // find 메서드를 사용하여 id값과 일치하는 요소만 가져온다.
  const item = items.find((item) => {
    return item.id === id;
  });

  // item 삭제 이벤트
  const itemDeleteHandler = () => {
    if (window.confirm("삭제할까??")) {
      const newItems = items.filter((item) => item.id !== id);
      setItems(newItems);
      navigate("/");
    }
  };

  return (
    <>
      <Header />
      <Container key={item?.id}>
        <h1
          style={{
            border: "1px solid lightgray",
            borderRadius: "12px",
            padding: "12px",
          }}
        >
          {item?.title}
        </h1>
        <div
          style={{
            height: "400px",
            border: "1px solid lightgray",
            borderRadius: "12px",
            padding: "12px",
          }}
        >
          {item?.content}
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
              navigate(`/edit/${item.id}`);
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
              itemDeleteHandler();
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
    </>
  );
}
