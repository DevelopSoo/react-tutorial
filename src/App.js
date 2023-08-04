import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";

export default function App() {
  //useState를 선언해서 기본으로 보여지는 값을 만들어준다.
  const [todos, setTodos] = useState();

  return (
    // 페이지 이동에 사용되는 Route 태그를 위해선 Routes로 먼저 감싸야 한다.
    <Routes>
      {/* path="/"이기 때문에 '<주소>/'인 주소로 접속할 경우 Main 컴포넌트가 화면에 보여지게 된다.  */}
      <Route path="/" element={<Main todos={todos} setTodos={setTodos} />} />
      <Route path="/detail/:id" element={<Detail todos={todos} setTodos={setTodos} />} />
      <Route path="/create" element={<Create setTodos={setTodos} />} />
      <Route path="/edit/:id" element={<Edit todos={todos} setTodos={setTodos} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
