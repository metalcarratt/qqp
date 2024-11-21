import { CommonObject, DrawInstructions } from "../object-types";
import { InventoryItem } from "../use-global-state";
import { Colour } from "./colours";

const draw = (color: Colour): DrawInstructions[] => [
  {
    circle: {
      start: [15, 5],
      length: 20,
    },
    color,
  },
  {
    square: {
      start: [23, 24],
      length: [4, 20],
    },
    color,
  },
  {
    square: {
      start: [17, 30],
      length: [6, 4],
    },
    color,
  },
  {
    square: {
      start: [17, 40],
      length: [6, 4],
    },
    color,
  },
];

export const key = (colour: Colour): CommonObject => ({
  name: "key",
  drawInstructions: () => draw(colour),
  passable: true,
  events: {
    standOn: ({ global }) => {
      global.addInventory(InventoryItem.RedKey);
      return { killSelf: true };
    },
  },
  z: 1,
});
