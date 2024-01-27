import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
const BreedContext = createContext();

function BreedProvider({ children }) {
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
    <BreedContext.Provider
      value={{ dogs, setSearch, search, foundDog, handleSubmit }}
    >
      {children}
    </BreedContext.Provider>
  );
}

function useBreeds() {
  const context = useContext(BreedContext);
  if (context === undefined)
    throw new Error("BreedContext is used oustide its context");
  return context;
}

export { BreedProvider, useBreeds };
