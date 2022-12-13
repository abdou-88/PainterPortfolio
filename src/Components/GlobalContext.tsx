import { createContext, useContext } from "react";

export type GlobalContent = {
  activeBox: boolean;
  setActiveBox: (c: boolean) => void;
  contentBox: string;
  setContentBox: (c: string) => void;
  popup : boolean;
  setPopup: (c: boolean) => void;
  
};
export const MyGlobalContext = createContext<GlobalContent>({
  activeBox: true, // set a default value
  setActiveBox: () => {},
  contentBox: "Boxfolio", // set a default value
  setContentBox: () => { },
  popup: false,
  setPopup: () => { },
  
});
export const useGlobalContext = () => useContext(MyGlobalContext);


