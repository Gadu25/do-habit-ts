export interface Habit {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  time: string;
  daysOfWeek: Array<number>;
  durationPerDay: string;
}

export interface HabitCardProps {
  habit: Habit;
  editHabit: () => void;
  deleteHabit: () => void;
}
