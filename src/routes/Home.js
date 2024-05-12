import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    console.log(text);
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

/* // React Redux: connect - mapStateToProps
// mapStateToProps를 사용한다는 것은 Redux Store로부터 무엇인가를 가져오고 싶을 것
function mapStateToProps(state, ownProps) {
  // state: redux store에 저장되어있는 state
  // ownProps: Home 컴포넌트에 보내진 props
  // console.log(state, ownProps);
  return { sexy: true };
} */

function mapStateToProps(state) {
  return { toDos: state };
}

// getCurrentState에 반환된 props가 Home컴포넌트의 props에 추가됨
export default connect(mapStateToProps)(Home);
