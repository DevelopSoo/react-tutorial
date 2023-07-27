import { React } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Container from "../common/Container";
import * as St from "../css/MainStyled";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { deleteItem } from "../index";

export default function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.contents);

  const handleDeleteItem = (id) => {
    const confirmDelete = window.confirm("삭제하시겠습니까?");
    if (confirmDelete) {
      dispatch(deleteItem(id));
      navigate("/");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <St.Maindiv>
          <St.AddBtn
            onClick={() => {
              navigate("/create");
            }}
          >
            추가
          </St.AddBtn>
        </St.Maindiv>
        {lists.map((item) => (
          <St.MaindivContents key={item.id}>
            <St.Maindiv3
              onClick={() => {
                navigate("detail/" + item.id);
              }}
            >
              <h2>{item.title}</h2>
              <St.MainP>{item.content}</St.MainP>
            </St.Maindiv3>
            <St.MainTxt>
              <div>{item.author}</div>
              <div>
                <St.EditBtn
                  onClick={() => {
                    navigate("edit/" + item.id);
                  }}
                >
                  수정
                </St.EditBtn>
                <St.DelBtn
                  onClick={() => {
                    handleDeleteItem(item.id);
                  }}
                >
                  삭제
                </St.DelBtn>
              </div>
            </St.MainTxt>
          </St.MaindivContents>
        ))}
      </Container>
    </>
  );
}
