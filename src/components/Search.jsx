import { useState } from "react";
import styles from "./Search.module.css";
function Search() {
  const [search, setSearch] = useState("");
  return (
    <form className={styles.search}>
      <label htmlFor="search" className={styles.label}>
        Enter a breed of choice
      </label>
      <input
        id="search"
        className={styles.searchBar}
        type="text"
        placeholder="Search for a breed"
        value={search}
        onChange={(e) => e.target.value}
      />
    </form>
  );
}
export default Search;
