import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import Edit from "./pages/Edit";
import Signup from "./pages/Signup";

function App() {
  const [todos, setTodos] = useState([
    {
      id: nanoid(),
      title: "제목1",
      content: "졸지않기",
      author: "작성자1",
    },
    {
      id: nanoid(),
      title: "제목2",
      content: "과제하기",
      author: "작성자2",
    },
    {
      id: nanoid(),
      title: "제목3",
      content: "이해하기",
      author: "작성자3",
    },
  ]);

  return (
    // 페이지 이동에 사용되는 Route 태그를 위해선 Routes로 먼저 감싸야 한다.
    <Routes>
      {/* path="/"이기 때문에 '<주소>/'인 주소로 접속할 경우 Main 컴포넌트가 화면에 보여지게 된다.  */}
      {/* Main 컴포넌트에 todos를 전달 */}
      <Route path="/" element={<Main todos={todos} setTodos={setTodos} />} />
      <Route
        path="/detail/:id"
        element={<Detail todos={todos} setTodos={setTodos} />}
      />
      <Route
        path="/create"
        element={<Create todos={todos} setTodos={setTodos} />}
      />
      <Route
        path="/edit/:id"
        element={<Edit todos={todos} setTodos={setTodos} />}
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<>로그인페이지</>} />
    </Routes>
  );
}

export default App;
