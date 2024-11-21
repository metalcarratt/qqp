import { Level } from "./levels/level-type";

export type Game = {
  changeLevel: (level: Level) => void;
};
