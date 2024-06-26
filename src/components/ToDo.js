import React from "react";
import { connect } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

// 2. onBtnClick 함수를 props로 전달
const ToDo = ({ text, onBtnClick, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      {/* 3. props로 받아온 onBtnClick을 사용 */}
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  // console.log(ownProps); // {text: 'a', id: 1715776006286}
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

// 1. mapDispatchToProps를 ToDo컴포넌트에 전달
export default connect(null, mapDispatchToProps)(ToDo);
