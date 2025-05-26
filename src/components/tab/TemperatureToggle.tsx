import { useWeatherUnit } from "../../hooks/useWeatherUnit";
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
        <div className={styles.toggleLabel}>°C</div>
        <div className={styles.toggleLabel}>°F</div>
      </div>
    </div>
  );
};

export default TemperatureToggle;
