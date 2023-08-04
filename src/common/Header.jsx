import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../redux/slice/authSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authSlice.user); // 로그인(이메일) 상태를 가져옴

  const logoutHandler = async () => {
    await signOut(auth); // firebase에서 로그아웃
    dispatch(logoutSuccess()); // UI적으로 로그아웃
  };

  return (
    <header
      style={{
        height: "100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px 0 24px",
      }}
    >
      <h1
        style={{
          color: "gray",
          cursor: "pointer",
        }}
      >
        {/* 홈 로고 클릭 시 메인페이지(/)로 이동 */}
        <Link to="/">
          <FaHome />
        </Link>
      </h1>
      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
      >
        {user ? (
          <>
            <div>{user}</div>
            <button onClick={logoutHandler}>로그아웃</button>
          </>
        ) : (
          <>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </>
        )}
      </div>
    </header>
  );
}
