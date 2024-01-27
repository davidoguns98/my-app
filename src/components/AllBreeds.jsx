import DogList from "./DogList";
import Search from "./Search";
import styles from "./AllBreeds.module.css";
import SearchedItem from "./SearchedItem";
import { useBreeds } from "../context/BreedContext";

function AllBreeds() {
  const { dogs, setSearch, handleSubmit, search } = useBreeds();
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
