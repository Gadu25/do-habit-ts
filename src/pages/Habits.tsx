import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, update, remove } from "@/features/habit/habitSlice";
import HabitCard from "@/components/habits/HabitCard";
import HabitForm from "@/components/habits/HabitForm";
import type { RootState } from "@/app/store";

import type { Habit } from "@/types/habit";

const emptyHabit = {
  id: 0,
  name: "",
  description: "",
  createdAt: "",
  times: [{ id: 1, time: "" }],
  daysOfWeek: [],
};

function Habits() {
  const habits = useSelector((state: RootState) => state.habits.value);
  const dispatch = useDispatch();

  const [singleHabit, setSingleHabit] = useState<Habit>(emptyHabit);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEdit) {
      updateHabit();
    } else {
      saveHabit();
    }
    setSingleHabit(emptyHabit);
  };

  const saveHabit = () => {
    const id = habits.length > 0 ? habits[habits.length - 1].id + 1 : 1;
    const habitWithId = { ...singleHabit, id: id };
    dispatch(add(habitWithId));
  };

  const updateHabit = () => {
    dispatch(update(singleHabit));
    setIsEdit(false);
  };

  const editHabit = (habit: Habit) => {
    setIsEdit(true);
    setSingleHabit({
      id: habit.id,
      name: habit.name,
      description: habit.description,
      createdAt: habit.createdAt,
      times: [{ id: 1, time: "" }],
      daysOfWeek: habit.daysOfWeek,
    });
  };

  const deleteHabit = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <>
      <div className="habits-page">
        <div className="col">
          <h1>List of Habits</h1>
          <div className="habit-list">
            {habits?.map((habit, index) => (
              <HabitCard
                habit={habit}
                editHabit={() => editHabit(habit)}
                deleteHabit={() => deleteHabit(habit.id)}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="col">
          <HabitForm
            isEdit={isEdit}
            singleHabit={singleHabit}
            setSingleHabit={setSingleHabit}
            submitForm={handleSubmit}
          />
        </div>
      </div>
    </>
  );
}

export default Habits;
