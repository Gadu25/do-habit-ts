import type { HabitCardProps } from "@/types/habit";

function HabitCard ({habit, editHabit, deleteHabit}: HabitCardProps) {
  return (
    <>
      <div className="habit-card">
        <div className="habit-desc" onClick={editHabit}>
          <h5>{habit.title}</h5>
          <span>{habit.time}</span>
        </div>
        <div className="habit-action">
          <button onClick={deleteHabit}>Delete</button>
        </div>
      </div>
    </>
  )
}

export default HabitCard;