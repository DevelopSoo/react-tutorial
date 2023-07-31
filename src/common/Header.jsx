import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase/firebase";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <header
      style={{
        height: "100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px 0 24px",
      }}
    >
      <h1
        style={{
          color: "gray",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        <FaHome />
      </h1>
      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
      >
        {user.email ? (
          <>
            <div>{user.email}</div>
            <button
              onClick={async () => {
                await signOut(auth);
              }}
            >
              로그아웃
            </button>
          </>
        ) : (
          <>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </>
        )}
      </div>
    </header>
  );
}
