import { createSlice } from "@reduxjs/toolkit";

const listItems = localStorage.getItem("listItems")

export interface ITodoListState {
  todoList: {
    name: string;
    complete: boolean;
  }[];
  repeat: boolean;
}


const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    todoList: listItems ? JSON.parse(listItems) : [],
    repeat: false,
  } as ITodoListState,
  reducers: {
    listAdd: (state, action) => {
      const newList = action.payload;
      const checkName = state.todoList.find((x) => x.name === newList.name);
      if (!checkName) {
        state.todoList.push(newList);
        state.repeat = false;
      } else {
        state.repeat = true;
      }
      localStorage.setItem("listItems", JSON.stringify(state.todoList));
    },
    listRemove: (state, action) => {
      state.todoList = state.todoList.filter((x) => x.name !== action.payload);
      localStorage.setItem("listItems", JSON.stringify(state.todoList));
    },
    listToggleComplete: (state, action) => {
      const todoItem = state.todoList.find((x) => x.name === action.payload);
      if (todoItem) {
        todoItem.complete = !todoItem.complete;
        localStorage.setItem("listItems", JSON.stringify(state.todoList));
      }
    },
  },
});

export const { listAdd, listRemove, listToggleComplete } = todoListSlice.actions;

export default todoListSlice.reducer;
