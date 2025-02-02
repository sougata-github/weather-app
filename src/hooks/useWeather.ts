import { useContext } from "react";

import { WeatherContext } from "../context/WeatherContext";

export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather can only be used within Provider");
  }

  return context;
}
