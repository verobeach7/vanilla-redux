import { configureStore, createSlice } from "@reduxjs/toolkit";

// createSlice는 actions와 reducer를 함께 생성해줌
// createSlice는 actions를 자동으로 설정해줌(add, remove action 자동 생성)
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload.text, id: action.payload.id });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

// toDos(createSlice)의 reducer를 Store에 다시 설정
const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
