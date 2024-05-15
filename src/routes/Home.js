import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

// mapStateToProps와 mapDispatchToProps를 이용하여 컴포넌트에서 활용할 수 있음
// function Home({ toDos, ...rest }) {
function Home({ toDos, addToDo }) {
  //   console.log(rest);
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(text);
    addToDo(text);
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      {/* mapStateToProps에서 가져온 toDos 사용 */}
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

// mapStateToProps 인자로 2개를 가짐: state, ownProps
// store.getState() 역할을 함
function mapStateToProps(state) {
  return { toDos: state };
}

// mapDispatchToProps 인자로 2개를 가짐: dispatch, ownProps
// store.dispatch() 역할을 함
function mapDispatchToProps(dispatch) {
  // dispatch를 가져옴으로써 store에 저장된 state를 바꿀 수 있는 힘이 생김
  // return에 addToDo 함수를 만들어 컴포넌트에 전달
  return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) };
}

// connect(mapStateToProps)를 이용하여 Store에 연결
export default connect(mapStateToProps, mapDispatchToProps)(Home);

// 첫번째 인자인 mapStateToProps는 필요없고 mapDispatchToProps만 필요한 경우
// export default connect(null, mapStateToProps)(Home);
