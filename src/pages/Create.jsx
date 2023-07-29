import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Container from "../common/Container";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/posts";

export default function Create() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 변경된 내용 한번에 상태 관리
  const [createInput, setCreateInput] = useState({
    title: "",
    content: "",
  });

  const onCangeHandler = (e) => {
    setCreateInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
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
            // console.log("제출!");
            const newPost = {
              id: nanoid(),
              title: createInput.title,
              content: createInput.content,
              author: "호떡",
            };

            dispatch(addPost(newPost));

            navigate("/");
          }}
        >
          <div>
            <input
              name="title"
              placeholder="제목"
              value={posts.title}
              onChange={onCangeHandler}
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
              value={posts.content}
              onChange={onCangeHandler}
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
              backgroundColor: "skyblue",
              cursor: "pointer",
            }}
          >
            추가하기
          </button>
        </form>
      </Container>
    </>
  );
}
