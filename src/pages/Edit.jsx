import React, { Fragment, useState } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit({ posts, setPosts }) {
  const { id } = useParams();
  // console.log(id);
  // console.log(posts);
  const data = posts.find((post) => post.id === id);
  const { title, content } = data;

  // 기존 글을 불러오려면 useState(초기값)안에 기존 데이터값을 넣으면 된다!!
  const [editTitle, setEditTilte] = useState(title); // 변경된 제목 상태 관리
  const [editContent, setEditContent] = useState(content); // 변경된 내용 상태 관리
  const navigate = useNavigate();

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
          onSubmit={(e) => {
            e.preventDefault();
            console.log("제출!");
            // 요놈이 문제야. 내가 있는 페이지의 id값을 post.id와 비교해서 넣는 삼항연산자 때려.
            setPosts(
              posts.map((post) =>
                post.id === id
                  ? { ...post, title: editTitle, content: editContent }
                  : post
              )
            );
            navigate("/");
          }}
        >
          <div>
            <input
              placeholder="제목"
              value={editTitle}
              onChange={(e) => {
                setEditTilte(e.target.value);
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
              placeholder="내용"
              value={editContent}
              onChange={(e) => {
                setEditContent(e.target.value);
              }}
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
