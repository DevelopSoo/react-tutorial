import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log({ searchParams: searchParams.get("sort") });

  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <button
            onClick={() => {
              setSearchParams({
                sort: "price",
              });
            }}
          >
            가격순정렬
          </button>
          <Link to="/products/1">
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#068FFF",
              }}
            >
              상품1
            </div>
          </Link>
          <Link to="/products/2">
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#068FFF",
              }}
            >
              상품2
            </div>
          </Link>
          <Link to="/products/3">
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#068FFF",
              }}
            >
              상품3
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
