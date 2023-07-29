import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div>404 없는 페이지 입니다.</div>
      <Link to="/">
        <div>홈으로 이동</div>
      </Link>
    </>
  );
}
