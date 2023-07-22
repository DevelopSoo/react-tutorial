import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Products({ products }) {
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
          {products.map((product) => {
            return (
              <Link key={product.id} to={`/products/${product.id}`}>
                <div
                  style={{
                    width: "200px",
                    height: "240px",
                    backgroundColor: "#068FFF",
                  }}
                >
                  <div>{product.name}</div>
                  <div>{product.price} 원</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
