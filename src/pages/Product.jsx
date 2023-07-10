import React from "react";
import { useParams } from "react-router";

export default function Product() {
  const { id } = useParams();
  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            {/* 여기에 id값 추가 */}
            상품{id}
          </div>
          <div>
            <h3>가격: ~~~~</h3>
            <h3>좋아요: ~~~~</h3>
            <h3>구매옵션</h3>
            <select
              style={{
                width: "100px",
              }}
            >
              <option>옵션1</option>
              <option>옵션2</option>
              <option>옵션3</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
