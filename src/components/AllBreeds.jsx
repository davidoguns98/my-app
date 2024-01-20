import DogList from "./DogList";
import Search from "./Search";
import styles from "./AllBreeds.module.css";
import SearchedItem from "./SearchedItem";

function AllBreeds({ dogs, setSearch, handleSubmit, search, foundDog }) {
  return (
    <div className={styles.allBreeds}>
      <Search
        handleSubmit={handleSubmit}
        setSearch={setSearch}
        search={search}
      />
      {search ? <SearchedItem /> : <DogList dogs={dogs} />}
    </div>
  );
}

export default AllBreeds;
