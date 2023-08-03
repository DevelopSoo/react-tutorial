import React from 'react';
import Header from '../../common/Header';
import Container from '../../common/Container';
import * as S from './Login.styled';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import useInput from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const initialState = {
    email: '',
    password: ''
  };

  const [{ email, password }, onChange, reset] = useInput(initialState);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      reset();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <S.LoginInner>
          <form>
            <S.InputWrapper>
              <Input placeholder="이메일" name="email" value={email} onChange={onChange} />
            </S.InputWrapper>
            <S.InputWrapper>
              <Input placeholder="비밀번호" type="password" name="password" value={password} onChange={onChange} />
            </S.InputWrapper>
            <S.ButtonWrapper>
              <Button variant="solid" color="black" size="XLarge" onClick={handleSignIn}>
                로그인
              </Button>
            </S.ButtonWrapper>
            <S.GotoLink to="/signup">
              <Button variant="text">회원가입</Button>
            </S.GotoLink>
          </form>
        </S.LoginInner>
      </Container>
    </>
  );
}
