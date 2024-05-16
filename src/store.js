import { legacy_createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

/* console.log(addToDo, deleteToDo); // function 출력
console.log(addToDo.type, deleteToDo.type); // ADD, Delete 출력
console.log(addToDo(), deleteToDo()); // {type: 'ADD', payload: undefined}, {type: 'DELETE', payload: undefined}
*/

const reducer = (state = [], action) => {
  switch (action.type) {
    // addToDo.type은 "ADD"를 참조함
    case addToDo.type:
      // return [{ text: action.text, id: action.id }, ...state];
      console.log(action);
      // createAction을 사용하는 경우 나머지 것들은 payload를 통함
      return [{ text: action.payload.text, id: action.payload.id }, ...state];
    case deleteToDo.type:
      console.log(action);
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
