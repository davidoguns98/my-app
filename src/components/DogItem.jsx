// import { useEffect } from "react";
import styles from "./DogItem.module.css";
function DogItem() {
  return (
    <div className={styles.container}>
      <div className={styles.eachDog}>
        <img src="./dog1.jpg" alt="dog1" className={styles.image} />
        <p className={styles.title}>
          <b>DogName</b>
        </p>
        <p className={styles.description}>description about the breed</p>
        <a className={styles.link} href="/">
          See More
        </a>
      </div>
    </div>
  );
}
export default DogItem;
// useEffect(
//     function () {
//       async function getImages() {
//         const res = await fetch(
//           `https://dog.ceo/api/breed/${dog}/images/random`
//         );
//         console.log(res);
//       }
//       getImages();
//     },
//     [dog]
//   );
