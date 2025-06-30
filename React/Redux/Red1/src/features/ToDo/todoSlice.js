import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello There" }],
};
export const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const Todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(Todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((T1) => {
        return T1.id !== action.payload;
      });
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
