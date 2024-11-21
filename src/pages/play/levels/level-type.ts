import { CommonObject } from "../object-types";
import { Obj } from "../use-objects";

export type Level = {
  grid: number[][];
  terrainMapping: Record<number, CommonObject>;
  objects: Obj[];
};
