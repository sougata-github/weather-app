import WeatherDetails from "../../components/weather-details/WeatherDetails";
import TemperatureCard from "../../components/temperature/TemperatureCard";
import TemperatureToggle from "../../components/tab/TemperatureToggle";
import ForecastCard from "../../components/forecast/ForecastCard";
import SearchBar from "../../components/search/SearchBar";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboardCard}>
      <div className={styles.dashboardContainer}>
        <div className={styles.topSection}>
          <SearchBar />
          <TemperatureToggle />
        </div>
        <WeatherDetails />
        <div className={styles.secondRow}>
          <div className={styles.tempCard}>
            <TemperatureCard />
          </div>
          <div className={styles.forecastCard}>
            <ForecastCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
