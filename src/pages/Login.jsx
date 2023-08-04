import React, { useState } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { styled } from "styled-components";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 등록 함수
  const onSubmitSignInHandler = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      alert("로그인에 성공하셨습니다.");
      navigate("/");
    } catch (error) {
      alert(getErrorMessage(error.code));
    }
  };

  // 에러 코드에 따른 유효성 검사 한 번에 관리
  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/user-not-found":
      case "auth/missing-email":
        return "잘못된 이메일입니다.";
      case "auth/missing-password":
        return "잘못된 비밀번호입니다.";
      case "auth/weak-password":
        return "비밀번호는 6글자 이상이어야 합니다.";
      case "auth/network-request-failed":
        return "네트워크 연결에 실패 하였습니다.";
      case "auth/invalid-email":
        return "잘못된 이메일 형식입니다.";
      case "auth/internal-error":
        return "잘못된 요청입니다.";
      default:
        return "회원가입에 실패하셨습니다.";
    }
  };

  return (
    <>
      <Header />
      <Container>
        <FormBox>
          <form onSubmit={onSubmitSignInHandler}>
            <InputGrid>
              <InputBox
                placeholder="이메일"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </InputGrid>
            <InputGrid>
              <InputBox
                placeholder="비밀번호"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
              />
            </InputGrid>
            <InputGrid>
              <Button
                type="submit"
                style={{
                  backgroundColor: "#78C1F3",
                }}
              >
                로그인하기
              </Button>
            </InputGrid>
            <div
              style={{
                width: "360px",
              }}
            >
              <Button
                type="button"
                onClick={() => {
                  navigator("/signup");
                }}
                style={{
                  backgroundColor: "#FF6969",
                }}
              >
                회원가입하러 가기
              </Button>
            </div>
          </form>
        </FormBox>
      </Container>
    </>
  );
}

const FormBox = styled.div`
  display: flex;
  justify-content: center;
  height: 600px;
  align-items: center;
`;

const InputGrid = styled.div`
  width: 360px;
  margin-bottom: 12px;
`;

const InputBox = styled.input`
  width: 100%;
  height: 40px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid lightgrey;
  padding: 8px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 12px;
  border-radius: 6px;
  color: white;
  cursor: pointer;
`;
