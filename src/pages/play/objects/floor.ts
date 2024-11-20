import { CommonObject, DrawType } from "../object-types";

const draw = [
  {
    type: DrawType.Square,
    start: [0, 0],
    length: [50, 50],
    color: "#475069",
  },
];

export const floor: CommonObject = {
  name: "floor",
  drawInstructions: () => draw,
  passable: true,
  z: 0,
};
