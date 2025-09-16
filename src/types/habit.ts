import type { Time } from "./common";

// interfaces
export interface Habit {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  times: Time[];
  daysOfWeek: Array<number>;
  // denormalized fields for fast reads:
  lastCompletedAt: Date | null;
  streak: number | null;
  bestStreak: number | null;
}
