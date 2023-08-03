import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { collection, getDocs, query } from 'firebase/firestore';
import { setUser, isLogin } from '../redux/modules/userSlice';

export default function Header() {
  /* 
  QA : 
  1. firebase 속도 최적화 하는 방법 
  2. reduxUsers를 반복해서 선언해서 사용하고 있는데, 로그인 상태 유지하는 방법
  3. 새로고침 했을 때 로그인 유지하기

  공부 : 
  1. useCallback() 
  */

  const reduxUsers = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const loginUser = reduxUsers.find((user) => user.email === auth.currentUser?.email);

  useEffect(() => {
    /* onAutchChange 형태로 리팩토링 해보기 */
    /* 파이어스토어 삭제 */
    const fetchData = async () => {
      const q = query(collection(db, 'users'));
      const querySnapshot = await getDocs(q);

      const fireBaseUserData = [];

      querySnapshot.forEach((doc) => {
        fireBaseUserData.push({ id: doc.id, ...doc.data() });
      });

      dispatch(setUser(fireBaseUserData));
    };

    fetchData();
  }, []);

  const logOut = async (e) => {
    e.preventDefault();
    console.log('로그아웃 완료');

    dispatch(isLogin({ ...loginUser, isLogin: false }));
    await signOut(auth);
  };

  return (
    <header
      style={{
        height: '100px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px 0 24px'
      }}
    >
      <h1
        style={{
          color: 'gray',
          cursor: 'pointer'
        }}
      >
        {/* - 홈 로고 클릭 시 메인페이지(`/`)로 이동 */}
        <Link to="/">
          <FaHome />
        </Link>
      </h1>

      <div
        style={{
          display: 'flex',
          gap: '12px'
        }}
      >
        {loginUser?.isLogin ? (
          <>
            <div>{loginUser.email}</div>
            <button onClick={logOut}>로그아웃</button>
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
