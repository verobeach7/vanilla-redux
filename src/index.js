import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// Reducer: countStore를 modify하는 함수
// state를 인자로 받음, Default value를 0으로 설정 / 2번째 인자: modify
const countModifier = (count = 0, action) => {
  console.log(count, action);
  // Modify state, Action에 따라 state를 수정
  if (action.type === "ADD") {
    // console.log("They are telling me to add one");
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    // Return value는 새로운 data(state)가 됨
    return count;
  }
};

// countStore: data(state)를 저장하는 곳
// Reducer의 Return값이 새로운 값이 됨
const countStore = legacy_createStore(countModifier);

// countModifier에 Action을 보내서 state를 수정
// dispatch를 사용하면 countModifier를 action({ type: "ADD" })과 함께 호출함
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());
