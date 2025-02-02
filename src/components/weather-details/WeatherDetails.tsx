import { Cloud, Droplet, Thermometer, Wind } from "lucide-react";

import { useWeatherUnit } from "../../hooks/useWeatherUnit";
import { useWeatherData } from "../../hooks/useWeatherData";
import styles from "./weatherDetails.module.css";
import { convertTemperature } from "../../utils";
import ErrorCard from "../error-card/ErrorCard";
import Loader from "../loader/Loader";
import Card from "../card/Card";

const WeatherDetails = () => {
  const { weather, isLoading, error } = useWeatherData();
  const { unit } = useWeatherUnit();

  if (isLoading) return <Loader className={styles.loader} />;
  if (error) return <ErrorCard message={error} className={styles.errorCard} />;
  if (!weather)
    return (
      <ErrorCard message={"No data available"} className={`styles.errorCard`} />
    );

  const humidity = weather.list[0].main.humidity;
  const realFeel = convertTemperature(
    weather.list[0].main.feels_like,
    unit
  ).toFixed(1);
  const windSpeed = weather.list[0].wind.speed;
  const chanceOfRain = weather.list[0].rain ? weather.list[0].rain["3h"] : 0;

  return (
    <Card className={`${styles.weatherCard} ${styles.card}`}>
      <section className={styles.weatherSection}>
        <h2 className={styles.weatherTitle}>Air conditions</h2>
        <div className={styles.weatherStats}>
          <div className={styles.weatherColumn}>
            <div className={styles.weatherItem}>
              <div className={styles.weatherIconLabel}>
                <Droplet size={20} />
                <p className={styles.weatherLabel}>Humidity</p>
              </div>
              <h2 className={styles.weatherValue}>{humidity}</h2>
            </div>

            <div className={styles.weatherItem}>
              <div className={styles.weatherIconLabel}>
                <Wind size={20} />
                <p className={styles.weatherLabel}>Wind Speed</p>
              </div>
              <h2 className={styles.weatherValue}>{windSpeed}</h2>
            </div>
          </div>

          <div className={styles.weatherColumn}>
            <div className={styles.weatherItem}>
              <div className={styles.weatherIconLabel}>
                <Thermometer size={20} />
                <p className={styles.weatherLabel}>Real Feel</p>
              </div>
              <h2 className={styles.weatherValue}>{realFeel}</h2>
            </div>

            <div className={styles.weatherItem}>
              <div className={styles.weatherIconLabel}>
                <Cloud size={20} />
                <p className={styles.weatherLabel}>Rain Chance</p>
              </div>
              <h2 className={styles.weatherValue}>{chanceOfRain}</h2>
            </div>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default WeatherDetails;
