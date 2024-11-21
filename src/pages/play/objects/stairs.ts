import { CommonObject } from "../object-types";

const draw = [
  {
    square: {
      start: [0, 0],
      length: [50, 50],
    },
    color: "#6e7ba3",
  },
  {
    square: {
      start: [4, 4],
      length: [42, 42],
    },
    color: "#475069",
  },
  {
    square: {
      start: [38, 18],
      length: [8, 28],
    },
    color: "#5a6585",
  },
  {
    square: {
      start: [28, 14],
      length: [8, 32],
    },
    color: "#5a6585",
  },
  {
    square: {
      start: [18, 10],
      length: [8, 36],
    },
    color: "#5a6585",
  },
  {
    square: {
      start: [4, 6],
      length: [12, 40],
    },
    color: "#5a6585",
  },
];

export const downStairs: CommonObject = {
  name: "down-stairs",
  drawInstructions: () => draw,
  passable: true,
  z: 1,
};
