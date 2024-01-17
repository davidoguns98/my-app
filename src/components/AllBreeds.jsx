import DogList from "./DogList";
import Search from "./Search";
import styles from "./AllBreeds.module.css";

function AllBreeds({ dogs }) {
  return (
    <div className={styles.allBreeds}>
      <Search />
      <DogList dogs={dogs} />
    </div>
  );
}

export default AllBreeds;
