import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginSuccess } from "./redux/slice/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();

  // 옵저버 역할 : onAuthStateChanged()
  // 처음 로그인된 상태부터 지켜봄 --> 새로고침 하더라도 로그인 상태 유지
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(loginSuccess(user.email));
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
