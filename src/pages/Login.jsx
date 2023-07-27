import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate } from "react-router";
import * as St from "../css/LoginStyled";

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <St.LoginDiv>
          <form>
            <St.LoginInputDiv>
              <St.LoginInput placeholder="이메일" />
            </St.LoginInputDiv>
            <St.LoginInputDiv>
              <St.LoginInput placeholder="비밀번호" type="password" />
            </St.LoginInputDiv>
            <St.LoginBtnDiv>
              <St.LoginBtn>로그인하기</St.LoginBtn>
            </St.LoginBtnDiv>
            <St.LoginBtnDiv>
              <St.SignupBtn
                onClick={() => {
                  navigate("/signup");
                }}
              >
                회원가입하러 가기
              </St.SignupBtn>
            </St.LoginBtnDiv>
          </form>
        </St.LoginDiv>
      </Container>
    </>
  );
}
