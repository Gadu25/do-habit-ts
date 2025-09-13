import type { Days, Time } from "@/types/common";

export const daysOfWeek: Days = [
  { id: 1, shorten: "S", name: "Sunday" },
  { id: 2, shorten: "M", name: "Monday" },
  { id: 3, shorten: "T", name: "Tuesday" },
  { id: 4, shorten: "W", name: "Wednesday" },
  { id: 5, shorten: "T", name: "Thursday" },
  { id: 6, shorten: "F", name: "Friday" },
  { id: 7, shorten: "S", name: "Sunday" },
]

export const emptyTime: Time = {
  id: 1,
  time: ""
}