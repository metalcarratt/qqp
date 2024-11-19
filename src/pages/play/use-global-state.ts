import { useReducer } from "react";

export type GlobalState = {
  diamonds: number;
  increaseDiamonds: (by: number) => void;
};

const reducer = (
  { diamonds }: { diamonds: number },
  action: { increaseDiamonds?: number }
) => {
  if (action.increaseDiamonds) {
    return { diamonds: diamonds + action.increaseDiamonds };
  }

  return { diamonds };
};

export const useGlobalState = () => {
  const [{ diamonds }, dispatch] = useReducer(reducer, { diamonds: 0 });

  const increaseDiamonds = (by: number) =>
    dispatch({ increaseDiamonds: diamonds + by });

  return {
    diamonds: diamonds,
    increaseDiamonds,
  };
};
