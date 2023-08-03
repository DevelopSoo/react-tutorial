import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Container from "../common/Container";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../redux/posts";

export default function Main() {
  const navigate = useNavigate();
  // @ts-ignore
  const posts = useSelector((state) => state.posts);
  // @ts-ignore
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const isLoggedIn = () => {
    if (!user.email) return false;
    return true;
  };

  const isSameUser = (author) => {
    if (user.email !== author) return false;
    return true;
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
              if (!isLoggedIn()) {
                return alert("로그인 후 사용할 수 있습니다.");
              }
              navigate("/create");
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
        {posts.map((post) => (
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
                    if (!isLoggedIn()) {
                      return alert("로그인 후 사용할 수 있습니다.");
                    }
                    if (!isSameUser(post.author)) {
                      return alert("작성자가 일치하지 않습니다.");
                    }
                    navigate("/edit", {
                      state: {
                        post,
                      },
                    });
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
                    if (!isLoggedIn()) {
                      return alert("로그인 후 사용할 수 있습니다.");
                    }
                    if (!isSameUser(post.author)) {
                      return alert("작성자가 일치하지 않습니다.");
                    }
                    const result = window.confirm("정말로 삭제하시겠습니까?");
                    if (result) {
                      dispatch(deletePost(post.id));
                    }
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
        ))}
      </Container>
    </>
  );
}
