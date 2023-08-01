import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { login } from "../redux/slices/loginSlice";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
    });
  }, []);

  const logIn = async (event) => {
    event.preventDefault();
    // 이메일 칸이 비어있을 때
    if (!email) {
      alert("이메일을 입력해주세요.");
      return;
    }
    // 비밀번호 칸이 비어있을 때
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);

      dispatch(login(email)); //로그인시 사용자 이메일을 리듀서에 저장
      alert("로그인되었습니다.");
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error with signIn", errorCode, errorMessage);
      // 로그인 실패 시 에러 처리

      // 로그인 성공 후 필요한 작업 수행

      if (errorCode === "auth/invalid-email") {
        alert("유효하지 않은 이메일 형식입니다.");
      } else if (errorCode === "auth/wrong-password") {
        alert("이메일 또는 비밀번호가 올바르지 않습니다.");
      } else if (errorCode === "auth/user-not-found") {
        alert("일치하는 정보가 없습니다.");
      } else {
        alert(errorMessage);
      }
      // 로그인 실패 시 에러 처리
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "600px",
            alignItems: "center",
          }}
        >
          <form>
            <div
              style={{
                width: "360px",
                marginBottom: "12px",
              }}
            >
              <input
                placeholder="이메일"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "1px solid lightgrey",
                  padding: "8px",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div
              style={{
                width: "360px",
                marginBottom: "12px",
              }}
            >
              <input
                placeholder="비밀번호"
                type="password"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "1px solid lightgrey",
                  padding: "8px",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div
              style={{
                width: "360px",
                marginBottom: "12px",
              }}
            >
              <button
                onClick={logIn}
                style={{
                  width: "100%",
                  border: "none",
                  padding: "12px",
                  borderRadius: "6px",
                  backgroundColor: "#78C1F3",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                로그인하기
              </button>
            </div>
            <div
              style={{
                width: "360px",
              }}
            >
              <div />

              <button
                onClick={() => {
                  navigate("/signup");
                }}
                style={{
                  width: "100%",
                  border: "none",
                  padding: "12px",
                  borderRadius: "6px",
                  backgroundColor: "#FF6969",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                회원가입하러 가기
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}
