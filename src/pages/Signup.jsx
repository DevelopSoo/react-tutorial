import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SIGNUP_ERROR_CODES } from "../lib/firebase/error";

/**
 * 저는 개발 전 이렇게 정리를 합니다. 참고하고 싶으신 분은 참고하세요. 단, commit 시 아래 글은 지우고 커밋하세요
 * firebase에 요청 전
 * 1. 이메일 입력 X -> alert 창 띄우기
 * 2. 비밀번호 (확인) 입력 X -> alert 창 띄우기
 * 3. 비밀번호 & 비밀번호 확인 일치 X -> alert 창 띄우기
 * ---------
 * firebase 요청 후
 * 4. firebase 에러 상황 정리하기 -> 객체로
 * 5. 에러에 맞는 적절한 한글 메세지 만들기
 * 6. firebase 에러에 맞는 alert 창 띄우기
 * ---------
 * 7. 회원가입 성공 시 redux로 회원정보 저장하기 (이메일 + a)
 * 8. onAuthStateChanged를 App.js 혹은 Header에 세팅해두고, 로그인 상태 변경 때마다 추적해서 redux 변경하기
 * 9.
 */
export default function Signup() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const isValidForm = () => {
    if (!inputs.email) {
      alert("이메일을 입력해주세요.");
      return false;
    }

    if (!inputs.password) {
      alert("비밀번호를 입력해주세요.");
      return false;
    }

    if (!inputs.passwordConfirm) {
      alert("비밀번호 확인을 입력해주세요.");
      return false;
    }

    if (inputs.password !== inputs.passwordConfirm) {
      alert("'비밀번호'와 '비밀번호 확인'이 일치하지 않습니다.");
      return false;
    }

    return true;
  };

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, inputs.email, inputs.password);
      navigate("/");
    } catch (error) {
      if (SIGNUP_ERROR_CODES[error.code]) {
        return alert(SIGNUP_ERROR_CODES[error.code]);
      } else {
        return alert("알 수 없는 에러입니다. 나중에 다시 시도해보세요.");
      }
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
                name="email"
                value={inputs.email}
                onChange={changeHandler}
                placeholder="이메일"
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
                name="password"
                placeholder="비밀번호"
                type="password"
                value={inputs.password}
                onChange={changeHandler}
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
                name="passwordConfirm"
                placeholder="비밀번호 확인"
                type="password"
                value={inputs.passwordConfirm}
                onChange={changeHandler}
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
                type="button"
                onClick={async () => {
                  if (isValidForm()) {
                    await signup();
                  }
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
                회원가입하기
              </button>
            </div>
            <div
              style={{
                width: "360px",
              }}
            >
              <button
                type="button"
                style={{
                  width: "100%",
                  border: "none",
                  padding: "12px",
                  borderRadius: "6px",
                  backgroundColor: "#78C1F3",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                로그인하러 가기
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}
