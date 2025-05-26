import "./App.css";

import WeatherDetails from "./components/weather-details/WeatherDetails";
import TemperatureCard from "./components/temperature/TemperatureCard";
import TemperatureToggle from "./components/tab/TemperatureToggle";
import ForecastCard from "./components/forecast/ForecastCard";
import Container from "./components/container/Container";
import SearchBar from "./components/search/SearchBar";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <main className="app">
      <Navbar />
      <div className="topSection">
        <SearchBar />
        <TemperatureToggle />
      </div>
      <Container>
        <TemperatureCard />
        <WeatherDetails />
        <ForecastCard />
      </Container>
    </main>
  );
};

export default App;
