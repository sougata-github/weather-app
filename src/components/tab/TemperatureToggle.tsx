import { useWeatherUnit } from "../../context/WeatherUnitContext";
import styles from "./temperatureToggle.module.css";

const TemperatureToggle = () => {
  const { unit, toggleUnit } = useWeatherUnit();

  return (
    <div className={styles.toggleWrapper}>
      <div
        className={`${styles.toggleTrack} ${
          unit === "F" ? styles.toggled : ""
        }`}
        onClick={toggleUnit}
      >
        <div className={styles.toggleThumb}></div>
        <div className={styles.toggleLabel}></div>
        <div className={styles.toggleLabel}></div>
      </div>
    </div>
  );
};

export default TemperatureToggle;
