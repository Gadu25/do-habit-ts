import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Habit } from "@/types/habit";

interface SessionState {
  activeHabit: Habit | null;
  startedAt: string | null;
}

const initialState: SessionState = {
  activeHabit: null,
  startedAt: null
}

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    startSession: (state, action: PayloadAction<Habit>) => {
      state.activeHabit = action.payload;
      state.startedAt = new Date().toISOString();
    },
    stopSession: (state) => {
      state.activeHabit = null;
      state.startedAt = null;
    }
  }
});

export const { startSession, stopSession } = sessionSlice.actions;
export default sessionSlice.reducer;