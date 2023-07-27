import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import * as St from "../cssd/HeaderStyled";

export default function Header() {
  const navigate = useNavigate();

  return (
    <St.CommonHeader>
      <St.CommonH1>
        <FaHome
          onClick={() => {
            navigate("/");
          }}
        />
      </St.CommonH1>
      <St.Commondiv>
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
      </St.Commondiv>
    </St.CommonHeader>
  );
}
