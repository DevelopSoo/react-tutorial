import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/slices/todosSlice"; // addRemoveSlice에서 removeTodo 액션을 가져옴
export default function Detail() {
  const todos = useSelector((state) => state.할일들);
  //로그인한 이메일주소를 가져오기 위해 리덕스 상태를 가져온다.
  const userEmail = useSelector((state) => state.loginSignup.userEmail);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  const handleRemoveTodo = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      dispatch(removeTodo(id)); // removeTodo 액션 디스패치하여 Redux store의 상태 업데이트
      navigate("/"); //삭제후 디테일 페이지를 나가고 메인페이지로 이동
    }
  };

  const findId = todos.find((item) => item.id === id);

  if (!findId) {
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
          {findId.title}
        </h1>
        <div
          style={{
            height: "400px",
            border: "1px solid lightgray",
            borderRadius: "12px",
            padding: "12px",
          }}
        >
          {findId.content}
        </div>
        {findId.author === userEmail ? (
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <button
              onClick={() => {
                // if (findId.author !== userEmail) {
                //   alert("수정 권한이 없습니다.");
                //   return; //return을 써서 페이지가 전환되는 것을 막음.
                // }
                navigate(`/edit/${findId.id}`);
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
                if (findId.author !== userEmail) {
                  alert("삭제 권한이 없습니다.");
                  return; //리턴으로 막아줌
                }
                handleRemoveTodo(findId.id); // 삭제 버튼을 누를 때 handleRemoveTodo 함수 호출
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
        ) : (
          ""
        )}
      </Container>
    </>
  );
}
