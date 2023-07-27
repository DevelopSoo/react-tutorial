import React, { useState, Fragment } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import * as St from "../css/EditStyled";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { editItem } from "../index";

export default function Edit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.contents);

  const { id } = useParams();
  const list = lists.find((lists) => lists.id === id);

  const [title, setTitle] = useState(list.title || "");
  const [content, setContent] = useState(list.content || "");

  const handleEditItem = (id) => {
    const updatedItem = {
      id,
      title,
      content,
    };

    dispatch(editItem(updatedItem));
    navigate("/");
    setTitle("");
    setContent("");
  };

  return (
    <Fragment>
      <Header />
      <Container>
        <St.EditForm
          onSubmit={(e) => {
            e.preventDefault();
            console.log("수정!");
          }}
        >
          <div>
            <St.EditInput
              placeholder={list.title}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <St.EditDiv>
            <St.EditText
              placeholder={list.content}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </St.EditDiv>
          <St.EditBtn onClick={() => handleEditItem(list.id)} 수정하기 />
        </St.EditForm>
      </Container>
    </Fragment>
  );
}
