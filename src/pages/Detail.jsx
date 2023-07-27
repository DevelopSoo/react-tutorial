import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../slices/todosSlice"; // addRemoveSlice에서 removeTodo 액션을 가져옴
export default function Detail() {
  const todos = useSelector((state) => state.할일들);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  const handleRemoveTodo = (id) => {
    if (window.confirm("삭제할까?")) {
      dispatch(removeTodo(id)); // removeTodo 액션 디스패치하여 Redux store의 상태 업데이트
      navigate("/");
    }
  };

  const 할일업뎃 = todos.find((item) => item.id === id);

  if (!할일업뎃 === 0) {
    // id에 해당하는 할일이 없는 경우에 대한 처리
    return (
      <>
        <Header />
        <Container>
          <h2>해당 할일을 찾을 수 없습니다.</h2>
        </Container>
      </>
    );
  }

  console.log(id);
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
          {할일업뎃.title}
        </h1>
        <div
          style={{
            height: "400px",
            border: "1px solid lightgray",
            borderRadius: "12px",
            padding: "12px",
          }}
        >
          {할일업뎃.content}
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
              navigate(`/edit/${할일업뎃.id}`);
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
              handleRemoveTodo(할일업뎃.id); // 삭제 버튼을 누를 때 handleRemoveTodo 함수 호출
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
    </>
  );
}
