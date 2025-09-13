import type { Habit } from "@/types/habit";
import { daysOfWeek } from "@/constants/common";

interface HabitCardProps {
  habit: Habit;
  editHabit: () => void;
  deleteHabit: () => void;
}

function HabitCard({ habit, editHabit, deleteHabit }: HabitCardProps) {
  const getDay = (id: number): string => {
    const res = daysOfWeek.filter((day) => day.id === id);
    return res[0].name;
  };

  return (
    <>
      <div className="habit-card">
        <div className="habit-desc" onClick={editHabit}>
          <h5>{habit.name}</h5>
          {habit.times.map((time) => (
            <div className="habit-time" key={time.id}>
              {time.time}
            </div>
          ))}
          <br />
          <small>every</small>
          {habit.daysOfWeek.map((day) => (
            <div className="habit-day" key={day}>
              {getDay(day)}
            </div>
          ))}
          <hr />
          <p>{habit.description}</p>
        </div>
        <div className="habit-action">
          <button onClick={deleteHabit}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default HabitCard;
