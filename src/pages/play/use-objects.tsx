import { createContext, PropsWithChildren, useContext, useReducer } from "react";
import { player } from "./objects/player";
import { diamond } from "./objects/diamond";
import { CommonObject } from "./object-types";

export type Obj = {
  //   type: number;
  at: number[];
  id: number;
} & CommonObject;

const startObjects: Obj[] = [
  {
    id: 0,
    at: [3, 3],
    ...player,
  },
  {
    id: 1,
    at: [1, 3],
    ...diamond,
  },
  {
    id: 2,
    at: [1, 1],
    ...diamond,
  },
];

const reducer = ({ objs }: { objs: Obj[] }, action: { _objs?: Obj[], name: string }) => {
  console.log("reduce", action._objs, action.name);
  if (action._objs) {
    return { objs: action._objs };
  }

  return { objs };
};

export type UseObjects = {
  updatePlayer: (fn: (player: Obj) => Obj) => void;
  killObjs: (killids: number[]) => void;
  objAt: ([x, y]: number[]) => Obj | undefined;
};

const ObjectContext = createContext<UseObjects | null>(null);

export const ObjectProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, { objs: startObjects });

  const updatePlayer: UseObjects["updatePlayer"] = (fn) => {
    console.log("start player update");
    const _objs = state.objs.map((o) => {
      if (o.name === "player") {
        return fn(o);
      }
      return o;
    });

    dispatch({ _objs , name: 'player update'});
    console.log("end player update");
  };

  const killObjs: UseObjects["killObjs"] = (killids) => {
    console.log("start kill objs", killids);
    const _objs = state.objs.filter((o) => !killids.includes(o.id));

    dispatch({ _objs, name: 'kill objs' });
    console.log("end kill objs");
  };

  const objAt: UseObjects["objAt"] = ([x, y]) =>
    state.objs.find((o) => o.at[0] === x && o.at[1] === y);

  const value = { updatePlayer, killObjs, objAt };
  return (
    <ObjectContext.Provider value={value}>{children}</ObjectContext.Provider>
  );
};

export const useObjects = (): UseObjects => {
  const context = useContext(ObjectContext);
  if (!context) {
    throw 'error';
  }
  return context;
}