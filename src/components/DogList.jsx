import DogItem from "./DogItem";

function DogList({ dogs }) {
  return (
    <div>
      {dogs.map((dog) =>
        console.log(dog)
        // <DogItem dog={dog} />
      )}
    </div>
  );
}
export default DogList;
