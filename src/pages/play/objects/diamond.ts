import { CommonObject } from "../object-types";
import { Colour } from "./colours";

const draw = (color: Colour) => [
  {
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
  passable: true,
  events: {
    standOn: ({ global }) => {
      global.increaseDiamonds(1);
      return { killSelf: true };
    },
  },
  z: 1,
});
