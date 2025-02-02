import { useQuery } from "@tanstack/react-query";

import { useWeather } from "./useWeather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

const fetchWeather = async (city: string) => {
  const res = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch weather data");
  return res.json();
};

export const useWeatherData = () => {
  const { city } = useWeather();

  const { data, error, isLoading } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    staleTime: 30000, // Cache for 30s
    refetchInterval: 30000, // Poll every 30s
    retry: 2,
  });

  return {
    weather: data || null,
    isLoading,
    error: error ? error.message : null,
  };
};
