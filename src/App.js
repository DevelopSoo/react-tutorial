import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Edit from "./pages/Edit";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

function App() {
  const navigate = useNavigate();
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

  // 삭제 버튼
  const onClickDeleteBtnHandler = (id) => {
    const result = window.confirm("정말로 삭제할거냥?");
    if (result) {
      const filterdPost = posts.filter((post) => post.id !== id);
      setPosts(filterdPost);
    }
    navigate("/");
  };

  return (
    // 페이지 이동에 사용되는 Route 태그를 위해선 Routes로 먼저 감싸야 한다.
    <Routes>
      {/* path="/"이기 때문에 '<주소>/'인 주소로 접속할 경우 Main 컴포넌트가 화면에 보여지게 된다.  */}
      <Route
        path="/"
        element={
          <Main
            posts={posts}
            setPosts={setPosts}
            onClickDeleteBtnHandler={onClickDeleteBtnHandler}
          />
        }
      />
      <Route
        path="/detail/:id"
        element={
          <Detail
            posts={posts}
            setPosts={setPosts}
            onClickDeleteBtnHandler={onClickDeleteBtnHandler}
          />
        }
      />
      <Route
        path="/create"
        element={<Create posts={posts} setPosts={setPosts} />}
      />
      <Route
        path="/edit/:id"
        element={<Edit posts={posts} setPosts={setPosts} />}
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
