import React, { useState } from "react";
import { useParams } from "react-router";

export default function Product({ products }) {
  const { id } = useParams();
  const [size, setSize] = useState("");
  const product = products.find((product) => product.id === id);

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
              color: "white",
            }}
          >
            <div>{product.name}</div>
          </div>
          <div>
            <h3>가격: {product.price} 원</h3>
            <h3>좋아요: {product.likes} 개</h3>
            <h3>구매옵션</h3>
            <select
              style={{
                width: "100px",
              }}
              onChange={(e) => {
                setSize(e.target.value);
              }}
            >
              <option>선택하세요</option>
              {product.options.map((option) => {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
            <div>구매옵션: {size}</div>
          </div>
        </div>
      </div>
    </>
  );
}
