import { Level } from "./level-type";
import { wall, player, floor } from "../objects";

export const level2: Level = {
  grid: [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ],
  terrainMapping: {
    0: floor,
    1: wall,
  },
  objects: [
    {
      id: 0,
      at: [6, 1],
      ...player,
    },
  ],
};
