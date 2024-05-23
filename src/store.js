import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

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

// configureStore: 이 function은 미들웨어와 함께 Store를 생성함
// React DevTools 사용 가능하게 해줌
const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
