import { createContext, useContext } from "react";
import { Row } from "read-excel-file";

export type FoodContextType = {
  food: Row;
  setFood: (c: Row) => void;
};

export const FoodContext = createContext<FoodContextType>({
  food: null,
  setFood: () => {},
});

export const useFoodContext = () => useContext(FoodContext);
