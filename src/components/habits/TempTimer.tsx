import { useEffect } from "react";
import type { Habit } from "@/types/habit";

interface HabitReminderProps {
  habits: Habit[]
}

function HabitReminder({ habits }: HabitReminderProps) {
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      habits.forEach(habit => {
        habit.times.forEach(t => {
          const [h, m] = t.time.split(":").map(Number);
          if (now.getHours() === h && now.getMinutes() === m) {
            alert(`Reminder: ${habit.name}`);
          } else {
            console.log('minute checked')
          }
        });
      });
    }, 60 * 1000); // check every minute

    return () => clearInterval(interval);
  }, [habits]);

  return null;
}

export default HabitReminder;
