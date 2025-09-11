interface Habit {
  id: number,
  title: string,
  time: string
}

interface CardProps {
  habit: Habit,
  editHabit: () => void,
  deleteHabit: () => void,
}

function HabitCard ({habit, editHabit, deleteHabit}: CardProps) {
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