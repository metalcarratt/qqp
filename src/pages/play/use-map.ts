import { useState } from "react";
import { floor } from "./objects/floor";
import { wall } from "./objects/wall";
import { CommonObject } from "./object-types";
import { GlobalState } from "./use-global-state";
import { Obj, useObjects } from "./use-objects";

const startGrid = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

const terrainMapping: Record<number, CommonObject> = {
  0: floor,
  1: wall,
};

type ForEachFn = (cell: Cell, at: number[]) => void;
type GameMap = {
  forEach: (fn: ForEachFn) => void;
};

export type MapDetails = {
  width: number;
  height: number;
  map: GameMap;
  up: () => void;
  down: () => void;
  left: () => void;
  right: () => void;
};

type Cell = {
  terrain: CommonObject;
  objects?: CommonObject[];
};

export const useMap = (globalState: GlobalState): MapDetails => {
  const { updatePlayer, killObjs, objAt, objsAt } = useObjects();
  const [grid] = useState(startGrid);
  //   const { updatePlayer, killObjs, objAt } = useObjects();

  const map: GameMap = {
    forEach: (fn) => {
      grid.forEach((row, y) =>
        row.forEach((_cell, x) => {
          const objsat = objsAt([x, y]);
          const cell = {
            terrain: terrainMapping[_cell],
            objects: objsat,
          };
          fn(cell, [x, y]);
        })
      );
    },
  };

  const movePlayer = (player: Obj, [x, y]: number[], killids: number[]) => {
    const g = grid[y][x];
    const objat = objAt([x, y]);
    // console.log(objat);
    const terrainPassable = terrainMapping[g].passable;
    const objectPassable =
      !objat ||
      (typeof objat.passable === "boolean"
        ? objat.passable
        : objat.passable(globalState, objat));
    if (terrainPassable && objectPassable) {
      if (objat) {
        const res = objat?.events?.standOn?.(globalState, objat);
        if (res?.killSelf) {
          killids.push(objat.id);
        }
      }

      player.at = [x, y];
    }
    return player;
  };

  const up = () => {
    const killids: number[] = [];
    updatePlayer((player) =>
      movePlayer(player, [player.at[0], player.at[1] - 1], killids)
    );
    killObjs(killids);
  };

  const down = () => {
    const killids: number[] = [];
    updatePlayer((player) =>
      movePlayer(player, [player.at[0], player.at[1] + 1], killids)
    );
    killObjs(killids);
  };

  const left = () => {
    const killids: number[] = [];
    updatePlayer((player) =>
      movePlayer(player, [player.at[0] - 1, player.at[1]], killids)
    );
    killObjs(killids);
  };

  const right = () => {
    const killids: number[] = [];
    updatePlayer((player) =>
      movePlayer(player, [player.at[0] + 1, player.at[1]], killids)
    );
    killObjs(killids);
  };

  return {
    width: grid[0].length,
    height: grid.length,
    map,
    up,
    down,
    left,
    right,
  };
};
