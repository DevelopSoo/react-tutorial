import { Routes, Route } from "react-router-dom";
import uuid from "react-uuid";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Edit from "./pages/Edit";
import { Link } from "react-router-dom";
import { useState } from "react";
function App() {
  const [memoData, setMemoData] = useState([
  {
    id: uuid(),
    title: "이봐요 ",
    content: "좋은 아침이네요",
    author: "구교환",
  },
  {
    id: uuid(),
    title: "좋은 점심이네요 ",
    content: "열심히 해봅시다",
    author: " 김덱스 ",
  },
  {
    id:uuid(),
    title: " 좋은 저녁입니다 ",
    content: "포기하면 안됩니다",
    author: "고준",
  },
]);

  return (
    <Routes>
      <Route 
      path="/" 
      element={<Main 
      memoData={memoData} setMemoData={setMemoData}/>} />
      <Route path="/detail/:id" 
      element={<Detail 
      memoData={memoData} setMemoData={setMemoData}/>} />      
      <Route 
      path="/create" 
      element=
      {<Create  memoData={memoData} setMemoData={setMemoData} />} />
      <Route 
      path="/edit/:id" 
      element={<Edit memoData={memoData} setMemoData={setMemoData}/>} />
      <Route 
      path="/signup" 
      element={<Signup/>} />
      <Route 
      path="/login" 
      element={<Login/>} />
      <Route path="*" 
      element={ <>
                <div>없는 페이지 입니다.</div>
                <Link to="/">홈으로</Link>
                </>}/>
    </Routes>
  );
}

export default App;
