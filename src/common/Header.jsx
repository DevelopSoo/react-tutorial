import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Header() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  // 로그아웃 함수
  const logout = async () => {
    alert("로그아웃 할까?");
    await signOut(auth);
    setCurrentUser(null);
  };

  useEffect(() => {
    // 사용자의 로그인 상태 변경 감지
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          setCurrentUser(user.email);
        } catch (error) {
          console.log("사용자 정보를 가져오는 데 실패했습니다.\n", error);
        }
      } else {
        setCurrentUser(null); // 로그인되지 않은 상태면 null로 설정
      }
    });
    return () => unsubscribe(); // 컴포넌트 언마운트 시 이벤트 구독 해제
  }, []);

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
        // 홈 버튼 클릭시 메인화면으로 이동
        onClick={() => {
          navigate("/");
        }}
      >
        <FaHome />
      </h1>
      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
      >
        {/* 로그인 된 유저가 있을 시 로그아웃, 이메일 버튼 보여주기 */}
        {currentUser ? (
          <>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "15px",
                cursor: "pointer",
              }}
              onClick={logout}
            >
              로그아웃
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              {currentUser}
            </button>
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
