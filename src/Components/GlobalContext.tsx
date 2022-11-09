import { createContext, useContext } from "react";

export type GlobalContent = {
  activeBox: boolean;
  setActiveBox: (c: boolean) => void;
  contentBox: string;
  setContentBox: (c: string) => void;
  scrollSide : string;
  setScrollSide: (c: string) => void;
  
};
export const MyGlobalContext = createContext<GlobalContent>({
  activeBox: true, // set a default value
  setActiveBox: () => {},
  contentBox: "Boxfolio", // set a default value
  setContentBox: () => { },
  scrollSide: "N",
  setScrollSide: () => { },
  
});
export const useGlobalContext = () => useContext(MyGlobalContext);


