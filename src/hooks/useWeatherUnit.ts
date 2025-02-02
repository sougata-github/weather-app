import { useContext } from "react";

import { WeatherUnitContext } from "../context/WeatherUnitContext";

export const useWeatherUnit = () => {
  const context = useContext(WeatherUnitContext);
  if (!context)
    throw new Error("useWeatherUnit must be used within WeatherUnitProvider");
  return context;
};
