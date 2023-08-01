import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../redux/slice/posts";

export default function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts);
  const user = useSelector((state) => state.authSlice.user);

  const { id } = useParams();
  const data = posts.find((post) => post.id === id);
  const { title, content } = data;

  // 수정 버튼
  const editBtnHandler = () => {
    navigate(`/edit`, { state: { data } });
  };

  // 삭제 버튼
  const deleteBtnHandler = () => {
    const result = window.confirm("정말로 삭제할거냥?");
    if (result) {
      dispatch(deletePost(id));
    }
    navigate("/");
  };

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
        {/* 작성자일 경우에만 수정, 삭제 버튼 보여주기 */}
        {user && user === data.author ? (
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <button
              onClick={editBtnHandler}
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
              onClick={deleteBtnHandler}
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
      </Container>
    </>
  );
}
