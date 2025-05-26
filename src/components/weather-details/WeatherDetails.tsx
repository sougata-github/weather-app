import { Cloud, Droplet, Thermometer, Wind } from "lucide-react";

import { useWeatherUnit } from "../../hooks/useWeatherUnit";
import { useWeatherData } from "../../hooks/useWeatherData";
import styles from "./weatherDetails.module.css";
import { convertTemperature } from "../../utils";
import ErrorCard from "../error-card/ErrorCard";
import Loader from "../loader/Loader";

const WeatherDetails = () => {
  const { weather, isLoading, error } = useWeatherData();
  const { unit } = useWeatherUnit();

  if (isLoading) return <Loader className={styles.loader} />;
  if (error) return null;
  if (!weather)
    return (
      <ErrorCard message={"No data available"} className={styles.errorCard} />
    );

  const humidity = weather.list[0].main.humidity;
  const realFeel = convertTemperature(
    weather.list[0].main.feels_like,
    unit
  ).toFixed(1);
  const windSpeed = weather.list[0].wind.speed;
  const chanceOfRain = weather.list[0].rain ? weather.list[0].rain["3h"] : 0;

  const stats = [
    {
      label: "Humidity",
      value: `${humidity}%`,
      icon: <Droplet size={20} className={styles.iconColor} />,
    },
    {
      label: "Real Feel",
      value: `${realFeel}°`,
      icon: <Thermometer size={20} className={styles.iconColor} />,
    },
    {
      label: "Wind Speed",
      value: `${windSpeed} km/h`,
      icon: <Wind size={20} className={styles.iconColor} />,
    },
    {
      label: "Rain Chance",
      value: `${chanceOfRain}%`,
      icon: <Cloud size={20} className={styles.iconColor} />,
    },
  ];

  return (
    <section className={styles.weatherGrid}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.card}>
          <div className={styles.weatherItem}>
            <div className={styles.weatherIconLabel}>
              <p className={styles.weatherLabel}>{stat.label}</p>
              {stat.icon}
            </div>
            <h2 className={styles.weatherValue}>{stat.value}</h2>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WeatherDetails;
