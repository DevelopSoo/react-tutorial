import React, { Fragment, useState } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit({ items, setItems }) {
  const { id } = useParams();
  // useParmas로 url에 넣어준 id를 받아온다.

  // props 로 넘겨받은 contents 배열에서
  // find 메서드를 사용하여 id값과 일치하는 요소만 가져온다.
  const item = items.find((item) => {
    return item.id === id;
  });

  // title, content 수정을 위해 useState 선언
  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);
  const navigate = useNavigate();

  // input title, content 수정사항 반영하기
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  // 수정된 title, content 반영하기
  const editedItems = items.map((item) =>
    // 맵 함수로 돌면서 수정 페이지의 id에 해당하는 item의 요소는 title, content 수정
    // 다른 id의 item은 그대로 유지
    item.id === id ? { ...item, title: title, content: content } : item
  );

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
            // 수정된 editeditems로 itmes 데이터를 업데이트
            setItems(editedItems);
            navigate("/");
          }}
        >
          <div>
            <input
              type="text"
              defaultValue={title}
              // value와 차이점 찾아보기
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
              type="text"
              defaultValue={content}
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
