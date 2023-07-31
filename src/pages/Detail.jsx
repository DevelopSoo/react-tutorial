import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQueryClient, useQuery, useMutation } from "react-query";
import { api } from "../lib/axios/base";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    isLoading,
    data: post,
    error,
  } = useQuery(["post", id], async () => {
    const res = await api.get(`/posts/${id}`);
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
  // @ts-ignore
  const user = useSelector((state) => state.user);

  const isLoggedIn = () => {
    if (!user.email) return false;
    return true;
  };

  const isSameUser = (author) => {
    if (user.email !== author) return false;
    return true;
  };

  const goToEditPage = () => {
    if (!isLoggedIn()) {
      return alert("로그인 후 사용할 수 있습니다.");
    }
    if (!isSameUser(post.author)) {
      return alert("작성자가 일치하지 않습니다.");
    }
    navigate("/edit", {
      state: {
        post: post,
      },
    });
  };

  const onDeleteHandler = () => {
    if (!isLoggedIn()) {
      return alert("로그인 후 사용할 수 있습니다.");
    }
    if (!isSameUser(post.author)) {
      return alert("작성자가 일치하지 않습니다.");
    }
    const result = window.confirm("정말로 삭제하시겠습니까?");
    if (result) {
      mutation.mutate(post.id);
      navigate("/");
    }
  };

  return (
    <>
      <Header />
      <Container>
        {isLoading ? <div>로딩중</div> : null}
        {error ? <div>에러발생</div> : null}
        {post ? (
          <>
            <h1
              style={{
                border: "1px solid lightgray",
                borderRadius: "12px",
                padding: "12px",
              }}
            >
              {post.title}
            </h1>
            <div
              style={{
                height: "400px",
                border: "1px solid lightgray",
                borderRadius: "12px",
                padding: "12px",
              }}
            >
              {post.content}
            </div>
            <div
              style={{
                marginTop: "12px",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <button
                onClick={goToEditPage}
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
                onClick={onDeleteHandler}
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
          </>
        ) : null}
      </Container>
    </>
  );
}
