import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/main/Main';
import Detail from '../pages/detail/Detail';
import Create from '../pages/Create';
import Edit from '../pages/edit/Edit';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import uuid from 'react-uuid';

const Router = () => {
  const initialState = [
    { id: uuid(), title: '정예반 과제 하기', content: '내용', author: '김선익' },
    { id: uuid(), title: 'typeScript 강의 듣기', content: '내용', author: '김선익' },
    { id: uuid(), title: 'TIL 작성하기', content: '내용', author: '김선익' }
  ];

  const [todos, setTodos] = useState(initialState);

  return (
    // 페이지 이동에 사용되는 Route 태그를 위해선 Routes로 먼저 감싸야 한다.
    <Routes>
      {/* path="/"이기 때문에 '<주소>/'인 주소로 접속할 경우 Main 컴포넌트가 화면에 보여지게 된다.  */}
      <Route path="/" element={<Main todos={todos} />} />
      <Route path="/detail/:id" element={<Detail todos={todos} />} />
      <Route path="/create" element={<Create todos={todos} setTodos={setTodos} />} />
      {/* - 메인 페이지(`/`), 상세페이지(`/detail/:id`)에서 **수정 버튼** 클릭 시 **수정 컴포넌트** 보여주기 */}
      <Route path="/edit/:id" element={<Edit todos={todos} setTodos={setTodos} />} />
      {/* - **로그인 버튼** 클릭 시 **로그인 컴포넌트** 보여주기 */}
      <Route path="/signup" element={<Login />} />
      {/* - **회원가입 버튼** 클릭 시 **회원가입 컴포넌트** 보여주기 */}
      <Route path="/login" element={<Signup />} />
    </Routes>
  );
};

export default Router;
