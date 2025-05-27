import {
  Sun,
  Cloud,
  CloudRain,
  CloudDrizzle,
  CloudSnow,
  CloudFog,
  Zap,
  CloudLightning,
  CloudHail,
  ThermometerSnowflake,
} from "lucide-react";

import { useWeatherUnit } from "../../context/WeatherUnitContext";
import { useWeatherData } from "../../hooks/useWeatherData";
import styles from "./temperatureCard.module.css";
import { convertTemperature } from "../../utils";
import ErrorCard from "../error-card/ErrorCard";
import Loader from "../loader/Loader";

const weatherIcons: { [key: string]: JSX.Element } = {
  Clear: <Sun size={48} />,
  Clouds: <Cloud size={48} />,
  Rain: <CloudRain size={48} />,
  Drizzle: <CloudDrizzle size={48} />,
  Thunderstorm: <CloudLightning size={48} />,
  Snow: <CloudSnow size={48} />,
  Mist: <CloudFog size={48} />,
  Smoke: <CloudFog size={48} />,
  Haze: <CloudFog size={48} />,
  Dust: <CloudFog size={48} />,
  Fog: <CloudFog size={48} />,
  Sand: <CloudFog size={48} />,
  Ash: <CloudFog size={48} />,
  Squall: <CloudHail size={48} />,
  Tornado: <Zap size={48} />,
};

const TemperatureCard = () => {
  const { weather, isLoading, error } = useWeatherData();
  const { unit } = useWeatherUnit();

  if (isLoading) return <Loader className={styles.loader} />;
  if (error) return null;
  if (!weather)
    return (
      <ErrorCard message={"No data available"} className={styles.errorCard} />
    );

  const cityName = weather.city.name;
  const temperature = convertTemperature(
    weather.list[0].main.temp,
    unit
  ).toFixed(1);
  const weatherCondition = weather.list[0].weather[0].main;
  // const weatherIcon = `https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`;

  return (
    <div className={styles.card}>
      <h2 className={styles.temperatureTitle}>Temperature</h2>
      <section className={styles.temperatureSection}>
        <div className={styles.temperatureInfo}>
          <div>
            <h2 className={styles.temperatureCity}>{cityName}</h2>
          </div>
          <h1 className={styles.temperatureValue}>
            {temperature}°{unit}
          </h1>
        </div>
        <div className={styles.weatherIconContainer}>
          <div className={styles.weatherIcon}>
            {weatherIcons[weatherCondition] || (
              <ThermometerSnowflake size={60} />
            )}
          </div>
          <p className={styles.temperatureCondition}>{weatherCondition}</p>
        </div>
      </section>
    </div>
  );
};

export default TemperatureCard;
