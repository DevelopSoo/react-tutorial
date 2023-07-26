import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Container from "../common/Container";

export default function Main({ posts, onClickDeleteBtnHandler }) {
  // console.log(posts);

  const navigate = useNavigate();
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

        {/* map() : 배열 안의 값들을 순회하면서 화면 렌더링.  */}
        {/* map함수를 실행하고 return하는 최상단 태그 안에 key값을 입력해야 한다.
            그 이유는 개별 요소를 id값으로 빠르게 구분해주기 위해서. */}
        {posts.map((post) => (
          <div
            key={post.id}
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
                navigate(`/detail/${post.id}`);
              }}
              style={{
                flex: 4,
                borderRight: "1px solid lightgrey",
                cursor: "pointer",
              }}
            >
              <h2>{post.title}</h2>
              <p
                style={{
                  width: "300px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {post.content}
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
              <div> {post.author}</div>
              <div>
                <button
                  onClick={() => {
                    navigate(`/edit/${post.id}`);
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
                    onClickDeleteBtnHandler(post.id);
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
        ))}
      </Container>
    </>
  );
}
