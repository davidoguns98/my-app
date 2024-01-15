// import { useEffect } from "react";

function DogItem({ dog }) {
  //   useEffect(
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
  return (
    <div>
      <p>{dog}</p>
    </div>
  );
}
export default DogItem;
