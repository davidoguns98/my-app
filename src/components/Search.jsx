import styles from "./Search.module.css";
function Search({ handleSubmit, setSearch, search }) {
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
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onSubmit={handleSubmit}>search</button>
    </form>
  );
}
export default Search;
