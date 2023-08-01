import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Container from "../common/Container";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/slices/todosSlice";

export default function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.할일들); // slice의 상태를 가져옴

  //로그인 되어있는 지 아닌 지의 상태를 알기위해 리덕스에서 로그인 상태를 가져옴
  const isLoggedIn = useSelector((state) => state.loginSignup.isLoggedIn);
  const userEmail = useSelector((state) => state.loginSignup.userEmail);

  const handleRemoveTodo = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      dispatch(removeTodo(id)); // removeTodo 액션 디스패치하여 Redux store의 상태 업데이트
    }
  };
  return (
    <>
      <Header />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            padding: "12px",
          }}
        >
          <button
            onClick={() => {
              if (!isLoggedIn) {
                alert("로그인 후 이용해주세요.");
                navigate("/login");
              } else {
                navigate("/create");
              }
            }}
            style={{
              border: "none",
              padding: "8px",
              borderRadius: "6px",
              backgroundColor: "skyblue",
              color: "white",
              cursor: "pointer",
            }}
          >
            추가
          </button>
        </div>
        {todos.map((post) => {
          return (
            <div
              key={post.id}
              style={{
                backgroundColor: "#EEEEEE",
                height: "100px",
                borderRadius: "24px",
                marginBottom: "12px",
                display: "flex",
                padding: "12px 16px 12px 16px",
              }}
            >
              <div
                onClick={() => {
                  navigate(`/detail/${post.id}`);
                }}
                style={{
                  flex: 4,
                  borderRight: "1px solid lightgrey",
                  cursor: "pointer",
                }}
              >
                <h2>{post.title}</h2>
                <p
                  style={{
                    width: "300px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {post.content}
                </p>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                  justifyContent: "space-around",
                  gap: "12px",
                }}
              >
                <div>{post.author}</div>
                <div>
                  <button
                    onClick={() => {
                      if (post.author !== userEmail) {
                        alert("수정 권한이 없습니다.");
                        return; //return을 써서 페이지가 전환되는 것을 막음.
                      }
                      navigate(`/edit/${post.id}`);
                    }}
                    style={{
                      border: "none",
                      padding: "8px",
                      borderRadius: "6px",
                      backgroundColor: "orange",
                      color: "white",
                      cursor: "pointer",
                      marginRight: "6px",
                    }}
                  >
                    수정
                  </button>
                  <button
                    onClick={() => {
                      if (post.author !== userEmail) {
                        alert("삭제 권한이 없습니다.");
                        return; //리턴으로 막아줌
                      }
                      handleRemoveTodo(post.id); // 삭제 버튼을 누를 때 handleRemoveTodo 함수 호출
                    }}
                    style={{
                      border: "none",
                      padding: "8px",
                      borderRadius: "6px",
                      backgroundColor: "red",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </>
  );
}
