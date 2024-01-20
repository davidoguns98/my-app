import DogItem from "./DogItem";
import styles from "./DogList.module.css";

function DogList({ dogs }) {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.header}>Available Dog Breeds</h2>
      <div className={styles.gridContainer}>
        {dogs.map((dogName) => (
          <DogItem dogName={dogName} />
        ))}
        {/* <DogItem />
        <DogItem />
        <DogItem />
        <DogItem />
        <DogItem /> */}
      </div>
    </div>
  );
}
export default DogList;
