import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Container from "../common/Container";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../redux/slice/posts";

export default function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts);
  const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn); // 로그인 상태를 가져옴
  const user = useSelector((state) => state.authSlice.user); // user = 로그인한 email 정보를 가져옴

  const createBtnHandler = () => {
    isLoggedIn
      ? navigate("/create")
      : alert("로그인이 필요합니다.") || navigate("/login");
  };

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
            onClick={createBtnHandler}
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
              {/* 현재 사용자(user)가 존재하고, 
              동시에(&&) 현재 사용자(user)의 이메일이 
              게시물의 작성자(author)와 일치하는지를 확인한다. */}
              {/* 작성자일 경우에만 수정, 삭제 버튼 보여주기 */}
              {user && user === post.author ? (
                <div>
                  <button
                    onClick={() => {
                      navigate("/edit", { state: { data: post } });
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
                      const result = window.confirm("정말로 삭제할거냥?");
                      if (result) {
                        dispatch(deletePost(post.id));
                      }
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
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
