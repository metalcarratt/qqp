import { createContext, PropsWithChildren, useContext, useReducer } from "react";
import { CommonObject } from "./object-types";

export type Obj = {
  at: number[];
  id: number;
} & CommonObject;

const reducer = ({ objs }: { objs: Obj[] }, action: { _objs?: Obj[], name: string, newLevel?: Obj[] }) => {
  console.log("reduce", action._objs, action.name);
  if (action._objs) {
    return { objs: action._objs };
  }

  if (action.newLevel) {
    return { objs: action.newLevel};
  }

  return { objs };
};

export type UseObjects = {
  updatePlayer: (fn: (player: Obj) => Obj) => void;
  killObjs: (killids: number[]) => void;
  objAt: ([x, y]: number[]) => Obj | undefined;
  objsAt: ([x, y]: number[]) => Obj[];
  newLevel: (objs: Obj[]) => void;
};

const ObjectContext = createContext<UseObjects | null>(null);

export const ObjectProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, { objs: [] });

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

  const objsAt: UseObjects["objsAt"] = ([x, y]) =>
    state.objs.filter((o) => o.at[0] === x && o.at[1] === y).sort((a, b) => a.z - b.z);

  const newLevel: UseObjects["newLevel"] = (objs) => dispatch({newLevel: objs, name: 'new level'});

  const value = { updatePlayer, killObjs, objAt, objsAt, newLevel };
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