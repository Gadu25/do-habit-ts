import type React from "react";
import type { Habit } from "@/types/habit";

interface HabitFormProps {
  isEdit: boolean;
  singleHabit: Habit;
  setSingleHabit: (habit: Habit) => void;
  submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

const daysOfWeek = [
  {id: 1, shorten: 'S', name: 'Sunday'},
  {id: 2, shorten: 'M', name: 'Monday'},
  {id: 3, shorten: 'T', name: 'Tuesday'},
  {id: 4, shorten: 'W', name: 'Wednesday'},
  {id: 5, shorten: 'T', name: 'Thursday'},
  {id: 6, shorten: 'F', name: 'Friday'},
  {id: 7, shorten: 'S', name: 'Sunday'},
];

function HabitForm({isEdit, singleHabit, setSingleHabit, submitForm,}: HabitFormProps) {
  
  const handleDaysOfWeek = (id:number) => {
    const daysOfWeek = singleHabit.daysOfWeek
    if (daysOfWeek.includes(id)) {
      const newDays = daysOfWeek.filter((day) => day !== id);
      setSingleHabit({...singleHabit, daysOfWeek: newDays})
    } else {
      setSingleHabit({...singleHabit, daysOfWeek:[...singleHabit.daysOfWeek, id]})
    }
  }
  
  return (
    <>
      <div className="habit-form">
        <div className="title">
          <h1>{isEdit ? "Update Habit 🖊" : "New Habit ➕" }</h1>
        </div>
        <form onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="form-habit-name">Name</label>
            <input
              id="form-habit-name"
              type="text"
              name="name"
              placeholder="Name a new habit"
              onChange={(e) => setSingleHabit({ ...singleHabit, name: e.target.value })}
              value={singleHabit.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="form-habit-time">Remind every</label>
            <input
              id="form-habit-time"
              type="time"
              name="time"
              onChange={(e) => setSingleHabit({ ...singleHabit, time: e.target.value })}
              value={singleHabit.time}
            />
          </div>
          <div className="form-group">
            <label htmlFor="form-habit-description">Description</label>
            <textarea
              id="form-habit-description"
              name="description" 
              value={singleHabit.description} 
              onChange={(e) => setSingleHabit({ ...singleHabit, description: e.target.value})}
              rows={3}
              placeholder="test"
            >
            </textarea>
          </div>
          <div className="form-group">
            <span>How Frequent do you want to do this?</span>
            <div className="form-week">
              {daysOfWeek.map((day) => (
                <div 
                  className={`form-day ${singleHabit.daysOfWeek.includes(day.id) ? 'active': ''}`} 
                  key={day.id} 
                  title={day.name}
                  onClick={()=>handleDaysOfWeek(day.id)}
                  >
                    {day.shorten}
                </div>
              ))}
            </div>
          </div>
            <button type="submit">Save</button>
        </form>
      </div>
    </>
  )
}

export default HabitForm;