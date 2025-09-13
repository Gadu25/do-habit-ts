import type { Time } from "./common";

// interfaces
export interface Habit {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  times: Time[];
  daysOfWeek: Array<number>;
}
