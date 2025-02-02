import { useWeatherUnit } from "../../hooks/useWeatherUnit";
import styles from "./temperatureToggle.module.css";

const TemperatureToggle = () => {
  const { unit, toggleUnit } = useWeatherUnit();

  return (
    <div className={styles.toggleContainer}>
      <div className={styles.buttonGroup}>
        <button
          className={`${styles.button} ${unit === "C" ? styles.active : ""}`}
          onClick={toggleUnit}
        >
          °C
        </button>
        <button
          className={`${styles.button} ${unit === "F" ? styles.active : ""}`}
          onClick={toggleUnit}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default TemperatureToggle;
