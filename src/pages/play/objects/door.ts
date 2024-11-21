import { CommonObject, DrawInstructions } from "../object-types";
import { InventoryItem } from "../use-global-state";
import { Colour } from "./colours";

const drawClosed = (colour: Colour): DrawInstructions[] => [
  {
    square: {
      start: [0, 0],
      length: [50, 50],
    },
    color: "white",
  },
  {
    square: {
      start: [4, 4],
      length: [42, 42],
    },
    color: colour,
  },
  {
    circle: {
      start: [33, 20],
      length: 8,
    },
    color: "white",
  },
];

const drawOpen = (colour: Colour): DrawInstructions[] => [
  {
    square: {
      start: [0, 0],
      length: [50, 50],
    },
    color: "white",
  },
  {
    square: {
      start: [4, 4],
      length: [42, 42],
    },
    color: colour,
  },
  {
    path: [
      [4, 46],
      [46, 30],
      [46, 46],
    ],
    color: "#475069",
  },
  //   {
  //     circle: {
  //       start: [33, 8],
  //       length: 8,
  //     },
  //     color: "white",
  //   },
];

export const door = (colour: Colour): CommonObject => ({
  name: "door",
  drawInstructions: (self) =>
    self?.state?.open ? drawOpen(colour) : drawClosed(colour),
  state: {
    open: false,
  },
  passable: (globalState, self) =>
    globalState.inventory.includes(InventoryItem.RedKey) || self?.state?.open,
  events: {
    standOn: ({ global, self }) => {
      global.removeInventory(InventoryItem.RedKey);
      self.open = true;
    },
  },
  z: 1,
});
