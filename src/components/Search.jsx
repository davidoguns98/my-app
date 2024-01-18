import styles from "./Search.module.css";
function Search() {
  return (
    <div className={styles.search}>
      <label htmlFor="search" className={styles.label}>
        Enter a breed of choice
      </label>
      <input
        id="search"
        className={styles.searchBar}
        type="text"
        placeholder="Search for a breed"
      />
    </div>
  );
}
export default Search;
