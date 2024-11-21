import { Level } from "./level-type";
import {
  wall,
  downStairs,
  player,
  key,
  floor,
  door,
  diamond,
} from "../objects";
import { Colour } from "../objects/colours";
import { level2 } from "./level2";

export const level1: Level = {
  grid: [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ],
  terrainMapping: {
    0: floor,
    1: wall,
  },
  objects: [
    {
      id: 1,
      at: [2, 3],
      ...diamond(Colour.Yellow),
    },
    {
      id: 2,
      at: [1, 3],
      ...diamond(Colour.Red),
    },
    {
      id: 3,
      at: [6, 1],
      ...downStairs(level2),
    },
    {
      id: 4,
      at: [3, 3],
      ...player,
    },
    {
      id: 5,
      at: [1, 1],
      ...key(Colour.Red),
    },
    {
      id: 6,
      at: [5, 4],
      ...door(Colour.Red),
    },
  ],
};
