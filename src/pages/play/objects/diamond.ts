import { CommonObject, DrawType, EventType } from "../object-types";

export const diamond: CommonObject = {
  name: "diamond",
  drawInstructions: [
    {
      type: DrawType.Path,
      path: [
        [25, 7],
        [7, 25],
        [25, 43],
        [43, 25],
      ],
      color: "yellow",
    },
  ],
  passable: false,
  events: {
    [EventType.Collect]: (globalState) => {
      globalState.increaseDiamonds(1);
      return { killSelf: true };
    },
  },
};
