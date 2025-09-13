// interfaces
export interface Day {
  id: number;
  shorten: string;
  name: string;
}

export interface Time {
  id: number;
  time: string;
}

// types
export type Days = Day[];