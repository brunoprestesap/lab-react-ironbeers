import { Route, Routes } from "react-router-dom";
import "./App.css";
import Allbeers from "./pages/Allbeers";
import HomePage from "./pages/HomePage";
import PageDetails from "./pages/PageDetails";
import RandomBeer from "./pages/RandomBeer";
import { useState, useEffect} from 'react';
import axios from "axios";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function fetchBeers() {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/"
      );
      setBeers(response.data);
    }

    fetchBeers();
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Allbeers beers={beers}/>} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/beers/:beerId" element={<PageDetails beers={beers}/>} />
      </Routes>
    </div>
  );
}

export default App;
