import React, { useState } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { addPost } from "../redux/posts";
import { useDispatch } from "react-redux";
export default function Create() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //여기작성보단 서브밋에 써주는게 좋음
  const navigate = useNavigate();
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
          }}
        >
          <div>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="제목"
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
              onChange={(e) => setContent(e.target.value)}
              value={content}
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
              const newTodo = {
                id: nanoid(),
                title,
                content,
                author: "작성자",
              };
              dispatch(addPost(newTodo));
              //투두스에 제목 내용 덩어리를 추가
              navigate("/");
              //추가하기 버튼을 누르면 메인페이지로 이동
            }}
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

// 1. title, content를 받아온다
// 2. id, title, content, author가 들어있는 덩어리를 만든다.
// 3. 그 덩어리를 주머니에 넣어준다.
// 4. 넣어주고 나면 메인페이지로 자동으로 이동해서 들어갔는지 확인한다.
