import { CommonObject, DrawType } from "../object-types";

export const wall: CommonObject = {
  name: "wall",
  drawInstructions: [
    {
      type: DrawType.Square,
      start: [0, 0],
      length: [50, 50],
      color: "#9ca6c5",
    },
  ],
  passable: false,
};
