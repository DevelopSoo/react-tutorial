import React from 'react';
import Header from '../../common/Header';
import Container from '../../common/Container';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import * as S from './Signup.styled';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import useInput from '../../hooks/useInput';
import { doc, setDoc } from 'firebase/firestore';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const initialState = {
    userName: '',
    email: '',
    password: '',
    passwordVerify: ''
  };

  const [{ userName, email, password, passwordVerify }, onChange, reset] = useInput(initialState);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const newUser = {
        id: uuid(),
        userName,
        email,
        isLogin: true
      };

      // firebase Doc ID와 user ID를 동일하게 설정 [addDoc대신 setDoc사용]
      await setDoc(doc(db, 'users', newUser.id), newUser);

      reset();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <S.SignInner>
          <form>
            <S.InputWrapper>
              <Input id="uid" placeholder="이름" name="userName" onChange={onChange} value={userName} />
            </S.InputWrapper>
            <S.InputWrapper>
              <Input placeholder="이메일" name="email" onChange={onChange} value={email} />
            </S.InputWrapper>
            <S.InputWrapper>
              <Input placeholder="비밀번호" type="password" name="password" onChange={onChange} value={password} />
            </S.InputWrapper>
            <S.InputWrapper>
              <Input
                placeholder="비밀번호 확인"
                type="password"
                name="passwordVerify"
                onChange={onChange}
                value={passwordVerify}
              />
            </S.InputWrapper>
            <S.ButtonWrapper>
              <Button variant="solid" color="black" size="XLarge" onClick={handleSignUp}>
                회원가입
              </Button>
            </S.ButtonWrapper>
            <S.GotoLink to="/login">
              <Button variant="text" type="submit">
                로그인
              </Button>
            </S.GotoLink>
          </form>
        </S.SignInner>
      </Container>
    </>
  );
}
