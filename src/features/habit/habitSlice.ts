import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Habit } from "@/types/habit";

interface HabitState {
  value: Habit[];
}

const initialState: HabitState = {
  value: [],
};

export const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Habit>) => {
      state.value.push(action.payload);
    },
    update: (state, action: PayloadAction<Habit>) => {
      console.log(action.payload);
      state.value = state.value.map((habit) =>
        habit.id === action.payload.id ? action.payload : habit,
      );
    },
    remove: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((habit) => habit.id !== action.payload);
    },
  },
});

export const { add, update, remove } = habitSlice.actions;

export default habitSlice.reducer;
