// import { useEffect } from "react";
import { useEffect, useState } from "react";
import styles from "./DogItem.module.css";
function DogItem({ dogName }) {
  const [images, setImages] = useState([]);
  const breed = dogName;
  useEffect(
    function () {
      async function dogImages() {
        const resImage = await fetch(
          `https://dog.ceo/api/breed/${breed}/images/random`
        );
        const URL = resImage.url;
        console.log(URL);
        setImages(URL);
      }
      dogImages();
    },
    [breed]
  );
  return (
    <div className={styles.container}>
      <div className={styles.eachDog}>
        <img src={images} alt="dog1" className={styles.image} />

        <p className={styles.title}>
          <b>{dogName}</b>
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
