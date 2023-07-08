import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increaseAge } from "./store";

export default function Button() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <span>{state.user.age}</span>
      <button
        onClick={() => {
          dispatch(increaseAge(10));
        }}
      >
        숫자 증가
      </button>
    </>
  );
}
