import { legacy_createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// 방법 1. data 생성(javascript 방식)
// const toDos = [];
// 이후 데이터가 수정되면 toDos를 수정하고 다시 상황별로 랜더링을 다시 하는 함수를 작성하는 방식으로 처리해야 함

// 방법 2. data 생성(redux 이용 방식)
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE TODO";

const reducer = (state = [], action) => {
  // console.log(action); // {type: 'ADD_TODO', text: 'asdf'}
  switch (action.type) {
    case ADD_TODO:
      // ...: es6 spread
      return [...state, { text: action.text, id: action.id }];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

store.subscribe(() => console.log(store.getState()));

/* const createToDo = (toDo) => {
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li);
}; */

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  // createToDo(toDo);
  // dispatch를 통해서 reducer와 커뮤니케이션 할 수 있음. 원하는 모든 정보 보낼 수 있음.
  store.dispatch({ type: ADD_TODO, text: toDo, id: Date.now() });
};

form.addEventListener("submit", onSubmit);
