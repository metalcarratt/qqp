import { GlobalState } from "./use-global-state";

export type DrawInstructions = {
  square?: {
    start: number[];
    length: number[];
  };
  path?: number[][];
  circle?: {
    start: number[];
    length: number;
  };
  color: string;
};

export type EventType = "standOn";

export type EventFn = (
  globalState: GlobalState,
  self: CommonObject
) => void | { killSelf?: boolean };

export type PassableFn = (
  globalState: GlobalState,
  self: CommonObject
) => boolean;

export type CommonObject = {
  name: string;
  drawInstructions: (self: CommonObject) => DrawInstructions[];
  state?: Record<string, any>;
  passable: boolean | PassableFn;
  z: number;
  events?: {
    standOn?: EventFn;
  };
};
