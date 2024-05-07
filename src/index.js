import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = legacy_createStore(countModifier);

const onChange = () => {
  // console.log(countStore.getState());
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

// add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
// minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};
const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
