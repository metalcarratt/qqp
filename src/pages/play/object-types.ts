import { Game } from "./misc-types";
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

export type EventFnProps = {
  global: GlobalState;
  self: Record<string, any>;
  game: Game;
};

export type EventFn = (props: EventFnProps) => void | { killSelf?: boolean };

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
