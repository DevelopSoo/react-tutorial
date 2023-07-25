import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export default function Header() {
  const navigate = useNavigate();
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
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
      </div>
    </header>
  );
}
