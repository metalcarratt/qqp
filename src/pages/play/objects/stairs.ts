import { CommonObject, DrawType } from "../object-types";

const draw = [
  {
    type: DrawType.Square,
    start: [0, 0],
    length: [50, 50],
    color: "#6e7ba3",
  },
  {
    type: DrawType.Square,
    start: [4, 4],
    length: [42, 42],
    color: "#475069",
  },
  {
    type: DrawType.Square,
    start: [38, 18],
    length: [8, 28],
    color: "#5a6585",
  },
  {
    type: DrawType.Square,
    start: [28, 14],
    length: [8, 32],
    color: "#5a6585",
  },
  {
    type: DrawType.Square,
    start: [18, 10],
    length: [8, 36],
    color: "#5a6585",
  },
  {
    type: DrawType.Square,
    start: [4, 6],
    length: [12, 40],
    color: "#5a6585",
  },
];

export const downStairs: CommonObject = {
  name: "down-stairs",
  drawInstructions: () => draw,
  passable: false,
  z: 1,
};
