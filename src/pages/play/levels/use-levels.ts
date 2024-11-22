import { useState } from "react";
import { Level } from "./level-type";
import { level1 } from "./level1";
import { level2 } from "./level2";

export const useLevels = () => {
  const [level, setLevel] = useState<Level>(level1);

  const changeLevelName = (levelName: string) => {
    switch (levelName) {
      case "1":
        return setLevel(level1);
      case "2":
        return setLevel(level2);
    }
  };

  return { level, changeLevelName };
};
