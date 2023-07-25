import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Edit from "./pages/Edit";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* id라는 이름은 임의로 지정해주는것임 */}
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/detail" element= {<Detail/>}/>
      <Route path="/create" element={<Create />} />
      <Route path="/edit" element={<Edit/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" 
      element={ <>
                <div>없는 페이지 입니다.</div>
                <Link to="/">홈으로</Link>
                </>}/>
    </Routes>
  );
}

export default App;
