import Main from "./components/Main";
import "./App.css";
import AllBreeds from "./components/AllBreeds";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
  // const [dogs, setDogs] = useState([]);

  // useEffect(function () {
  //   async function AllDogs() {
  //     const res = await fetch("https://dog.ceo/api/breeds/list/all");
  //     const data = await res.json();
  //     const allDogs = Object.values(data.message);
  //     console.log(allDogs);
  //     setDogs(allDogs);
  //   }
  //   AllDogs();
  // }, []);

  return (
    <div className="app">
      <Main />
      <AllBreeds />
      <Footer />
    </div>
  );
}
export default App;

// Api to call
// API: https://dog.ceo/api/breeds/list/all
// API: https://dog.ceo/api/breed/${breed}/images/random
