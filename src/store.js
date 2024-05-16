import { legacy_createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

/* const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      console.log(action);
      return [{ text: action.payload.text, id: action.payload.id }, ...state];
    case deleteToDo.type:
      console.log(action);
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
}; */

const reducer = createReducer([], (builder) => {
  builder
    .addCase(addToDo, (state, action) => {
      // return하지 않고 mutation 사용
      state.push({ text: action.payload.text, id: action.payload.id });
    })
    .addCase(deleteToDo, (state, action) =>
      // 즉시 return함
      state.filter((toDo) => toDo.id !== action.payload)
    );
});

const store = legacy_createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
