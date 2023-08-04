import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletePost } from "../redux/posts";
export default function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const todos = useSelector((state) => state.posts);
  const result = todos.filter((value) => value.id === id);
  //id부분을 parseInt로 써서 안됐었음.
  //filter보단 find로 써야함 (도전!!)

  // a = 3 -> a는 3이야
  // a == 3 -> a랑 3이 같아?   3 == "3" => true
  // a === 3 => a랑 3이 같고, 같은 type이야? 3 === "3" => false
  // parseInt 사용법은 구글링 해보면 좋을듯. 문자열을 숫자로 바꿔주는 역할을 함.
  // 이런 귀찮은 것 안하려면 uuid/nanoid를 추천!!!
  // filter랑 find 차이점 공부

  return (
    <>
      <Header />
      {result.map((value) => (
        <Container key={value.id}>
          <h1
            style={{
              border: "1px solid lightgray",
              borderRadius: "12px",
              padding: "12px",
            }}
          >
            {value.title}
          </h1>
          <div
            style={{
              height: "400px",
              border: "1px solid lightgray",
              borderRadius: "12px",
              padding: "12px",
            }}
          >
            {value.content}
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
                navigate(`/edit/${value.id}`);
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
                dispatch(deletePost(value.id));
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
      ))}
    </>
  );
}
