/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatDate, convertTemperature } from "../../utils";
import { useWeatherUnit } from "../../hooks/useWeatherUnit";
import { useWeatherData } from "../../hooks/useWeatherData";
import ErrorCard from "../error-card/ErrorCard";
import styles from "./forecastCard.module.css";
import Loader from "../loader/Loader";
import Card from "../card/Card";

const ForecastCard = () => {
  const { weather, isLoading, error } = useWeatherData();
  const { unit } = useWeatherUnit();

  if (isLoading) return <Loader className={styles.loader} />;
  if (error) return <ErrorCard message={error} className={styles.errorCard} />;
  if (!weather)
    return (
      <ErrorCard message={"No data available"} className={styles.errorCard} />
    );

  // forecast for 5 days (API gives data every 3 hours, so we take the first entry of each day)
  const dailyForecast = weather.list
    .filter((_: any, index: number) => index % 8 === 0)
    .slice(0, 5);

  return (
    <Card className={`${styles.card} ${styles.forecastCard}`}>
      <section className={styles.forecastSection}>
        <h2 className={styles.title}>5 Day Forecast</h2>
        <div className={styles.forecastGrid}>
          {dailyForecast.map((day: any, index: number) => {
            const { day: dayName, date } = formatDate(day.dt_txt);
            return (
              <div key={index} className={styles.forecastItem}>
                <p className={styles.dayName}>{dayName}</p>
                <p className={styles.date}>{date}</p>
                <p className={styles.temperature}>
                  {convertTemperature(day.main.temp, unit).toFixed(1)}°{unit}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </Card>
  );
};

export default ForecastCard;
