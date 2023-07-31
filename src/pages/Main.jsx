import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Container from "../common/Container";
import { useQueryClient } from "react-query";
import { useQuery } from "react-query";
import { api } from "../lib/axios/base";
import { useMutation } from "react-query";
import { useAuth } from "../hooks/useAuth";

export default function Main() {
  const navigate = useNavigate();
  const { isLoggedIn, isSameUser } = useAuth();
  const queryClient = useQueryClient();
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery("posts", async () => {
    const res = await api.get("/posts");
    return res.data;
  });

  const mutation = useMutation(
    async (id) => {
      await api.delete(`/posts/${id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );

  const goToEditPage = (post) => {
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
  };

  const onDeleteHandler = (post) => {
    if (!isLoggedIn()) {
      return alert("로그인 후 사용할 수 있습니다.");
    }
    if (!isSameUser(post.author)) {
      return alert("작성자가 일치하지 않습니다.");
    }
    const result = window.confirm("정말로 삭제하시겠습니까?");
    if (result) {
      mutation.mutate(post.id);
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
        {isLoading ? <div>로딩중</div> : null}
        {error ? <div>에러발생</div> : null}
        {posts?.map((post) => (
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
                  onClick={() => goToEditPage(post)}
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
                  onClick={() => onDeleteHandler(post)}
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
