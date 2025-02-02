import { useWeatherUnit } from "../../hooks/useWeatherUnit";
import { useWeatherData } from "../../hooks/useWeatherData";
import styles from "./temperatureCard.module.css";
import { convertTemperature } from "../../utils";
import ErrorCard from "../error-card/ErrorCard";
import Loader from "../loader/Loader";
import Card from "../card/Card";

const TemperatureCard = () => {
  const { weather, isLoading, error } = useWeatherData();
  const { unit } = useWeatherUnit();

  if (isLoading) return <Loader className={styles.loader} />;
  if (error) return <ErrorCard message={error} className={styles.errorCard} />;
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
  const weatherIcon = `https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`;

  return (
    <Card className={`${styles.temperatureCard} ${styles.card}`}>
      <section className={styles.temperatureSection}>
        <div className={styles.temperatureInfo}>
          <div>
            <h2 className={styles.temperatureTitle}>{cityName}</h2>
            <p className={styles.temperatureCondition}>{weatherCondition}</p>
          </div>
          <h1 className={styles.temperatureValue}>
            {temperature}°{unit}
          </h1>
        </div>
        <div className={styles.weatherIcon}>
          <img src={weatherIcon} alt={weatherCondition} />
        </div>
      </section>
    </Card>
  );
};

export default TemperatureCard;
