import React, { useState } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/config/configureStore";

export default function Create() {
  // title, content 수정을 위해 useState 선언
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // input title, content 수정사항 반영하기
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const itemAddHandler = () => {
    // 입력된 title, content를 포함한 새로운 객체 생성
    const newItem = {
      id: uuid(),
      title,
      content,
      author: `작성자`,
    };
    // useDispatch로 변경함수 사용하기
    // action.payload로 newItem 보내주기
    dispatch(addItem(newItem));

    // 추가 후 메인페이지로 이동
    navigate("/");
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
            itemAddHandler();
          }}
        >
          <div>
            <input
              placeholder="제목"
              type="text"
              // value=""
              style={{
                width: "100%",
                height: "60px",
                fontSize: "18px",
                borderRadius: "12px",
                border: "1px solid lightgrey",
                padding: "8px",
                boxSizing: "border-box",
              }}
              // onchange로 input 값 상태 변경 감지
              onChange={(e) => {
                titleChangeHandler(e);
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
              // value
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
              // onchange로 input 값 상태 변경 감지
              onChange={(e) => {
                contentChangeHandler(e);
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
