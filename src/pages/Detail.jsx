import React from "react";
import { useParams } from "react-router-dom/dist";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate } from "react-router-dom";
import * as St from "../css/DetailStyled";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { deleteItem } from "../index";

export default function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lists = useSelector((state) => state.contents);
  const { id } = useParams();
  const list = lists.find((lists) => lists.id === id);

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
        <St.DetailH1>{list.title}</St.DetailH1>
        <St.DetailDiv1>{list.content}</St.DetailDiv1>
        <St.DetailDiv2>
          <St.DetailBtn1
            onClick={() => {
              navigate("/edit/" + list.id);
            }}
          >
            수정
          </St.DetailBtn1>
          <St.DetailBtn2
            onClick={() => {
              handleDeleteItem(list.id);
            }}
          >
            삭제
          </St.DetailBtn2>
        </St.DetailDiv2>
      </Container>
    </>
  );
}
