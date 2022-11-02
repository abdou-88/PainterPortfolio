import { createContext, useContext } from "react";

export type GlobalContent = {
  activeBox: boolean;
  setActiveBox: (c: boolean) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  activeBox: true, // set a default value
  setActiveBox: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
