import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ toDos }) => {
  const id = useParams().id; // useParams는 {id: 123123123123} 형태임
  console.log(id); // 1715777864193
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
  console.log(toDo); // {text: 'a', id: 1715777864193}
  return (
    <>
      {/* rendering 시점에 undefined이므로 ? 이용 */}
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
};

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
