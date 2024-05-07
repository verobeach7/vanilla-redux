import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

// string으로 사용하면 잘못 타이핑 했을 때 어디서 오류가 발생했는지 알 수 없음
// 자동완성기능을 이용할 수 있으며 오타가 발생하면 어디서 에러가 발생했는지 알려줌
const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  // if문 대신 switch 사용
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = legacy_createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
