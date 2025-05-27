/* eslint-disable react-refresh/only-export-components */
import { createContext, Dispatch, SetStateAction, useContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

interface WeatherContextType {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
}

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined
);

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [city, setCity] = useLocalStorage<string>("lastCity", "kolkata");

  return (
    <WeatherContext.Provider value={{ city, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather can only be used within Provider");
  }

  return context;
}
