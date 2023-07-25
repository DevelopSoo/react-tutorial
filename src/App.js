import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState } from "react";
import uuid from "react-uuid";

function App() {
  // useState의 초기값 정의
  const initialItems = [
    {
      id: uuid(),
      title: "제목1",
      content: "내용1입니다.",
      author: "작성자1",
    },
    {
      id: uuid(),
      title: "제목2",
      content: "내용2입니다.",
      author: "작성자2",
    },
    {
      id: uuid(),
      title: "제목3",
      content: "내용3입니다.",
      author: "작성자3",
    },
  ];

  // useState 임시 데이터
  const [items, setItems] = useState(initialItems);

  return (
    // 페이지 이동에 사용되는 Route 태그를 위해선 Routes로 먼저 감싸야 한다.
    <Routes>
      {/* path="/"이기 때문에 '<주소>/'인 주소로 접속할 경우 Main 컴포넌트가 화면에 보여지게 된다.  */}
      {/* props로 items 내려보내주기 */}
      <Route path="/" element={<Main items={items} setItems={setItems} />} />
      <Route
        path="/detail/:id"
        element={<Detail items={items} setItems={setItems} />}
      />
      <Route
        path="/create"
        element={<Create items={items} setItems={setItems} />}
      />
      <Route
        path="/edit/:id"
        element={<Edit items={items} setItems={setItems} />}
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
