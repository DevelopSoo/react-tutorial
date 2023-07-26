import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Container from "../common/Container";
import { useState } from "react";
import uuid from "react-uuid";
export default function Main({ memoData, setMemoData }) {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        {/*         메모 입력 관련
          1. 메모 추가 버튼 */}
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

        {/* 2. map 함수로 memodatas 랜더링하기  */}
        <div>
          {memoData &&
            memoData.map((memo) => {
              return (
                <div
                  key={memo.id}
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
                      navigate(`/detail/${memo.id}`);
                    }}
                    style={{
                      flex: 4,
                      borderRight: "1px solid lightgrey",
                      cursor: "pointer",
                    }}
                  >
                    <h2>{memo.title}</h2>
                    <p
                      style={{
                        width: "300px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {memo.content}
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
                    <div>{memo.author}</div>
                    <div>
                      <button
                        onClick={() => {
                          navigate(`/edit/${memo.id}`);
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

                      {/* 삭제 구현하기  filter를 통해서 내가 클릭한 놈이 아닌 애들만 보여주기 */}
                      <button
                        onClick={() => {
                          if (window.confirm("진짜 삭제할까요?")) {
                            const newMemoData = memoData.filter(
                              (m) => m.id !== memo.id
                            );
                            setMemoData(newMemoData);
                          }
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
              );
            })}
        </div>
      </Container>
    </>
  );
}
