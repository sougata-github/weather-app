import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { useWeatherUnit } from "../../context/WeatherUnitContext";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatDate, convertTemperature } from "../../utils";
import { useWeatherData } from "../../hooks/useWeatherData";
import ErrorCard from "../error-card/ErrorCard";
import styles from "./forecastCard.module.css";
import Loader from "../loader/Loader";

const ForecastCard = () => {
  const { weather, isLoading, error } = useWeatherData();
  const { unit } = useWeatherUnit();

  if (isLoading) return <Loader className={styles.loader} />;
  if (error) return <ErrorCard message={error} className={styles.errorCard} />;
  if (!weather)
    return (
      <ErrorCard message={"No data available"} className={styles.errorCard} />
    );

  const dailyForecast = weather.list
    .filter((_: any, index: number) => index % 8 === 0)
    .slice(0, 5)
    .map((day: any) => {
      const { day: dayName } = formatDate(day.dt_txt);
      return {
        name: dayName.slice(0, 3),
        temp: Number(convertTemperature(day.main.temp, unit).toFixed(1)),
        dayIndex: new Date(day.dt_txt).getDay(),
      };
    });

  return (
    <div className={`${styles.card} ${styles.forecastCard}`}>
      <section className={styles.forecastSection}>
        <h2 className={styles.title}>5 Day Forecast</h2>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={dailyForecast}>
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              stroke="#6B7280"
              style={{ fontSize: "14px" }}
            />
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.02)" }}
              contentStyle={{
                backgroundColor: "var(--background)",
                borderRadius: "8px",
                border: "none",
              }}
              labelStyle={{ fontWeight: 600 }}
              formatter={(value: number) => [`${value}°${unit}`, "Temp"]}
            />
            <Bar
              dataKey="temp"
              radius={[6, 6, 0, 0]}
              barSize={30}
              isAnimationActive={true}
            >
              {dailyForecast.map((index: number) => (
                <Cell key={`bar-${index}`} fill={"rgb(16, 185, 129)"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ForecastCard;
