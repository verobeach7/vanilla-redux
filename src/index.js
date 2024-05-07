import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// Reducer: countStore를 modify하는 함수
// Return value는 새로운 data(state)가 됨
const countModifier = (state = 0) => {
  // Modify state
  return state;
};

// countStore: data(state)를 저장하는 곳
// Reducer의 Return값이 새로운 값이 됨
const countStore = legacy_createStore(countModifier);

console.log(countStore.getState());
