import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail({ posts, onClickDeleteBtnHandler }) {
  const navigate = useNavigate();

  // useParams를 이용해 url의 id를 가져온다.
  // useParams는 객체 형태로 데이터 값을 반환하며,
  // 객체 안의 id값만을 사용하려면 구조분해할당으로 뽑아낸다.
  const { id } = useParams();

  console.log(id);
  console.log(posts);

  // post의 id값 === 현재 URL id값이 일치하는 데이터를 찾아낸다.
  const data = posts.find((post) => post.id === id);

  // 구조분해할당으로 필요한 데이터 뽑아내기
  const { title, content } = data;

  return (
    <>
      <Header />
      <Container>
        <h1
          style={{
            border: "1px solid lightgray",
            borderRadius: "12px",
            padding: "12px",
          }}
        >
          {title}
        </h1>
        <div
          style={{
            height: "400px",
            border: "1px solid lightgray",
            borderRadius: "12px",
            padding: "12px",
          }}
        >
          {content}
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
              navigate(`/edit/${id}`);
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
              onClickDeleteBtnHandler(id);
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
