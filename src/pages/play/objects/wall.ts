import { CommonObject, DrawType } from "../object-types";

const draw = [
  {
    type: DrawType.Square,
    start: [0, 0],
    length: [50, 50],
    color: "#9ca6c5",
  },
];

export const wall: CommonObject = {
  name: "wall",
  drawInstructions: () => draw,
  passable: false,
  z: 2,
};
