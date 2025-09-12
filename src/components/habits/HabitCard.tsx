import type { HabitCardProps } from "@/types/habit";

interface Day {
  id: number;
  shorten: string;
  name: string;
}

const daysOfWeek: Day[] = [
  {id: 1, shorten: 'S', name: 'Sunday'},
  {id: 2, shorten: 'M', name: 'Monday'},
  {id: 3, shorten: 'T', name: 'Tuesday'},
  {id: 4, shorten: 'W', name: 'Wednesday'},
  {id: 5, shorten: 'T', name: 'Thursday'},
  {id: 6, shorten: 'F', name: 'Friday'},
  {id: 7, shorten: 'S', name: 'Sunday'},
];

function HabitCard({ habit, editHabit, deleteHabit }: HabitCardProps) {
  const getDay = (id: number): string => {
    const res =  daysOfWeek.filter((day) => day.id === id)
    return res[0].name;
  }

  return (
    <>
      <div className="habit-card">
        <div className="habit-desc" onClick={editHabit}>
          <h5>{habit.name}</h5>
          <small>{habit.time}</small>
          <br/>
          <small>every</small>
          {habit.daysOfWeek.map((day) => (
            <div className="habit-day" key={day}>{getDay(day)}</div>
          ))}
          <hr/>
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
