import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // 사용자의 로그인 상태 변경 감지
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          setCurrentUser(user.email);
        } catch (error) {
          console.log("사용자 정보를 가져오는 데 실패했습니다.\n", error);
        }
      } else {
        setCurrentUser(null); // 로그인되지 않은 상태면 null로 설정
      }
    });
    return () => unsubscribe(); // 컴포넌트 언마운트 시 이벤트 구독 해제
  }, []);

  return (
    // 페이지 이동에 사용되는 Route 태그를 위해선 Routes로 먼저 감싸야 한다.
    <Routes>
      {/* path="/"이기 때문에 '<주소>/'인 주소로 접속할 경우 Main 컴포넌트가 화면에 보여지게 된다.  */}
      {/* props로 items 내려보내주기 */}
      <Route path="/" element={<Main currentUser={currentUser} />} />
      <Route
        path="/detail/:id"
        element={<Detail currentUser={currentUser} />}
      />
      <Route path="/create" element={<Create currentUser={currentUser} />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        element={
          <>
            <div>없는 페이지입니다.</div>
            <Link to="/">홈으로 이동</Link>
          </>
        }
      />
    </Routes>
  );
}

export default App;
