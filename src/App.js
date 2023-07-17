import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user?.email);
    });
  }, []);

  return (
    <>
      {currentUser ? (
        <>
          <div>{currentUser}</div>
          <button
            onClick={async () => {
              alert("로그아웃 할까?");
              await signOut(auth);
            }}
          >
            로그아웃
          </button>
        </>
      ) : (
        <>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={async () => {
              try {
                const userCredential = await createUserWithEmailAndPassword(
                  auth,
                  email,
                  password
                );
              } catch (error) {
                console.error(error);
              }
            }}
          >
            회원가입
          </button>
          <button
            onClick={async (event) => {
              event.preventDefault();
              try {
                const userCredential = await signInWithEmailAndPassword(
                  auth,
                  email,
                  password
                );
              } catch (error) {
                console.error(error);
              }
            }}
          >
            로그인
          </button>
        </>
      )}
    </>
  );
}

export default App;
