import React, { useState } from "react";

import Header from "../common/Header";
import Container from "../common/Container";
import { nanoid } from "@reduxjs/toolkit";

export default function Create({ posts, setPosts }) {
  const [title, setTitle] = useState(""); // 제목 상태 관리
  const [content, setContent] = useState(""); // 내용 상태 관리

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
            console.log("제출!");
            const newPost = {
              id: nanoid(),
              title: title,
              content: content,
              author: "호떡",
            };
            const updatePost = [...posts, newPost];
            setPosts(updatePost);

            // 제목, 내용 입력 필드 초기화
            setTitle("");
            setContent("");
          }}
        >
          <div>
            <input
              placeholder="제목"
              value={title}
              onChange={(e) => {
                // console.log("제목 :", e.target.value);
                setTitle(e.target.value);
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
              value={content}
              onChange={(e) => {
                // console.log("내용 :", e.target.value);
                setContent(e.target.value);
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
