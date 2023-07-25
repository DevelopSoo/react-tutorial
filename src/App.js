import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Edit from "./pages/Edit";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

function App() {
  const [posts, setPosts] = useState([
    {
      id: nanoid(),
      title: "제목1",
      content: "내용1",
      author: "호빵",
    },
    {
      id: nanoid(),
      title: "제목2",
      content: "내용2",
      author: "찐빵",
    },
    {
      id: nanoid(),
      title: "제목3",
      content: "내용3",
      author: "식빵",
    },
  ]);

  return (
    // 페이지 이동에 사용되는 Route 태그를 위해선 Routes로 먼저 감싸야 한다.
    <Routes>
      {/* path="/"이기 때문에 '<주소>/'인 주소로 접속할 경우 Main 컴포넌트가 화면에 보여지게 된다.  */}
      <Route path="/" element={<Main posts={posts} />} />
      <Route path="/detail/:id" element={<Detail posts={posts} />} />
      <Route
        path="/create"
        element={<Create posts={posts} setPosts={setPosts} />}
      />
      <Route path="/edit/:id" element={<Edit posts={posts} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
