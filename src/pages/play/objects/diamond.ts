import { CommonObject, DrawType, EventType } from "../object-types";
import { Colour } from "./colours";

const draw = (color: Colour) => [
  {
    type: DrawType.Path,
    path: [
      [25, 7],
      [7, 25],
      [25, 43],
      [43, 25],
    ],
    color,
  },
];

export const diamond = (colour: Colour): CommonObject => ({
  name: "diamond",
  drawInstructions: () => draw(colour),
  passable: false,
  events: {
    [EventType.Collect]: (globalState) => {
      globalState.increaseDiamonds(1);
      return { killSelf: true };
    },
  },
  z: 1,
});
