import { useState } from "react";
import { Level } from "./level-type";
import { level1 } from "./level1";

export const useLevels = () => {
  const [level, setLevel] = useState<Level>(level1);

  return { level, setLevel };
};
