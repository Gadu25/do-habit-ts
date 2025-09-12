export interface Habit {
  id: number;
  title: string;
  time: string;
}

export interface HabitCardProps {
  habit: Habit;
  editHabit: () => void;
  deleteHabit: () => void;
}
