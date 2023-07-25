import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  // useParmas로 url에 넣어준 id를 받아온다.

  // props 로 넘겨받은 contents 배열에 filter 메소드를 사용하여 useParams로 받아온
  // content의 id와 동일한 요소만 필터링해준다.
  const item = props.items.filter((item) => item.id === id);

  // item 삭제 이벤트
  const itemDeleteHandler = () => {
    const newItems = props.items.filter((item) => item.id !== id);
    props.setItems(newItems);
  };

  return (
    <>
      <Header />
      {/* filter링 된 요소를 map 함수로 펼쳐준다.
      이로써 클릭한 content의 요소만 detailpage에서 보여준다 */}
      {item.map((item) => {
        return (
          <Container key={item.id}>
            <h1
              style={{
                border: "1px solid lightgray",
                borderRadius: "12px",
                padding: "12px",
              }}
            >
              {item.title}
            </h1>
            <div
              style={{
                height: "400px",
                border: "1px solid lightgray",
                borderRadius: "12px",
                padding: "12px",
              }}
            >
              {item.content}
            </div>
            <div
              style={{
                marginTop: "12px",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <button
                onClick={() => {
                  navigate("/edit");
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
                  alert("삭제할까?");
                  itemDeleteHandler();
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
          </Container>
        );
      })}
    </>
  );
}
