import React from "react";
import { useState } from "react";
import HabitCard from "@/components/habits/HabitCard";

interface Habit {
  id: number,
  title: string,
  time: string
}

function Habits () {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [singleHabit, setSingleHabit] = useState<Habit>({id: 0, title: "", time: ""});
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEdit) {
      updateHabit()
    } else {
      saveHabit()
    }
    setSingleHabit({id: 0, title: "", time: ""});
  }

  const saveHabit = () => {
    const id = habits.length > 0 ? habits[habits.length-1].id + 1 : 1;
    const habitWithId = {...singleHabit, id: id}
    setHabits([...habits, habitWithId]);
  }

  const updateHabit = () => {
    setHabits(habits.map((habit) => habit.id === singleHabit.id ?
      singleHabit : habit
    ))
    setIsEdit(false);
  }

  const editHabit = (habit: Habit) => {
    setIsEdit(true);
    setSingleHabit({id: habit.id, title: habit.title, time: habit.time});
  }

  const deleteHabit = (id: number) => {
    setHabits(habits.filter((habit) => habit.id !== id))
  }

  return (
    <>
      <div className="habits-page">
        <div className="col">
          <h4>List of Habits</h4>
          <div className="habit-list">
            {habits?.map((habit, index)=>(
              <HabitCard habit={habit} editHabit={() => editHabit(habit)} deleteHabit={() => deleteHabit(habit.id)} key={index} />
              // <div className="habit" key={index}>
              //   <p onClick={() => editHabit(habit)}>{habit.id} - {habit.title} - {habit.time}</p>
              //   <span onClick={() => {deleteHabit(habit.id)}}>delete</span>
              // </div>
            ))}
          </div>
        </div>
        <div className="col">
          <h4>Create a Habit</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="title" placeholder="Name a new habit" onChange={(e) => setSingleHabit({...singleHabit, title:e.target.value})} value={singleHabit.title}/>
            </div>
            <div className="form-group">
              <label>Remind every</label>
              <input type="time" name="time" onChange={(e) => setSingleHabit({...singleHabit, time:e.target.value})} value={singleHabit.time}/>
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Habits;