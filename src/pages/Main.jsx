import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Container from "../common/Container";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/config/configureStore";

export default function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 데이터 가져오기
  const items = useSelector((state) => state.Items);

  // item 삭제 이벤트
  const itemDeleteHandler = (id) => {
    if (window.confirm("삭제할까??")) {
      // useDispatch로 변경함수 사용하기
      // action.payload로 id 보내주기
      dispatch(deleteItem(id));
    }
  };
  return (
    <>
      <Header />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            padding: "12px",
          }}
        >
          <button
            onClick={() => {
              navigate("/create");
            }}
            style={{
              border: "none",
              padding: "8px",
              borderRadius: "6px",
              backgroundColor: "skyblue",
              color: "white",
              cursor: "pointer",
            }}
          >
            추가
          </button>
        </div>
        {/* 
        userState로 정의한 list 배열을 map함수로 펼쳐준다.
        list 배열의 요소(객체)의 데이터를 보여주고, 배열 내의 모든 요소에 해당 과정을 반복한다. 
        */}
        {items.map((item) => (
          <div
            // map 내부에 고유의 key값 부여
            key={item.id}
            style={{
              backgroundColor: "#EEEEEE",
              height: "100px",
              borderRadius: "24px",
              marginBottom: "12px",
              display: "flex",
              padding: "12px 16px 12px 16px",
            }}
          >
            <div
              onClick={() => {
                navigate(`/detail/${item.id}`);
              }}
              style={{
                flex: 4,
                borderRight: "1px solid lightgrey",
                cursor: "pointer",
              }}
            >
              <h2>{item.title}</h2>
              <p
                style={{
                  width: "300px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.content}
              </p>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                justifyContent: "space-around",
                gap: "12px",
              }}
            >
              <div>{item.author}</div>
              <div>
                <button
                  onClick={() => {
                    navigate(`/edit/${item.id}`);
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
                    // 삭제할 item을 특정하기 위해 해당 버튼이 있는 item의 id를 보내준다.
                    itemDeleteHandler(item.id);
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
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
