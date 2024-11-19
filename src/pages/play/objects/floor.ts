import { CommonObject, DrawType } from "../object-types";

export const floor: CommonObject = {
  name: "floor",
  drawInstructions: [
    {
      type: DrawType.Square,
      start: [0, 0],
      length: [50, 50],
      color: "#475069",
    },
  ],
  passable: true,
};
