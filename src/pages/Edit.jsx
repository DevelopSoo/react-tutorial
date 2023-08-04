import React, { Fragment } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editPost } from "../redux/posts";
import { useState } from "react";

export default function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const todos = useSelector((state) => state.posts);
  const result = todos.filter((value) => value.id === id);
  console.log(result);
  const [title, setTitle] = useState(result[0].title);
  const [content, setContent] = useState(result[0].content);
  //result[0] << 이부분 옵셔널체이닝으로 대체
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
          }}
        >
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              type="text"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="내용"
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
            onClick={() => {
              alert("수정완료");
              dispatch(editPost({ id, title, content }));
              // console.log({ id, title, content });
              navigate("/");
              //수정버튼 클릭시 수정포스트 보여지게.
            }}
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
