import Main from "./components/Main";
import "./App.css";
import AllBreeds from "./components/AllBreeds";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [dogs, setDogs] = useState([]);
  const [search, setSearch] = useState("");
  const [foundDog, setFoundDog] = useState("");

  useEffect(function () {
    async function AllDogs() {
      const res = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await res.json();
      const allDogs = Object.keys(data.message);
      console.log(allDogs);
      setDogs(allDogs);
    }

    AllDogs();
  }, []);

  const handleSubmit = async function searchItem(e) {
    e.preventDefault();
    const searched = await fetch(
      ` https://dog.ceo/api/breed/${search}/images/random`
    );
    const foundItem = await searched.json();
    console.log(foundItem);
    setFoundDog(foundItem);
  };

  return (
    <div className="app">
      <Main />
      <AllBreeds
        dogs={dogs}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
        search={search}
        foundDog={foundDog}
      />
      <Footer />
    </div>
  );
}
export default App;

// Api to call
// API: https://dog.ceo/api/breeds/list/all
// API: https://dog.ceo/api/breed/${breed}/images/random
