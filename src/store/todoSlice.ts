import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../models/todo';

type TodoState = Todo[];

const initialState: TodoState = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    set: (state, action) => {
      // state = [...action.payload];
      state.push(...action.payload);
    },
    add: (state, action) => {
      state = [action.payload, ...state];
    },
    del: (state, action) => {
      state = state.filter((todo) => todo.id !== action.payload);
    },
    clear: (state, action) => {
      state = state.map((todo) =>
        todo.id === action.payload ? { ...todo, type: 'clear' } : todo
      );
    },
    update: (state, action) => {
      const { id, type } = action.payload;
      state = state.map((todo) =>
        todo.id === id ? { ...todo, type: type } : todo
      );
    },
  },
});

export const { set, add, del, clear, update } = todoSlice.actions;
export default todoSlice.reducer;
