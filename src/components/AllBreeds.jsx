import DogList from "./DogList";
import Search from "./Search";

function AllBreeds({ dogs }) {
  return (
    <div>
      <Search />
      <DogList dogs={dogs} />
    </div>
  );
}

export default AllBreeds;
