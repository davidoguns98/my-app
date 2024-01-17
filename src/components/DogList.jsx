import DogItem from "./DogItem";
import styles from "./DogList.module.css";

function DogList({ dogs }) {
  return (
    <>
      <h2 className={styles.header}>Available Dog Breeds</h2>
      <div className={styles.gridContainer}>
        <DogItem />
        <DogItem />
        <DogItem />
        <DogItem />
        <DogItem />
        <DogItem />
      </div>
    </>
  );
}
export default DogList;
