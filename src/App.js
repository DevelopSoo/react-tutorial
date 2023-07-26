import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "제목",
      content: "내용",
      author: "병수",
    },
    {
      id: "2",
      title: "제목2",
      content: "내용2",
      author: "병수2",
    },
    {
      id: "3",
      title: "제목3",
      content: "내용3",
      author: "병수3",
    },
  ]);
  return (
    // 페이지 이동에 사용되는 Route 태그를 위해선 Routes로 먼저 감싸야 한다.
    <Routes>
      {/* path="/"이기 때문에 '<주소>/'인 주소로 접속할 경우 Main 컴포넌트가 화면에 보여지게 된다.  */}
      <Route path="/" element={<Main posts={posts} setPosts={setPosts} />} />
      <Route
        path="/detail/:id"
        element={<Detail posts={posts} setPosts={setPosts} />}
      />
      <Route path="/create" element={<Create setPosts={setPosts} />} />
      <Route path="/edit" element={<Edit setPosts={setPosts} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
