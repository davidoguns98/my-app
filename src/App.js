import Main from "./components/Main";
import "./App.css";
import { BreedProvider } from "./context/BreedContext";
import AllBreeds from "./components/AllBreeds";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <BreedProvider>
        <Main />
        <AllBreeds />
        <Footer />
      </BreedProvider>
    </div>
  );
}
export default App;

// Api to call
// API: https://dog.ceo/api/breeds/list/all
// API: https://dog.ceo/api/breed/${breed}/images/random
