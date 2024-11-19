import { GlobalState } from "./use-global-state";

export enum DrawType {
  Square = "square",
  RoundedSquare = "rounded-square",
  Path = "path",
}

export type DrawInstructions = {
  type: DrawType;
  start?: number[];
  length?: number[];
  path?: number[][];
  color: string;
};

export enum EventType {
  Collect = "collect",
}

export type EventFn = (
  globalState: GlobalState
) => void | { killSelf?: boolean };

export type CommonObject = {
  name: string;
  drawInstructions: DrawInstructions[];
  passable: boolean;
  events?: Record<EventType, EventFn>;
};
