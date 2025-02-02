/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

type Unit = "C" | "F";

interface WeatherUnitContextType {
  unit: Unit;
  toggleUnit: () => void;
}

export const WeatherUnitContext = createContext<
  WeatherUnitContextType | undefined
>(undefined);

export const WeatherUnitProvider = ({ children }: { children: ReactNode }) => {
  const [unit, setUnit] = useLocalStorage<Unit>("unit", "C");

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  return (
    <WeatherUnitContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </WeatherUnitContext.Provider>
  );
};
