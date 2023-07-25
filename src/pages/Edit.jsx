import React, { Fragment, useState } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit(props) {
  const { id } = useParams();
  // useParmas로 url에 넣어준 id를 받아온다.

  // props 로 넘겨받은 contents 배열에 filter 메소드를 사용하여 useParams로 받아온
  // content의 id와 동일한 요소만 필터링해준다.
  // content의 요소인 객체를 바로 활용하기 위해 [content]로 선언함.
  const [item] = props.items.filter((item) => item.id === id);
  const setItems = props.setItems;
  // title, content 수정을 위해 useState 선언
  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);

  const navigate = useNavigate();

  // 수정된 title, content item에 반영
  const editedItem = { ...item, title: title, content: content };

  // input title 수정사항 반영하기
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
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
          onSubmit={(e) => {
            e.preventDefault();
            setItems([...props.items, editedItem]);
            navigate("/");
          }}
        >
          <div>
            <input
              type="text"
              defaultValue={title}
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
            onClick={() => {}}
          >
            수정하기
          </button>
        </form>
      </Container>
    </Fragment>
  );
}
