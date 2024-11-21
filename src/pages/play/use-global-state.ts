import { useReducer } from "react";

export enum InventoryItem {
  RedKey = "Red Key",
}

type _State = {
  diamonds: number;
  inventory: InventoryItem[];
};

export type GlobalState = {
  increaseDiamonds: (by: number) => void;
  addInventory: (item: InventoryItem) => void;
  removeInventory: (item: InventoryItem) => void;
} & _State;

const reducer = (
  { diamonds, inventory }: _State,
  action: {
    increaseDiamonds?: number;
    addInventory?: InventoryItem;
    removeInventory?: InventoryItem;
  }
) => {
  if (action.increaseDiamonds) {
    return { diamonds: diamonds + action.increaseDiamonds, inventory };
  }

  if (action.addInventory) {
    inventory.push(action.addInventory);
    return { diamonds, inventory };
  }

  if (action.removeInventory) {
    inventory.splice(inventory.indexOf(action.removeInventory), 1);
    return { diamonds, inventory };
  }

  return { diamonds, inventory };
};

export const useGlobalState = () => {
  const [{ diamonds, inventory }, dispatch] = useReducer(reducer, {
    diamonds: 0,
    inventory: [],
  });

  const increaseDiamonds = (by: number) =>
    dispatch({ increaseDiamonds: diamonds + by });

  const addInventory = (item: InventoryItem) =>
    dispatch({ addInventory: item });

  const removeInventory = (item: InventoryItem) =>
    dispatch({ removeInventory: item });

  return {
    diamonds,
    inventory,
    increaseDiamonds,
    addInventory,
    removeInventory,
  };
};
