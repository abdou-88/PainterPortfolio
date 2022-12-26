import { createContext, useContext } from "react";

export type GlobalContent = {
  activeBox: boolean;
  setActiveBox: (c: boolean) => void;
  contentBox: string;
  setContentBox: (c: string) => void;
  popup : boolean;
  setPopup: (c: boolean) => void;
  scOffSet: number;
  setScOffSet: (c: number) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  activeBox: true, // set a default value
  setActiveBox: () => {},
  contentBox: "Boxfolio", // set a default value
  setContentBox: () => { },
  popup: false,
  setPopup: () => { },
  scOffSet: 0, // set a default value
  setScOffSet: () => { },
  
});
export const useGlobalContext = () => useContext(MyGlobalContext);


