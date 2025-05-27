import { Search } from "lucide-react";
import { useState } from "react";

import { useWeather } from "../../context/WeatherContext";
import styles from "./searchBar.module.css";

const SearchBar = () => {
  const { city, setCity } = useWeather();
  const [input, setInput] = useState(city || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setCity(input.trim());
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchContainer}>
      <input
        placeholder="Enter City"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={styles.input}
      />

      <Search
        size={20}
        className={styles.button}
        onClick={handleSubmit}
        role="button"
      />
    </form>
  );
};

export default SearchBar;
