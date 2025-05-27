import WeatherDetails from "../../components/weather-details/WeatherDetails";
import TemperatureCard from "../../components/temperature/TemperatureCard";
import TemperatureToggle from "../../components/tab/TemperatureToggle";
import ForecastCard from "../../components/forecast/ForecastCard";
import Container from "../../components/container/Container";
import SearchBar from "../../components/search/SearchBar";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboardCard}>
      <div className={styles.topSection}>
        <SearchBar />
        <TemperatureToggle />
      </div>
      <Container>
        <TemperatureCard />
        <WeatherDetails />
        <ForecastCard />
      </Container>
    </div>
  );
};

export default Dashboard;
