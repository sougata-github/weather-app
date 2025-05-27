import { Search } from "lucide-react";
import { useState } from "react";

import { useWeather } from "../../context/WeatherContext";
import styles from "./searchBar.module.css";

const SearchBar = () => {
  const { setCity } = useWeather();
  const [input, setInput] = useState("");

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
      <button type="submit">
        <Search size={20} className={styles.button} />
      </button>
    </form>
  );
};

export default SearchBar;
