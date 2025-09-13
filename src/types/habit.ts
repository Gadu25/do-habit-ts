export interface Habit {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  times: Time[];
  daysOfWeek: Array<number>;
}

export interface HabitCardProps {
  habit: Habit;
  editHabit: () => void;
  deleteHabit: () => void;
}

export interface Time {
  id: number;
  time: string;
}
