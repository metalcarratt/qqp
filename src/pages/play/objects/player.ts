import { CommonObject, DrawType } from "../object-types";

const draw = [
  {
    type: DrawType.Square,
    start: [12, 12],
    length: [30, 30],
    color: "black",
  },
  {
    type: DrawType.Square,
    start: [10, 10],
    length: [30, 30],
    color: "white",
  },
  {
    type: DrawType.Square,
    start: [14, 14],
    length: [6, 6],
    color: "black",
  },
  {
    type: DrawType.Square,
    start: [30, 14],
    length: [6, 6],
    color: "black",
  },
  {
    type: DrawType.Square,
    start: [14, 30],
    length: [16, 6],
    color: "black",
  },
];

export const player: CommonObject = {
  name: "player",
  drawInstructions: () => draw,
  passable: false,
  z: 2,
};
