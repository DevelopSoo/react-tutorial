import React, { Fragment, useState } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editPost } from "../redux/slice/posts";

export default function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  // 변경된 내용 한번에 상태 관리
  const [editInput, setEditInput] = useState({
    title: state?.data.title || "",
    content: state?.data.content || "",
  });

  const editBtnHandler = (e) => {
    e.preventDefault();
    console.log("제출!");

    // 수정된 내용을 dispatch하여 Redux 상태를 업데이트
    dispatch(
      editPost({
        id: state.data.id,
        title: editInput.title,
        content: editInput.content,
      })
    );

    navigate("/");
  };

  const onChangeHandler = (e) => {
    setEditInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
          onSubmit={editBtnHandler}
        >
          <div>
            <input
              name="title"
              placeholder="제목"
              value={editInput.title}
              onChange={onChangeHandler}
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
              name="content"
              placeholder="내용"
              value={editInput.content}
              onChange={onChangeHandler}
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
